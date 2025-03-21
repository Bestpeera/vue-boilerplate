<template>
    <div class="fixed bottom-4 right-4">
        <router-link :to="to"
            class="w-16 h-16 bg-primary border text-yellow-900 rounded-full flex items-center justify-center shadow-lg">
            <div class="flex flex-col items-center justify-center gap-y-0.5">
                <img v-if="imgSrc" :src="imgSrc" class="w-6 h-6">
                <p class="text-xs font-bold text-center">{{ text }}</p>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    imgSrc?: string | null;
    text: string;
    to: string;
}>();
</script>
