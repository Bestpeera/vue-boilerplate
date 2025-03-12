<template>
    <div class="flex flex-col min-h-screen">
        <Header @change-language="changeLanguage" />
        <component :is="currentContent" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from '@/landing_page/components/Header.vue';
import Footer from '@/landing_page/components/Footer.vue';
import ContentThai from '@/landing_page/components/ContentThai.vue';
import ContentEng from '@/landing_page/components/ContentEng.vue';

// สร้างตัวแปร ref เพื่อเก็บค่าภาษา
const currentLanguage = ref('th');

// ใช้ computed() เพื่อตัดสินใจว่าจะใช้ ContentThai หรือ ContentEng
const currentContent = computed(() => (currentLanguage.value === 'th' ? ContentThai : ContentEng));

// ฟังก์ชันเปลี่ยนภาษา (รับค่าจาก event ที่ส่งมาจาก Header)
const changeLanguage = (lang: string) => {
    currentLanguage.value = lang;
};
</script>