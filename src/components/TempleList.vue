<template>
    <div class="flex flex-row gap-x-4">
        <!-- Image Section -->
        <div class="basis-1/3 flex-shrink-0">
            <img class="rounded-[14px] w-full h-full" :src="temple_image_url" alt="Temple" />
        </div>

        <!-- Tags Section -->
        <div class="basis-2/3 flex flex-col gap-y-1">
            <p class="font-semibold">{{ temple_name }}</p>
            <!-- Scrollable Tags Row -->
            <div ref="tagsContainer" class="flex flex-row gap-x-1">
                <Tag v-for="(tag, index) in tags" :key="index" :icon_img_url="tag.image_url" :text="tag.name"
                    bg_color="bg-purple-350" />
                <button ref="plusButton" class="rounded-[24px] px-3 py-1 bg-special-banana flex-shrink-0">
                    +<span ref="hiddenCount">0</span>
                </button>
            </div>
            <p class="text-gray-600">{{ distance }} km</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tag from '../components/icons/Tag.vue';
import { onMounted, onBeforeUnmount, ref, defineProps } from "vue";

// Define props for dynamic data
defineProps({
    temple_name: {
        type: String,
        required: true
    },
    temple_image_url: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    tags: {
        type: Array,
        required: true,
    },
});

// References to DOM elements
const tagsContainer = ref<HTMLDivElement | null>(null);
const plusButton = ref<HTMLButtonElement | null>(null);
const hiddenCount = ref<HTMLSpanElement | null>(null);

const adjustTags = () => {
    if (!tagsContainer.value || !plusButton.value || !hiddenCount.value) return;

    const container = tagsContainer.value;
    const tags = container.querySelectorAll<HTMLDivElement>('.tag');
    const plusBtn = plusButton.value;

    // Reset all tags to be visible
    tags.forEach((tag) => (tag.style.display = 'inline-flex'));

    const limitWidth = window.screen.width * 0.4;

    let usedWidth = 0;
    let hiddenTags = 0;

    tags.forEach((tag) => {
        const tagWidth = tag.offsetWidth + 4; // Add spacing
        if (usedWidth + tagWidth > limitWidth) {
            tag.style.display = 'none'; // Hide tag
            hiddenTags++;
        } else {
            usedWidth += tagWidth;
        }
    });

    // Show or hide the plus button
    if (hiddenTags > 0) {
        hiddenCount.value!.textContent = hiddenTags.toString();
        plusBtn.classList.remove('hidden');
    } else {
        plusBtn.classList.add('hidden');
    }
};

// Adjust tags on mount and on window resize
onMounted(() => {
    adjustTags();
    window.addEventListener('resize', adjustTags);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', adjustTags);
});
</script>