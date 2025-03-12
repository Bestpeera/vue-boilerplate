<!-- src/components/Footer.vue -->
<template>
  <footer class="w-full">
    <div class="bg-background-footer-s flex justify-between px-20 py-5">

      <div class="flex items-center">
        <img :src="logo" alt="Logo" class="h-20 w-auto" />
      </div>

      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61566847167541" target="_blank" aria-label="Facebook">
            <img :src="facebook" alt="facebook" class="h-10 w-auto" />
          </a>
          <img :src="x_twitter" alt="facebook" class="h-10 w-auto" />
          <img :src="instagram" alt="instagram" class="h-10 w-auto" />
        </div>
        <div class="flex flex-row items-center space-x-4">
          <img :src="lineOA" alt="lineOA" class="h-10 w-auto" />
          <p class="text-white">
            Feel free to become friend with us!
          </p>
        </div>

      </div>
    </div>
    <div class="bg-background-footer-f text-white p-4 flex justify-between flex-row px-20">
      <p class="text-center">
        &copy; Copyright 2025
      </p>
      <p>
        นโยบายความเป็นส่วนตัว
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/landing_page/assets/Logo_Mapmu_c.svg';
import facebook from '@/landing_page/assets/Social_Media_facebook.svg';
import x_twitter from '@/landing_page/assets/Social_Media_x2.svg';
import instagram from '@/landing_page/assets/Social_Media_ig.svg';
import lineOA from '@/landing_page/assets/LINE_OA.svg';
</script>

<style scoped>
/* สไตล์เพิ่มเติมถ้าจำเป็น */
</style>