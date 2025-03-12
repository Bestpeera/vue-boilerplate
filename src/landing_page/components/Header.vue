<!-- src/components/Header.vue -->
<template>
  <header class="bg-white shadow w-full">
    <div class="mx-auto w-full max-w-[1480px] flex justify-between items-center px-10 py-4">
      <!-- โลโก้ -->
      <div class="flex items-center">
        <img :src="logo" alt="Logo" class="h-10 w-auto" />
      </div>

      <div class="flex items-center space-x-4">
        <!-- ปุ่มเปลี่ยนภาษา -->
        <div>
          <button @click="switchLanguage('th')" :class="{ 'font-bold': currentLanguage === 'th' }">ไทย</button>
          |
          <button @click="switchLanguage('en')" :class="{ 'font-bold': currentLanguage === 'en' }">ENGLISH</button>
        </div>

        <!-- ไอคอนโซเชียลมีเดีย -->
        <div class="flex items-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61566847167541" target="_blank" aria-label="Facebook">
            <img :src="facebook" alt="facebook" class="h-10 w-auto" />
          </a>
          <a href="https://x.com/Mapmuuu" target="_blank" aria-label="X">
            <img :src="x_twitter" alt="facebook" class="h-10 w-auto" />
          </a>
          <a href="https://www.instagram.com/mapmuuu/" target="_blank" aria-label="Instagram">
            <img :src="instagram" alt="instagram" class="h-10 w-auto" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import logo from '@/landing_page/assets/Logo_Mapmu_c.svg';
import facebook from '@/landing_page/assets/Social_Media_facebook.svg';
import x_twitter from '@/landing_page/assets/Social_Media_x2.svg';
import instagram from '@/landing_page/assets/Social_Media_ig.svg';

// สร้าง event emitter เพื่อส่งค่าไปยัง App.vue
const emit = defineEmits(['change-language']);
const currentLanguage = ref('th');

function switchLanguage(lang: string) {
  currentLanguage.value = lang;
  emit('change-language', lang);
}
</script>

<style scoped>
a {
  transition: color 0.3s;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  transition: font-weight 0.3s;
}

button:hover {
  font-weight: bold;
}
</style>