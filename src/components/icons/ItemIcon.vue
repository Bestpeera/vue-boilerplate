<template>
    <div class="flex-none text-center w-1/5">
        <div class="rounded-full">
            <img :src="imagePath" :alt="altText" class="mx-auto h-1/6" />
        </div>
        <p class="mt-2">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        imagePath: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            default: 'icon'
        }
    }
};
</script>