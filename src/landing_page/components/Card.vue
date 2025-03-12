<!-- src/components/Card.vue -->
<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center w-1/3 px-4 py-1">
      <!-- ส่วนหัวของการ์ด -->
      <div class="p-4 border-b">
        <slot name="img">
            <!-- เนื้อหาส่วนหัวเริ่มต้น (ถ้าไม่มีการส่ง slot 'img' มา) -->
            <img src="https://via.placeholder.com/640x360" alt="Placeholder" />
        </slot>
      </div>
      <div class="p-4">
        <slot name="header">
            <!-- เนื้อหาส่วนหัวเริ่มต้น (ถ้าไม่มีการส่ง slot 'header' มา) -->
            <h3 class="text-xl font-bold">หัวข้อการ์ด</h3>
        </slot>
      </div>
      <div class="p-2">
        <slot name="footer">
          <!-- เนื้อหาส่วนท้ายเริ่มต้น (ถ้าไม่มีการส่ง slot 'footer' มา) -->
          <p class="text-m text-Secondary p-2">ส่วนท้ายของการ์ด</p>
        </slot>
      </div>
    </div>
</template>
  
<script setup lang="ts">
  // ไม่มีสคริปต์เพิ่มเติมในคอมโพเนนต์นี้
</script>
  
<style scoped>
  /* สไตล์เพิ่มเติมถ้าจำเป็น */
</style>
  