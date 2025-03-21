<template>
    <div class="bg-yellow-300 px-3 space-y-5 min-h-screen">
        <div class="flex flex-col px-2.5 pt-5 items-center">
            <p class="basis-1/2 text-lg text-text-1000 font-bold">แชร์รีวิวของคุณ</p>
            <p class="basis-1/2 text-lg text-text-1000">{{ reviews[0]?.temple_thai_name || 'No data available' }}</p>
        </div>
        <div class="flex flex-col items-center bg-special-white rounded-[20px] justify-center py-10 px-5 space-y-10">
            <div class="flex relative items-center justify-center w-32 h-32 rounded-full bg-special-sky">
                <div class="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-green-300">
                    <span class="text-sm font-medium text-black">รวมทุกด้าน</span>
                    <span class="text-xl font-bold text-black">{{ averageScore.toFixed(1) }}</span>
                </div>
            </div>
            <ScoreBar v-for="(data, tag) in averageScoresByTag" :key="tag" :text="tag" :iconImgUrl="data.imageUrl"
                :score="data.score" />
        </div>
        <div class="flex flex-col items-center bg-special-white rounded-[20px] justify-center p-5 space-y-5">
            <!-- <h1 class="text-lg font-bold text-text-1000">เลือกรีวิวความศักสิทธิ์ที่คุณอยากอ่าน</h1>
            <div class="flex flex-wrap gap-4 p-4 justify-center">
                <Tag v-for="tag in tags" :key="tag.id" :icon_img_url="tag.image_url" :text="tag.name"
                    bg_color="bg-purple-350" />
            </div> -->
            <h1 class="text-lg font-bold text-text-1000">รีวิวความศักสิทธิ์</h1>
            <div v-if="reviews.length > 0" class="space-y-2">
                <Comment v-for="review in reviews" :key="review.id" :score="review.score" :name="review.name"
                    :comment="review.comment" :tag="review.tag" />
            </div>
            <p v-else class="text-gray-500">ยังไม่มีรีวิว</p>
        </div>
    </div>

    <RouterButton text="Back" :to="`/temple_info/${templeId}`" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Comment from '@/components/Comment.vue';
import Tag from '@/components/icons/Tag.vue';
import ScoreBar from '@/components/icons/ScoreBar.vue';
import RouterButton from '@/components/icons/RouterButton.vue';
import { BACKEND_URL } from "@/config";

const templeId = ref<string | null>(null);
const route = useRoute();
const tags = ref<{ id: number; name: string; type: string; image_url: string }[]>([]);
const reviews = ref<{ id: number; name: string; score: number }[]>([]);

const fetchReviews = async () => {
    if (!templeId.value) return;
    const apiUrl = `${BACKEND_URL}/temples/temple/${templeId.value}/review`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        reviews.value = data.results;
    } catch (error) {
        console.error("Error fetching reviews:", error);
    }
};
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
const averageScore = computed(() => {
    if (reviews.value.length === 0) return 0;
    const totalScore = reviews.value.reduce((sum, review) => sum + review.score, 0);
    return totalScore / reviews.value.length;
});
const averageScoresByTag = computed(() => {
    const scoresByTag: Record<string, { scores: number[], imageUrl: string }> = {};
    reviews.value.forEach(review => {
        if (!scoresByTag[review.tag.name]) {
            scoresByTag[review.tag.name] = { scores: [], imageUrl: review.tag.image_url };
        }
        scoresByTag[review.tag.name].scores.push(review.score);
    });

    const averagedScores: Record<string, { score: number, imageUrl: string }> = {};
    for (const tag in scoresByTag) {
        const avg = scoresByTag[tag].scores.reduce((sum, score) => sum + score, 0) / scoresByTag[tag].scores.length;
        averagedScores[tag] = {
            score: Math.round(avg * 2) / 2, // Round to nearest 0.5
            imageUrl: scoresByTag[tag].imageUrl
        };
    }
    return averagedScores;
});
onMounted(() => {
    templeId.value = route.params.temple_id as string;
    fetchTags();
    fetchReviews();
});
</script>
