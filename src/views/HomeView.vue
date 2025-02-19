<template>
  <div class="bg-yellow-300">
    <!-- Header -->
    <div class="max-h-[25vh] px-4 pt-4 pb-5 space-y-2 justify-center items-center">
      <div class="flex flex-row justify-center">
        <img class="h-[7vh]" src="/images/logo.png">
      </div>
      <div v-if="filterStore.selectedFilters.length === 0" class="flex justify-center items-center">

        <Tag icon_img_url="/icons/icon-triangle_down.png" text="ฟิลเตอร์โชคชะตา" bg_color="bg-purple-350"
          :icon_first="false" @click="goFilterView()" />
      </div>
      <div v-else class="grid grid-rows-2 grid-flow-col-dense gap-1 overflow-x-auto">
        <Tag v-for="tag in filterStore.selectedFilters" :icon_img_url="tag.image_url" :text="tag.name"
          bg_color="bg-purple-350" />
      </div>
    </div>

    <!-- Temple list -->
    <div class="flex flex-col bg-special-white rounded-t-[20px] justify-center p-5 gap-y-6">
      <div>
        <img class="w-full justify-center" src="/images/example_ads.png" />
      </div>
      <div v-if="temples.length > 0" class="flex flex-col gap-y-6">
        <TempleList v-for="temple in temples" :key="temple.id" :temple_id="temple.id" :temple_name="temple.thai_name"
          :temple_image_url="temple.main_image_url" :distance="temple.distance" :tags="temple.tags" />
      </div>
      <div v-else>
        <p class="text-center text-gray-500">No temples found.</p>
      </div>
    </div>

  </div>

  <div
    class="fixed bottom-4 left-1/2 -translate-x-1/2 w-[340px] flex flex-row bg-special-white rounded-[20px] justify-center p-4 shadow-lg">
    <!-- Input Field -->
    <input v-model="location" type="text" placeholder="MRT วัดมังกร"
      class="bg-transparent text-black text-lg focus:outline-none flex-1" />

    <!-- Current Location Button -->
    <button @click="getCurrentLocation"
      class="ml-2 flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full">
      <img src="/icons/icon-current_location.png">
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFilterStore } from '@/stores/filterStore';
import { useRouter } from "vue-router";
import Tag from "@/components/icons/Tag.vue";
import TempleList from "@/components/TempleList.vue";

// Reactive variables
const tagList = ref([]);
const temples = ref([]);
const router = useRouter();
const filterStore = useFilterStore();
const location = ref('MRT วัดมังกร');

const goFilterView = () => {
  router.push({ path: `/filter` });
  // router.push({ path: `/temple_info` });
};

// Fetch temple data on mount
const fetchTemples = async () => {

  const tagIds = filterStore.selectedFilters.map(tag => tag.id).join(",");

  // Construct URL with selected tag IDs
  const apiUrl = `http://127.0.0.1:8000/temples/temple?latitude=13.713727867769885&longitude=100.48010144417799${tagIds ? `&tag_ids=${tagIds}` : ""
    }`;

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
  }
};

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
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
