<template>
  <div class="bg-yellow-300">
    <!-- Header -->
    <div class="max-h-[25vh] px-4 pt-4 pb-5 space-y-2 justify-center items-center">
      <div class="flex flex-row justify-center">
        <p class="text-lg text-text-1000">ฟิลเตอร์ที่คุณเลือก</p>
      </div>
      <div class="grid grid-rows-2 grid-flow-col-dense gap-1 overflow-x-auto">
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

    <!-- Filter List -->
    <div class="flex flex-col bg-special-white rounded-t-[20px] justify-center p-5 gap-y-6">
      <div>
        <p class="text-lg text-text-1000">ค้นหาจาก</p>
      </div>
      <div class="flex justify-between w-full">
        <!-- Loop through options -->
        <span v-for="(option, index) in options" :key="index" :class="[
          'cursor-pointer px-2',
          selectedOption === option
            ? 'underline decoration-2 ' + underlineColors[option] + ' font-bold'
            : 'decoration-gray-400',
        ]" @click="selectOption(option)">
          {{ option }}
        </span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from '../components/icons/Tag.vue'
import TempleList from '../components/TempleList.vue';
import TempleInfoView from '../views/TempleInfoView.vue'
import { ref, PropType } from "vue";

// Props
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as PropType<{ icon_img_url: string; text: string; bg_color: string }[]>,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
});

// Local reactive list to store tags
const tagList = ref([]);

// Define options and selectedOption as reactive variables
const options = ref<string[]>(["พรที่ขอ", "ศาสนา", "เทพที่ศักการะ", "กิจกรรม"]);
const selectedOption = ref<string | null>(null);

// Define underline colors for each option
const underlineColors: Record<string, string> = {
  "พรที่ขอ": "decoration-tertiary",
  "ศาสนา": "decoration-primary",
  "เทพที่ศักการะ": "decoration-secondary",
  "กิจกรรม": "decoration-special-sky",
};

// Method to handle option selection
const selectOption = (option: string) => {
  selectedOption.value = option; // Highlight the clicked option
  console.log(`Sending request with parameter: ${option}`);

  // Example of sending a request
  fetch(`/your-api-endpoint?name=${encodeURIComponent(option)}`)
    .then(response => response.json())
    .then(data => {
      console.log("Response:", data);
    })
    .catch(error => console.error("Error:", error));
};
</script>
