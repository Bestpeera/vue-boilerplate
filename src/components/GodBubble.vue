<template>
    <div class="bg-green-200 rounded-[20px] justify-center pt-5 space-y-2">
        <div class="flex flex-row space-x-2 px-5">
            <div class="flex flex-col w-1/4">
                <img class="w-[17vw] h-[17vw] rounded-full border-4 border-green-500" :src="god.image_url"
                    :alt="god.name" />
            </div>
            <div class="flex flex-col w-1/2">
                <p class="text-black">{{ god.name }}</p>
                <p class="text-text-666 text-sm whitespace-normal break-words">
                    {{ god.alias_name }}
                </p>
            </div>
            <div class="flex flex-col w-1/4 items-end">
                <img src="/icons/icon-send.png" alt="Send Icon" class="ml-2 h-4 w-4" />
            </div>
        </div>

        <div class="flex flex-row flex-wrap -ml-2 px-5">
            <Tag v-for="(tag, index) in god.wish_tags" :key="index" :icon_img_url="tag.image_url" :text="tag.name"
                bg_color="bg-purple-350" />
        </div>

        <!-- Expand button -->
        <div>
            <!-- Render this div when isExpanded is true -->
            <div v-if="isExpanded" @click="toggleContent">
                <div class="flex flex-col bg-special-white rounded-[20px] justify-center py-2 px-5 border-2 border-green-300"
                    v-html="decodedPrayer"></div>
                <div class="flex flex-row items-center justify-center py-2 space-x-2">
                    <p>ย่อเนื้อหาลง</p>
                    <img src="/icons/icon-up_arrow.png" alt="Icon" class="h-4 w-4" />
                </div>
            </div>

            <!-- Render this div when isExpanded is false -->
            <div v-else
                class="flex flex-row bg-special-white rounded-[20px] justify-center py-2 border-2 border-green-300"
                @click="toggleContent">
                <div class="inline-flex items-center space-x-2">
                    <p>อ่านเพิ่มเติม</p>
                    <img src="/icons/icon-down_arrow.png" alt="Icon" class="h-4 w-4" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Tag from "../components/icons/Tag.vue";

// Define proper interface for `god`
interface God {
    name: string;
    alias_name: string;
    image_url: string;
    wish_tags: { name: string; image_url: string }[];
    prayer: string;
}

// Props to receive god data from parent component
const props = defineProps<{ god: God }>();

// State management using `ref` for reactivity
const isExpanded = ref(false);

// Method to toggle the content
const toggleContent = () => {
    isExpanded.value = !isExpanded.value;
};

// Function to decode HTML entities
const decodeHtml = (html: string): string => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

// Computed property to hold the decoded HTML content
const decodedPrayer = computed(() => decodeHtml(props.god.prayer ?? ""));
</script>