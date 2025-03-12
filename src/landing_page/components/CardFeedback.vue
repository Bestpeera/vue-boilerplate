<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center w-1/3 px-4 py-1 text-left">
      <!-- ส่วนหัวของการ์ด -->
      <div class="p-4 border-b w-full flex items-center">
        <slot name="img">
          <!-- เนื้อหาส่วนหัวเริ่มต้น (ถ้าไม่มีการส่ง slot 'img' มา) -->
          <img src="https://via.placeholder.com/640x360" alt="Placeholder" class="h-16 w-16 rounded-full mr-4" />
          <div>
            <h3 class="text-lg font-semibold">ชื่อผู้ใช้</h3>
            <p class="text-gray-500">ตำแหน่งหรือรายละเอียด</p>
          </div>
        </slot>
      </div>
      <!-- เนื้อหาหลักของการ์ด -->
      <div class="p-4 w-full">
        <slot name="content">
          <!-- เนื้อหาหลักเริ่มต้น (ถ้าไม่มีการส่ง slot 'content' มา) -->
          <p class="text-gray-700">ความคิดเห็นหรือเนื้อหาที่ต้องการแสดง</p>
        </slot>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'CardFeedback',
  };
  </script>
  
  <style scoped>
  /* คุณสามารถเพิ่มสไตล์เพิ่มเติมที่นี่ */
  </style>
  