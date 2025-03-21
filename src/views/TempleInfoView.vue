<template>
    <div v-if="templeData" class="bg-yellow-300 px-2.5">

        <!-- Header -->
        <div class="flex flex-row px-2.5 py-5 justify-between">
            <p class="basis-1/2 text-lg text-text-1000 font-bold">{{ templeData.thai_name }}</p>
            <p class="basis-1/2 text-lg text-text-666">{{ templeData.english_name }}</p>
        </div>

        <!-- Image list -->
        <div v-for="(imageUrl, index) in templeData.temple_image_urls" :key="index">
            <img class="rounded-[14px]" :src="imageUrl" alt="Temple Image" />
        </div>

        <!-- Review buttons -->
        <div class="flex flex-row space-x-2 justify-evenly pt-5">
            <router-link :to="`/review/temple/${templeId}`"
                class="flex flex-row bg-special-white rounded-[20px] justify-center p-5 grow space-x-1 bg-gradient-to-b from-yellow-100 via-special-sky to-purple-350">
                <img src=" /icons/icon-read.svg">
                <h2 class="font-semibold text-black">อ่านรีวิวสายมู</h2>
            </router-link>
            <div
                class="flex flex-row bg-special-white rounded-[20px] justify-center p-5 grow space-x-1 bg-gradient-to-b from-yellow-100 via-special-sky to-purple-350">
                <img src="/icons/icon-review.svg">
                <h2 class="font-semibold text-black">แชร์รีวิวของคุณ</h2>
            </div>
        </div>

        <!-- Contents -->
        <div class="py-5 space-y-5">

            <!-- Directions -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <div class="flex flex-row justify-between">
                    <p class="font-semibold text-black">วิธีการเดินทาง</p>
                    <a :href="templeData.google_map_url" target="_blank"
                        class="inline-flex items-center bg-special-grape text-white rounded-full px-4 py-2">
                        <span class="text-sm whitespace-nowrap text-special-white">เปิดใน Google Map</span>
                        <img src="/icons/icon-map.png" alt="Send Icon" class="ml-2 h-4 w-4">
                    </a>
                </div>
                <p>{{ templeData.directions }}</p>
            </div>

            <!-- History -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <p class="font-semibold text-black">ประวัติ</p>
                <p>{{ templeData.history }}</p>
            </div>

            <!-- Warnings -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <p class="font-semibold text-black">ข้อควรระวัง</p>
                <ul class="list-inside space-y-2">
                    <li v-for="(warning, index) in templeData.warnings" :key="index"
                        class="inline-flex items-center space-x-2">
                        <StepNumber :text="index + 1" />
                        <div class="basis-11/12 bg-special-papaya rounded-[20px] justify-center px-6 py-3">
                            <p>{{ warning }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Worship Steps -->
            <div class="bg-special-white rounded-[20px] justify-center p-5">
                <p class="font-semibold text-black">ขั้นตอนการไหว้ทั่วไป</p>
                <ol class="list-decimal list-inside divide-y divide-text-333">
                    <li v-for="(step, index) in Object.entries(templeData.worship_steps)" :key="index"
                        class="inline-flex items-center space-x-2 py-2 w-full">
                        <StepNumber :text="step[0]" />
                        <div class="basis-11/12">
                            <p>{{ step[1] }}</p>
                        </div>
                    </li>
                </ol>
            </div>

            <!-- Tips -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <p class="font-semibold text-black">เกร็ดเล็กน้อย</p>
                <p>{{ templeData.tips }}</p>
            </div>

            <!-- Gods -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-7">
                <p class="font-semibold text-black">รายละเอียดของแต่ละเทพเจ้า</p>
                <GodBubble v-for="god in templeData.gods" :key="god.id" :god="god" />
            </div>

        </div>
    </div>

    <div v-else class="text-center py-10">
        <p>Loading temple information...</p>
    </div>

    <RouterButton imgSrc="/icons/icon-home.svg" text="Home Page" to="/" />
</template>

<script setup lang="ts">
import { BACKEND_URL } from "@/config";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute for accessing route parameters
import GodBubble from '../components/GodBubble.vue';
import StepNumber from '../components/icons/StepNumber.vue';
import RouterButton from "@/components/icons/RouterButton.vue";

const route = useRoute(); // Access the route object
const templeData = ref(null);
const templeId = ref(null);

onMounted(async () => {
    templeId.value = route.params.temple_id;
    try {
        const response = await fetch(`${BACKEND_URL}/temples/temple/${templeId.value}`);
        if (!response.ok) {
            throw new Error('Failed to fetch temple data');
        }
        templeData.value = await response.json();
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
});
</script>