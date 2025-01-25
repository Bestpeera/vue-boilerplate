<script setup lang="ts">
import GodBubble from '../components/GodBubble.vue'
import StepNumber from '../components/icons/StepNumber.vue';
</script>

<template>
    <div class="bg-yellow-300 px-2.5">

        <!-- Header -->
        <div class="flex flex-row px-2.5 py-5 justify-between">
            <p class="text-lg text-text-1000 font-bold">ศาลเจ้าหลีตี้เมี้ยว</p>
            <p class="text-lg text-text-666">Lee Ti Miew Shrine</p>
        </div>

        <!-- Image list -->
        <div class="flex-row flex overflow-x-auto space-x-4">
            <img class="rounded-[14px]" src="/images/temple.jpg">
            <img class="rounded-[14px]" src="/images/temple_2.jpg">
        </div>

        <!-- Contents -->
        <div class="py-5 space-y-5">
            <!-- Direction -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <div class="flex flex-row justify-between">
                    <p class="font-semibold text-black">วิธีการเดินทาง</p>
                    <div class="inline-flex items-center bg-special-grape text-white rounded-full px-4 py-2">
                        <span class="text-sm whitespace-nowrap">เปิดใน Google Map</span>
                        <img src="/icons/icon-map.png" alt="Send Icon" class="ml-2 h-4 w-4">
                    </div>
                </div>
                <div class="flex flex-row">
                    <p>ขึ้นมาจาก MRT วัดมังกร ออกประตู 2</p>
                </div>
            </div>
            <!-- History -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <div class="flex flex-row justify-between">
                    <p class="font-semibold text-black">ประวัติ</p>
                    <div class="inline-flex items-center bg-special-lime text-black rounded-full px-4 py-2">
                        <span class="text-sm whitespace-nowrap">ศาสนาจากประเทศจีน</span>
                        <img src="/icons/icon-send.png" alt="Send Icon" class="ml-2 h-4 w-4">
                    </div>
                </div>
                <div class="flex flex-row">
                    <p>ศาลหลีตี้เมี้ยวถูกสร้างขึ้นในช่วงที่มีการตั้งถิ่นฐานของชาวจีนในประเทศไทยเพื่อเป็นสถานที่เคารพบูชาเทพเจ้าหลี่ตี้เมี้ยวซึ่งเป็นเทพเจ้าที่เป็นที่รู้จักใน
                        ด้านความโชคดีและความสำเร็จ</p>
                </div>
            </div>
            <!-- Warnings -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <p class="font-semibold text-black">ข้อควรระวัง</p>
                <ul class="list-inside space-y-2">
                    <li class="inline-flex items-center space-x-2">
                        <StepNumber text="1" />
                        <div class="basis-11/12 bg-special-papaya rounded-[20px] justify-center px-6 py-3">
                            <p>ควรแต่งกายสุภาพ ปฏิบัติตามกฎระเบียบของศาลเจ้า และรักษาความสงบระหว่างการสักการะ
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Worship steps -->
            <div class="bg-special-white rounded-[20px] justify-center p-5">
                <p class="font-semibold text-black">ขั้นตอนการไหว้ทั่วไป</p>
                <ol class="list-decimal list-inside divide-y divide-text-333">
                    <li class="inline-flex items-center space-x-2 py-2 w-full">
                        <StepNumber text="1" />
                        <div class="basis-11/12">
                            <p>เตรียมดอกไม้ น้ำชา และพวงมาลัย</p>
                        </div>
                    </li>
                    <li class="inline-flex items-center space-x-2 py-2 w-full">
                        <StepNumber text="2" />
                        <div class="basis-11/12">
                            <p>ไหว้เทพเจ้าที่ทีกงด้วยธูป 5 ดอ</p>
                        </div>
                    </li>
                </ol>
            </div>
            <!-- Tip -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-2">
                <p class="font-semibold text-black">เกร็ดเล็กน้อย</p>
                <p>อย่าลืมเสี่ยงเซียมซียาโดยผู้ที่มีปัญหาสุขภาพจะ มาเสี่ยงทายดูจากนั้นนำเลขไปที่ตึกแผนกยาโดย
                    แบ่งเป็นยาบุรุษยาสตรียากุมารทั้งหมดจะเป็นยาจีนอาแปะจะเป็นผู้อธิบายว่าทานอย่างไร(ไม่มีค่าใช้จ่ายผู้ที่ศรัทธาสามารถบริจาคตามกำลัง)
                </p>
            </div>
            <!-- Gods -->
            <div class="bg-special-white rounded-[20px] justify-center p-5 space-y-7">
                <p class="font-semibold text-black">รายละเอียดของแต่ละเทพเจ้า</p>
                <GodBubble />
            </div>
        </div>
    </div>
</template>
