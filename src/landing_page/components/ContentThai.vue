<script setup lang="ts">
import content_1 from '@/landing_page/assets/content_1.png';
import content_2 from '@/landing_page/assets/content_2.svg';
import content_31 from '@/landing_page/assets/content_31.svg';
import content_40 from '@/landing_page/assets/content_40.svg';
import content_41 from '@/landing_page/assets/content_41.svg';
import content_42 from '@/landing_page/assets/content_42.svg';
import content_43 from '@/landing_page/assets/content_43.svg';
import content_44 from '@/landing_page/assets/content_44.svg';
import lineOA from '@/landing_page/assets/LINE_OA.svg';
import Card from '@/landing_page/components/Card.vue';
import OrangeCat from '@/landing_page/assets/Orange_cat.png';
import icon1 from '@/landing_page/assets/location.png';
import icon2 from '@/landing_page/assets/bun.png';
import CardFeedback from '@/landing_page/components/CardFeedback.vue';
import p_yong from '@/landing_page/assets/p_yong.svg';
import p_tee from '@/landing_page/assets/tee.png';
import p_aeur from '@/landing_page/assets/aeur.png'; 
</script>

<!-- src/components/Content.vue -->
<template>
  <main class="flex flex-col p-4 items-center margin: 0 auto; text-align: center;">
    <div class="bg-[image:var(--background-hero)] bg-left">
      <h1 class="font-semibold mb-4 p-2 bg-gradient-to-r from-[#8F76E3] to-[#251E3B] text-transparent bg-clip-text">
        Exploring Shrines and temples
      </h1>

      <div class="p-4 max-w-4/5">
        <h2 class="font-semibold text-3xl bg-gradient-to-r from-[#E6B44E] to-[#80642B] text-transparent bg-clip-text">
          หาข้อมูลไหว้เทพเจ้าสำหรับสายมู รวมไว้ที่นี่
        </h2>
        <p class="text-m text-Secondary p-2">
          ค้นหาข้อมูลศาลเจ้าและวัดได้ครบจบในที่เดียว ช่วยประหยัดเวลาในการหาข้อมูลจากหลายแหล่ง
          พร้อมค้นหาตามตำแหน่งที่คุณต้องการ ลดเวลาเดินทางไกลเพื่อไปมูได้ง่ายๆ
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center h-60 w-3/5">
      <div>
        <img :src="content_1" alt="img1" class="h-30 w-auto" />
      </div>
      <div
        class="flex flex-col items-center justify-between h-60 bg-gradient-to-r from-[#E0DAF5] to-[#FFF7E6] rounded-lg p-4 px-20">
        <h2 class="font-semibold text-3xl bg-gradient-to-r from-[#4B3F72] to-[#8E77D8] text-transparent bg-clip-text">
          สแกน เพื่อลองใช้ในมือถือ
        </h2>
        <img :src="lineOA" alt="facebook" class="h-30 w-auto" />
        <p class="text-m text-black p-2">
          (Mapmu QR code ของเว็บ)
        </p>
      </div>
      <div>
        <img :src="content_2" alt="img2" class="h-30 w-auto" />
      </div>
    </div>

    <div class="m-4 p-4">
      <img :src="content_31" alt="img1" class="h-80 w-auto" />
    </div>

    <div>
      <div>
        <h2 class="font-semibold text-3xl bg-gradient-to-r from-[#4B3F72] to-[#119DA4] text-transparent bg-clip-text">
          ทำไม Mapmu ถึงมีประโยชน์สำหรับเพื่อนๆ สายมู
        </h2>
        <p class="text-m text-Secondary p-2">
          How Mapmu can be helpful for you
        </p>
      </div>

      <div class="flex items-center justify-around">
        <Card>
          <template #img>
            <img :src="icon1" alt="img1" class="h-10 w-auto" />
          </template>
          <template #header>
            <h3>หาศาลเจ้าศักดิ์สิทธิ์ใกล้ตัวสุด</h3>
          </template>
          <template #footer>
            <p>ไม่ว่าคุณจะอยู่ที่ไหน Mapmu จะนำคุณไปยังศาลเจ้าดังหรือสถานที่ ศักดิ์สิทธิ์ใกล้ๆ ได้ในพริบตา</p>
          </template>
        </Card>
        <Card>
          <template #img>
            <img :src="icon2" alt="img1" class="h-10 w-auto" />
          </template>
          <template #header>
            <h3>เช็คได้ แต่ละที่ขลังรึเปล่า</h3>
          </template>
          <template #footer>
            <p>สายมูมั่นใจอัปเดตความศักดิ์สิทธิ์ ของสถานที่ได้ทุกเวลาพร้อมแชร์ ประสบการณ์กับเพื่อนร่วมศรัทธา</p>
          </template>
        </Card>
      </div>
    </div>

    <!-- Features -->
    <div class="p-16">

      <div>
        <h2 class="font-semibold text-3xl bg-gradient-to-r from-[#4B3F72] to-[#119DA4] text-transparent bg-clip-text">
          รวบรวมข้อมูลที่จำเป็น สำหรับการไปไหว้พระขอพรที่วัดและศาลเจ้าต่างๆ อย่างครบครัน
        </h2>
        <p class="text-m text-Secondary p-2">
          key Features
        </p>
      </div>
      <div class="flex justify-around items-center">
        <div>
          <img :src="content_41" alt="img1" class="w-auto" />
          <img :src="content_42" alt="img2" class="w-auto" />
        </div>
        <img :src="content_40" alt="img1" class="h-auto w-auto" />
        <div>
          <img :src="content_43" alt="img1" class="w-auto" />
          <img :src="content_44" alt="img2" class="w-auto" />
        </div>
      </div>

    </div>

    <!-- Feedback -->
    <div>
      <div>
        <h2 class="font-semibold text-3xl bg-gradient-to-r from-[#4B3F72] to-[#119DA4] text-transparent bg-clip-text">
          Feedback จากผู้ใช้งาน
        </h2>
        <p class="text-m text-Secondary p-2">
          key Feedback
        </p>
      </div>

      <div class="flex items-center space-x-4">
        <CardFeedback>
          <template v-slot:img>
            <img :src="p_yong" alt="User Image" class="h-16 w-16 rounded-full mr-4" />
            <div>
              <h3 class="text-lg font-semibold">Yong</h3>
              <p class="text-gray-500">Company staff</p>
            </div>
          </template>
          <template v-slot:content>
            <p class="text-gray-700">
              ชอบนะ ใช้ง่าย ข้อมูลครบดี เวลาไปไหว้ จะได้ไม่ต้องเสิร์ชหลายรอบ
            </p>
          </template>
        </CardFeedback>
        <CardFeedback>
          <template v-slot:img>
            <img :src="p_tee" alt="User Image" class="h-16 w-16 rounded-full mr-4" />
            <div>
              <h3 class="text-lg font-semibold">Aeur</h3>
              <p class="text-gray-500">Product designer</p>
            </div>
          </template>
          <template v-slot:content>
            <p class="text-gray-700">
              ชอบอ่านจะได้รู้วิธีเป็นลูกรักพระแม่ 55555
            </p>
          </template>
        </CardFeedback>
        <CardFeedback>
          <template v-slot:img>
            <img :src="p_aeur" alt="User Image" class="h-16 w-16 rounded-full mr-4" />
            <div>
              <h3 class="text-lg font-semibold">Tee</h3>
              <p class="text-gray-500">Broker</p>
            </div>
          </template>
          <template v-slot:content>
            <p class="text-gray-700">
              ฟ้อนดูอ่านง่าย น่ารัก เข้าใจง่าย
            </p>
          </template>
        </CardFeedback>
      </div>

    </div>

    <!-- Footer-img -->
    <div class="flex items-center justify-between">
      <!-- ปุ่มด้านซ้าย -->
      <div class="grid grid-rows-3 gap-3 max-w-[40%]">
        <div class="flex justify-center">
          <button class="btn">พระพิฆเนศ</button>
        </div>
        <div class="flex justify-center gap-3">
          <button class="btn">เจ้าแม่กวนอิม</button>
          <button class="btn">พระพุทธราชโต</button>
        </div>
        <div class="flex justify-center gap-3">
          <button class="btn">ไฉ่ซิงเอี๊ย</button>
          <button class="btn">ศาลเจ้าจีน</button>
          <button class="btn">เจ้าแม่กวนอิม</button>
        </div>
      </div>

      <!-- รูปภาพ -->
      <img :src="OrangeCat" alt="img1" class="w-auto" />

      <!-- ปุ่มด้านขวา -->
      <div class="grid grid-rows-3 gap-3 max-w-[40%]">
        <div class="flex justify-center">
          <button class="btn">วิธีสักการะ</button>
        </div>
        <div class="flex justify-center gap-3">
          <button class="btn">ชื่อควรระวัง</button>
          <button class="btn">การเดินทางไปวัด</button>
        </div>
        <div class="flex justify-center gap-3">
          <button class="btn">พระสงฆ์ที่วัด</button>
          <button class="btn">บทสวดมนต์</button>
          <button class="btn">ขั้นตอนการไหว้</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:root {
  --font-display: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;

  --color-text: rgba(255, 255, 255, 0.87);
  --color-background: #242424;
  --color-background-footer-f: #443967;
  --color-background-footer-s: #3C325B;

  --color-primary: #E6B44E;
  --color-Secondary: #4B3F72;

  --background-hero: url('./src/assets/bg/Ellipse2113.svg');
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

#app {
  margin: 0 auto;
  text-align: center;
}

.btn {
  background-color: #FFEFCE;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: none;
  transition: box-shadow 0.3s;
}

.btn:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  a:hover {
    color: #747bff;
  }

  .btn {
    background-color: #FFEFCE;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: none;
    transition: box-shadow 0.3s;
  }

  .btn:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
