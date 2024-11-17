<template>
    <div :class="['flex-shrink-0 rounded-[16px] p-2 text-center w-1/3', backgroundColor]">
        <!-- Title -->
        <h2 class="text-white text-base font-bold mb-1">{{ god_name }}</h2>
        <!-- Subtitle -->
        <p class="text-white text-xs mb-1">{{ god_description }}</p>
        <!-- Image -->
        <div class="bg-white rounded-[12px] mx-auto">
            <img class="h-24 w-24 mx-auto" :src="god_image_url" alt="god image" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GodTag',
    props: {
        god_name: {
            type: String as () => string,
            required: true
        },
        god_description: {
            type: String as () => string,
            required: true
        },
        god_image_url: {
            type: String as () => string,
            required: true,
        },
        color: {
            type: String as () => string,
            required: false,
            default: 'bg-secondary-400',
        }
    },
    computed: {
        backgroundColor(): string {
            return this.color;
        }
    }
});
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>