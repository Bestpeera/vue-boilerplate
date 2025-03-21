<script setup lang="ts">
import Tag from './icons/Tag.vue';
defineProps<{
    name: string;
    score: number;
    comment: string;
    tag: object;
}>();

const stars = (score: number) => {
    return Array(5)
        .fill(0)
        .map((_, i) => (i < score ? '★' : '☆'));
};
</script>

<template>
    <div class="p-4 border rounded-lg shadow-md bg-white max-w-md">
        <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">{{ name }}</h3>
            <div class="text-yellow-500 text-lg">
                <span v-for="(star, index) in stars(score)" :key="index">{{ star }}</span>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <Tag :icon_img_url="tag.image_url" :text="tag.name" bg_color="bg-purple-350" />
        </div>
        <p class="text-gray-700 mt-2">{{ comment }}</p>
        <!-- <div class="flex justify-between mt-4">
            <button class="flex items-center bg-pink-300 text-white px-4 py-2 rounded-lg">
                <span class="mr-2">💡</span> ชอบ
            </button>
        </div> -->
    </div>
</template>

<style scoped>
button {
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}
</style>
