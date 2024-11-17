<template>
    <div :class="['flex-shrink-0 text-white rounded-full px-4 py-2 flex items-center', backgroundColor]">
        <span class="mr-2">{{ emoji }}</span>
        <span>{{ text }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FamousTag',
    props: {
        emoji: {
            type: String as () => string,
            required: true
        },
        text: {
            type: String as () => string,
            required: true
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