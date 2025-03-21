<template>
    <div class="bg-yellow-300 px-3 space-y-5">
        <div class="flex flex-col px-2.5 pt-5 items-center">
            <p class="basis-1/2 text-lg text-text-1000 font-bold">อ่านรีวิวความศักดิ์สิทธิ์</p>
            <p class="basis-1/2 text-lg text-text-666">{{ templeData.thai_name }}</p>
        </div>
        <div class="flex flex-col items-center bg-special-white rounded-[20px] justify-center py-10 px-5 space-y-10">
            <div class="flex relative items-center justify-center w-32 h-32 rounded-full bg-special-sky">
                <div class="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-green-300">
                    <span class="text-sm font-medium text-black">รวมทุกด้าน</span>
                    <span class="text-xl font-bold text-black">4.5</span>
                </div>
            </div>
            <ScoreBar text="การเงิน" iconImgUrl="/icons/icon-home.webp" :score=4.5 />
            <ScoreBar text="การเงิน" iconImgUrl="/icons/icon-home.webp" :score=4 />
            <ScoreBar text="การเงิน" iconImgUrl="/icons/icon-home.webp" :score=4 />
        </div>
        <div class="flex flex-col items-center bg-special-white rounded-[20px] justify-center p-5 space-y-5">
            <h1 class="text-lg font-bold text-text-1000">เลือกรีวิวความศักสิทธิ์ที่คุณอยากอ่าน</h1>
            <div class="flex flex-wrap gap-4 p-4 justify-center">
                <Tag v-for="tag in tags" :icon_img_url="tag.image_url" :text="tag.name" bg_color="bg-purple-350" />
            </div>
            <Comment score=5 name="Piyathida K."
                comment="คนที่แต่งงานแล้วก็จะนิยมมาขอลูกที่นี่ สำหรับเราการขอพรจะเน้นในเรื่องของการขอความสุข หากเรามีความสุข ความสบายใจ มันจะครอบคลุมทุกเรื่อง และเรื่องดี ๆ จะตามมาในภายหลัง" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Comment from '@/components/Comment.vue';
import Tag from '@/components/icons/Tag.vue';
import ScoreBar from '@/components/icons/ScoreBar.vue';
import { BACKEND_URL } from "@/config";
const tags = ref<{ id: number; name: string; type: string; image_url: string }[]>([]);
const templeData = ref({
    english_name: "Wat Phra Kaew", // Mock English name
    thai_name: "วัดพระแก้ว", // Mock Thai name
    location: "Bangkok, Thailand", // Mock location
    description: "One of the most sacred temples in Thailand, known for the Emerald Buddha.", // Mock description
});
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

onMounted(() => {
    fetchTags();
});
</script>