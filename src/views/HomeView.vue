<template>
  <div class="bg-yellow-300">
    <!-- Header -->
    <div class="max-h-[25vh] px-4 pt-4 pb-5 space-y-2 justify-center items-center">
      <div class="flex flex-row justify-center">
        <img class="h-[7vh]" src="/images/logo.png">
      </div>
      <div v-if="tagList.length === 0" class="flex justify-center items-center">
        <Tag icon_img_url="/icons/icon-triangle_down.png" text="ฟิลเตอร์โชคชะตา" bg_color="bg-purple-350"
          :icon_first="false" />
      </div>
      <div v-else class="grid grid-rows-2 grid-flow-col-dense gap-1 overflow-x-auto">
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพแห่งความสำเร็จ1" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพแห่งความสำเร็จ2" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ3" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ4" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ5" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ6" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ7" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ8" bg_color="bg-purple-350" />
        <Tag icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ9" bg_color="bg-purple-350" />
      </div>
    </div>

    <!-- Temple list -->
    <div class="flex flex-col bg-special-white rounded-t-[20px] justify-center p-5 gap-y-6">
      <div>
        <img class="w-full justify-center" src="/images/example_ads.png" />
      </div>
      <div v-if="temples.length > 0" class="flex flex-col gap-y-6">
        <TempleList v-for="temple in temples" :key="temple.id" :temple_name="temple.thai_name"
          :temple_image_url="temple.main_image_url" :distance="temple.distance" :tags="temple.tags" />
      </div>
      <div v-else>
        <p class="text-center text-gray-500">No temples found.</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Tag from "../components/icons/Tag.vue";
import TempleList from "../components/TempleList.vue";

// Reactive variables
const tagList = ref([]);
const temples = ref([]);

// API URL
const apiUrl =
  "http://127.0.0.1:8000/temples/temple?latitude=13.713727867769885&longitude=100.48010144417799";

// Fetch temple data on mount
const fetchTemples = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    temples.value = data;
  } catch (error) {
    console.error("Failed to fetch temples:", error);
  }
};

// Fetch data on component mount
onMounted(() => {
  fetchTemples();
});
</script>
