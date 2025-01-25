<template>
    <div
        :class="['tag inline-flex justify-center items-center text-text-1000 rounded-full px-4 py-2 border-[1px] border-special-white', backgroundColor]">
        <template v-if="icon_first">
            <img :src="icon_img_url" alt="Icon" class="h-4 w-4 pr-1">
            <span class="text-sm whitespace-nowrap">{{ text }}</span>
        </template>
        <template v-else>
            <span class="text-sm whitespace-nowrap">{{ text }}</span>
            <img :src="icon_img_url" alt="Icon" class="h-4 w-4 pl-1">
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PropType } from 'vue';

// Define props
const props = defineProps({
    icon_img_url: {
        type: String as PropType<string>,
        required: true
    },
    text: {
        type: String as PropType<string>,
        required: true
    },
    bg_color: {
        type: String as PropType<string>,
        required: false,
        default: 'bg-purple-350',
    },
    icon_first: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: true
    }
});

// Computed property for the background color
const backgroundColor = computed(() => props.bg_color);
</script>
