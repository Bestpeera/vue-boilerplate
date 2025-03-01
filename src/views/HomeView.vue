<template>
  <div class="bg-yellow-300">
    <!-- Header -->
    <div class="max-h-[25vh] px-4 pt-4 pb-5 space-y-2">
      <div class="flex flex-row justify-center">
        <img class="h-[7vh]" src="/images/logo.png">
      </div>
      <div class="grid grid-flow-col gap-x-1">
        <div class="grid place-items-start" @click="goFilterView()">
          <div class="flex flex-col items-center">
            <img src="/icons/icon-star.png" class="h-[5vh]">
            <p class="text-center">ฟิลเตอร์<br>โชคชะตา</p>
          </div>
        </div>
        <div v-if="filterStore.selectedFilters.length === 0" class="flex justify-start">
          <div class="grid grid-rows-2 grid-flow-col-dense justify-start gap-1 overflow-x-auto ">
            <BlankTag />
            <BlankTag />
            <BlankTag />
            <BlankTag />
          </div>
        </div>
        <div v-else class="grid grid-rows-2 grid-flow-col-dense justify-start gap-1 overflow-x-auto ">
          <Tag v-for="tag in filterStore.selectedFilters" :icon_img_url="tag.image_url" :text="tag.name"
            bg_color="bg-purple-350" />
        </div>
      </div>
    </div>

    <!-- Temple list -->
    <div class="flex flex-col bg-special-white rounded-t-[20px] justify-center p-5 gap-y-6">
      <div>
        <img class="w-full justify-center" src="/images/example_ads.png" />
      </div>
      <div v-if="temples.length > 0" class="flex flex-col gap-y-6">
        <TempleList v-for="temple in temples" :key="temple.id" :temple_id="temple.id" :temple_name="temple.thai_name"
          :temple_image_url="temple.main_image_url" :distance="temple.distance" :tags="temple.tags"
          :distance_description="fetch_type === FETCH_TYPE.SEARCH_LOCATION ? 'จากสถานที่ที่คุณค้นหา' : 'จากคุณ'" />
      </div>
      <div v-else>
        <p class="text-center text-gray-500">No temples found.</p>
      </div>
    </div>

  </div>
  <div
    class="fixed bottom-4 left-1/2 -translate-x-1/2 w-[340px] flex flex-row bg-special-white rounded-[20px] justify-center p-4 shadow-lg">
    <!-- Input Field -->
    <input v-model="search_text" type="text" placeholder="ค้นหาสถานที่"
      class="bg-transparent text-black text-lg focus:outline-none flex-1" @keydown.enter="searchLocation" />
    <!-- Current Location Button -->
    <button @click="getCurrentLocation"
      class="ml-2 flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full">
      <img src="/icons/icon-current_location.png">
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useFilterStore } from '@/stores/filterStore';
import { useRouter } from "vue-router";
import Tag from "@/components/icons/Tag.vue";
import TempleList from "@/components/TempleList.vue";
import BlankTag from "@/components/icons/BlankTag.vue";

// Reactive variables
const temples = ref([]);
const router = useRouter();
const filterStore = useFilterStore();
const search_text = ref(filterStore.search_text);
const latitude = ref(filterStore.latitude);
const longitude = ref(filterStore.longitude);
const fetch_type = ref(filterStore.fetch_type);

const FETCH_TYPE = {
  CURRENT_LOCATION: "current_location",
  SEARCH_LOCATION: "search_location",
};


// Sync store updates when variables change
watch(search_text, (val) => filterStore.setSearchText(val));
watch(latitude, (val) => filterStore.setLocation(val, longitude.value));
watch(longitude, (val) => filterStore.setLocation(latitude.value, val));
watch(fetch_type, (val) => filterStore.setFetchType(val));

const goFilterView = () => {
  router.push({ path: `/filter` });
};

// Fetch temple data on mount
const fetchTemples = async () => {
  const params = new URLSearchParams();

  if (latitude.value !== null) params.append("latitude", latitude.value);
  if (longitude.value !== null) params.append("longitude", longitude.value);
  if (fetch_type.value === FETCH_TYPE.SEARCH_LOCATION) {
    if (search_text.value.trim() !== "") params.append("search_text", search_text.value);
  }
  const tagIds = filterStore.selectedFilters.map(tag => tag.id).join(",");
  if (tagIds) params.append("tag_ids", tagIds);

  const apiUrl = `http://127.0.0.1:8000/temples/temple?${params.toString()}`;

  console.log(apiUrl); // Debugging: Check the final URL
  // Fetch the API with apiUrl
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    temples.value = data;
  } catch (error) {
    console.error("Failed to fetch temples:", error);
  };
}

const searchLocation = () => {
  fetch_type.value = FETCH_TYPE.SEARCH_LOCATION;
  fetchTemples();
}

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude.value = position.coords.latitude;
        longitude.value = position.coords.longitude;
        console.log("Updated Latitude:", latitude.value, "Longitude:", longitude.value);
        fetch_type.value = FETCH_TYPE.CURRENT_LOCATION;
        fetchTemples();
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

// Fetch data on component mount
onMounted(() => {
  fetchTemples();
});
</script>
