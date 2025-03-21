<template>
    <div class="flex items-center p-4 rounded-lg">
        <span class="text-xl font-semibold mr-3">{{ text }}</span>
        <div class="flex space-x-1">
            <template v-for="(index) in 5" :key="index">
                <div class="relative w-6 h-6">
                    <!-- Fully filled icon -->
                    <img v-if="index <= Math.floor(score)" :src="iconImgUrl" class="w-full h-full opacity-100"
                        alt="icon" />

                    <!-- Half-filled icon using masking -->
                    <div v-else-if="Math.floor(score) < score && score < index" class="relative w-full h-full">
                        <img :src="iconImgUrl" class="absolute w-full h-full opacity-100 clip-half" alt="icon" />
                        <img :src="iconImgUrl" class="absolute w-full h-full opacity-30" alt="icon" />
                    </div>

                    <!-- Empty icon -->
                    <img v-else :src="iconImgUrl" class="w-full h-full opacity-30" alt="icon" />
                </div>
            </template>
        </div>
        <span class="text-xl font-bold ml-3">{{ score.toFixed(1) }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text: string;
    iconImgUrl: string;
    score: number;
}>();
</script>

<style scoped>
/* Clip the left half of the icon for the half-filled effect */
.clip-half {
    clip-path: inset(0 50% 0 0);
}
</style>