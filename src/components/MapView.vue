<template>
    <div class="w-full h-full">
        <div id="map" style="height: 100vh;"></div>
    </div>
</template>

<script>
import L from "leaflet";

export default {
    props: {
        temples: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            map: null,
            blueDotIcon: null,
            showPopup: false,
            popupContent: "",
        };
    },
    methods: {
        initializeMap() {
            this.map = L.map("map").setView([13.724394101825414, 100.52334624878982], 13);

            // Add tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "© OpenStreetMap contributors",
            }).addTo(this.map);

            // Add current location control
            const currentLocationControl = L.Control.extend({
                options: { position: "bottomright" },
                onAdd: () => {
                    const button = L.DomUtil.create("button", "leaflet-bar leaflet-control-custom");
                    button.innerText = "📍";
                    button.style.cursor = "pointer";
                    button.onclick = () => this.map.locate({ setView: true, maxZoom: 16 });
                    return button;
                },
            });
            this.map.addControl(new currentLocationControl());

            // Event listeners for location
            this.map.on("locationfound", (e) => {
                L.marker(e.latlng, { icon: this.blueDotIcon }).addTo(this.map);
            });
            this.map.on("locationerror", (e) => alert(e.message));

            // Add temple markers
            this.temples.forEach((temple) => {
                const marker = L.marker([parseFloat(temple.latitude), parseFloat(temple.longitude)]).addTo(this.map);
                marker.on("click", () => this.fetchPopupContent(temple.id));
            });
        },
        initializeBlueDotIcon() {
            this.blueDotIcon = L.icon({
                iconUrl:
                    "data:image/svg+xml;base64," +
                    btoa(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="white" /><circle cx="50" cy="50" r="30" fill="#4287f5" /></svg>`
                    ),
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [0, -15],
            });
        },
        fetchPopupContent(templeId) {
            fetch(`/temple_popup/${templeId}`)
                .then((response) => response.text())
                .then((html) => {
                    this.popupContent = html;
                    this.showPopup = true;
                });
        },
        closePopup() {
            this.showPopup = false;
            this.popupContent = "";
        },
    },
    mounted() {
        this.initializeBlueDotIcon();
        this.initializeMap();
    },
};
</script>

<style></style>