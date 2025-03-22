<template>
    <div class="bg-yellow-300 px-3 space-y-5 min-h-screen">
        <div class="flex flex-col px-2.5 pt-5 items-center">
            <p class="basis-1/2 text-lg text-text-1000 font-bold">เขียนแบ่งปันประสบการณ์ของคุณ</p>
        </div>
        <div class="flex flex-col items-center bg-special-white rounded-[20px] justify-center p-5 space-y-5">
            <h1 class="text-md font-bold text-text-1000">เลือกหมวดหมู่พรที่เกี่ยวกับเรื่องราว</h1>
            <div class="flex flex-wrap gap-4 p-4 justify-center">
                <Tag v-for="tag in tags" :key="tag.name" :icon_img_url="tag.image_url" :text="tag.name"
                    bg_color="bg-purple-350" :class="{
                        'opacity-100': selectedTag === tag.name,
                        'opacity-30': selectedTag !== tag.name
                    }" @click="selectTag(tag.name)" />
            </div>
            <RatingBar />
            <div class="relative border border-special-peach rounded-xl w-full">
                <!-- Input Field -->
                <textarea
                    class="w-full h-40 p-2 bg-transparent border-none outline-none text-text-1000 placeholder-gray-400"
                    placeholder="เรื่องราวที่คุณอยากแชร์"></textarea>
            </div>
            <router-link :to="`/temple_info/${templeId}`"
                class="w-[50vw] flex py-4 bg-primary rounded-[22px] justify-center cursor-pointer">
                <p>เสร็จสิ้น</p>
            </router-link>
        </div>
    </div>

    <RouterButton text="Back" :to="`/temple_info/${templeId}`" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Comment from '@/components/Comment.vue';
import Tag from '@/components/icons/Tag.vue';
import ScoreBar from '@/components/icons/ScoreBar.vue';
import RouterButton from '@/components/icons/RouterButton.vue';
import RatingBar from '@/components/icons/RatingBar.vue';
import { BACKEND_URL } from "@/config";
import { useRoute } from 'vue-router';

const templeId = ref(null);
const route = useRoute();
const tags = ref<{ id: number; name: string; type: string; image_url: string }[]>([]);
const fetchTags = async () => {
    const apiUrl = `${BACKEND_URL}/temples/tags?type=wish`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        tags.value = data; // Assuming API returns an array of tags
    } catch (error) {
        console.error("Error fetching tags:", error);
    }
};
const selectedTag = ref(null);

const selectTag = (tagName) => {
    selectedTag.value = tagName; // Set the selected tag
};

onMounted(() => {
    templeId.value = route.params.temple_id;
    fetchTags();
});
</script>