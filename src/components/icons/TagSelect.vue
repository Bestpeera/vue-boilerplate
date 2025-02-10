<template>
    <div class="flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-100"
        @click="toggleSelect">
        <div class="flex items-center">
            <img :src="tag.image_url" :alt="tag.name" class="w-8 h-8 rounded-full mr-3" />
            <span class="text-lg font-medium">{{ tag.name }}</span>
        </div>
        <svg v-if="isSelected" class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useFilterStore } from '@/stores/filterStore';

const props = defineProps<{
    tag: {
        id: number;
        name: string;
        type: string;
        image_url: string;
    };
}>();

const filterStore = useFilterStore();

// Compute `isSelected` dynamically
const isSelected = computed(() =>
    filterStore.selectedFilters.some((t) => t.id === props.tag.id)
);

const toggleSelect = () => {
    if (isSelected.value) {
        filterStore.removeFilter(props.tag.id);
    } else {
        filterStore.addFilter(props.tag);
    }
};
</script>
