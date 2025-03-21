<template>
  <div class="bg-yellow-300 min-h-screen">
    <!-- Header -->
    <div class="max-h-[25vh] px-4 pt-4 pb-5 space-y-2 justify-center items-center">
      <div class="flex flex-row justify-center">
        <p class="text-lg text-text-1000">ฟิลเตอร์ที่คุณเลือก</p>
      </div>
      <div class="grid grid-rows-2 grid-flow-col-dense justify-start gap-1 overflow-x-auto ">
        <Tag v-for="tag in filterStore.selectedFilters" :icon_img_url="tag.image_url" :text="tag.name"
          bg_color="bg-purple-350" />
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
      <div class="flex flex-col bg-special-white rounded-t-[20px] justify-center border">
        <ul class="list-inside divide-y divide-text-333">
          <li v-for="tag in tags">
            <TagSelect :key="tag.id" :tag="tag" />
          </li>
        </ul>
      </div>
      <div class="flex flex-row justify-center">
        <img class="h-[7vh]" src="/images/logo.webp">
      </div>
      <router-link to="/" class="flex py-4 bg-primary rounded-[22px] justify-center cursor-pointer">
        <p>ไปกันต่อ</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BACKEND_URL } from "@/config";
import { ref, PropType, onMounted } from "vue";
import { useFilterStore } from '@/stores/filterStore';
import Tag from "@/components/icons/Tag.vue";
import TagSelect from "@/components/icons/TagSelect.vue";

// Props
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
});

const DEFAULT_OPTION = "พรที่ขอ";

// Reactive state
const tags = ref<{ id: number; name: string; type: string; image_url: string }[]>([]);
const selectedOption = ref<string | null>(null);
const isLoading = ref(false);
const filterStore = useFilterStore();
const options = ref<string[]>(["พรที่ขอ", "ศาสนา", "เทพที่ศักการะ", "กิจกรรม"]);
const underlineColors: Record<string, string> = {
  "พรที่ขอ": "decoration-tertiary",
  "ศาสนา": "decoration-primary",
  "เทพที่ศักการะ": "decoration-secondary",
  "กิจกรรม": "decoration-special-sky",
};

// Mapping options to query parameters
const optionQueryParams: Record<string, string> = {
  "พรที่ขอ": "wish",
  "ศาสนา": "religious",
  "เทพที่ศักการะ": "god",
  "กิจกรรม": "activity",
};

// Fetch tags from API when an option is selected
const fetchTags = async (option: string) => {
  const apiUrl = `${BACKEND_URL}/temples/tags?type=`;
  const queryParam = optionQueryParams[option];

  if (!queryParam) {
    console.error("Invalid option selected");
    return;
  }

  const requestUrl = `${apiUrl}${queryParam}`;
  isLoading.value = true;

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    tags.value = data; // Assuming API returns an array of tags
  } catch (error) {
    console.error("Error fetching tags:", error);
  } finally {
    isLoading.value = false;
  }
};

// Method to handle option selection
const selectOption = (option: string) => {
  selectedOption.value = option;
  fetchTags(option); // Fetch tags when an option is selected
};

// Fetch initial tags when the component loads (optional)
onMounted(() => {
  selectedOption.value = DEFAULT_OPTION;
  fetchTags(DEFAULT_OPTION); // Default category
});
</script>