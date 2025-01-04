<template>
    <div :class="['flex rounded-full w-8 h-8 items-center justify-center', backgroundColor]">
        <span class="text-sm whitespace-nowrap text-text-1000">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PropType } from 'vue';

// Define props
const props = defineProps({
    text: {
        type: String as PropType<string>,
        required: true
    },
    bg_color: {
        type: String as PropType<string>,
        required: false,
        default: 'bg-text-333',
    }
});

// Computed property for the background color
const backgroundColor = computed(() => props.bg_color);
</script>
