<script setup lang="ts">
import { ref } from 'vue';

const rating = ref(0);

const setRating = (value: number) => {
    if (rating.value === value) {
        rating.value = 0; // Clicking the same star resets the rating
    } else {
        rating.value = value;
    }
};
</script>

<template>
    <div class="flex space-x-1">
        <template v-for="i in 5" :key="i">
            <img @click="setRating(i)" src="/icons/icon-rating-star.svg"
                :class="i <= rating ? 'opacity-100' : 'opacity-30'"
                class="w-8 h-8 cursor-pointer transition-opacity duration-200" alt="star" />
        </template>
    </div>
</template>