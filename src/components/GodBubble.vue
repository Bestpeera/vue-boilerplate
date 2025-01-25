<template>
    <div class="bg-green-200 rounded-[20px] justify-center pt-5 space-y-2">
        <div class="flex flex-row space-x-2 px-5">
            <div class="flex flex-col basis-1/4">
                <img class="rounded-full border-4 border-green-500" src="/images/god.png">
            </div>
            <div class="flex flex-col basis-1/2">
                <p class="text-black">เจ้าแม่กวนอิม</p>
                <p class="text-text-666 text-sm whitespace-nowrap">เทพเจ้าแห่งความเมตตา</p>
            </div>
            <div class="flex flex-col basis-1/4 items-end">
                <img src="/icons/icon-send.png" alt="Send Icon" class="ml-2 h-4 w-4">
            </div>
        </div>
        <div class="flex flex-row flex-wrap -ml-2 px-5">
            <Tag class="ml-2" icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพแห่งความสำเร็จ"
                bg_color="bg-purple-350" />
        </div>
        <!-- Expand button -->
        <div>
            <!-- Render this div when isExpanded is true -->
            <div v-if="isExpanded" class="" @click="toggleContent">
                <div
                    class="flex flex-col bg-special-white rounded-[20px] justify-center py-2 px-5 border-2 border-green-300">
                    <p class="font-bold">แบบสั้น</p>
                    <p>นำมอ ไต่ ซื้อ ไต่ ปุย ฮก หมอ ไต่ ตี่ เต็ก เต็ก เสี่ย จี๋ เสียง โก้ว ฮุก เง็ก อ้วง ไต่
                        เทียน จุน ฯ (สวดถวาย 3 หรือ 9 จบ) แบบยาวเสิน ปิง ฮั่ว จี๋ หยู เสิน ลิ่ง ฝ่า หมึน ตี้ จื่อ จวน
                        ไป้ ฉิ่งกวน เซิ่น ตี้ จวิน ซู่ เจี้ยง หลิน ซาน กั๋ว จือ สือ หลง หู่ เจียงอวี้ ตี้ ชื่อ อู๋ โซ่ว
                        เทียน หมึน อู๋ เฟิ่ง อวี้ ตี้ ชิง ชื่อ จื่ออิ๋ว เต้า เหลิน เจียน จิ้ว ว่าน หมิง เทียน ปิง เม่ง
                        เจียง สุ่ย อู๋ จวนลิ่ว ติง ลิ่ว เจี่ย จีย อู๋ หมิง เซิน ฉี ชื่อ หม่า อิ๋ว วื่อ เจียอิง เซี้ยง
                        เม่ง เจียง เพียน เทียน เซี้ย เซียง ฉิ่ง กวน เซิ่น ต้า ตี้ จวินโซ่ว จื่อ ต้า เตา จัน เยา เสีย เวย
                        หลิน เสี่ยง เฮอ จั่น เสิน ทงโจว ฉัง เล่า แย่ เจิน เสี้ยน เซิ่ง เฮอ เซิ่ง ผี่ หลิง เจิ้น ซัน
                        เหออิง เซี้ยง เสิน เจียง ซื่อ โจว ฉั่ง ชุน ชิว อี้ โหย่ง อู๋ ซวง สือจง ซิน อี้ ฉี่ เจิน เฉียน
                        คุณ ฝู จู้ หลิว เป้ย ต้า เจี๋ย อี้หลิว ฉวน ว่าน ซื่อ ฉวน กู่ จิน ตัน ฉี เหวิน โฉ่ว จั่น เสียง
                        เหลียนซ่าง หม่า ปอ ไค เชียน ว่าน เจียง อิง เซี้ยง อี้ ฉี่ จั่น เสิน ทงโซ่ว เจีย ชิง หลง เอี่ยน
                        แย่ เตา จิ่น ฉิ่ง เปิ่น ถาน กวน เซิ่น ตี้ซื่อ เฟิ่ง อี โหย่ง อู๋ อัน หวัง</p>
                </div>
                <div class="flex flex-row items-center justify-center py-2 space-x-2">
                    <p>ย่อเนื้อหาลง</p>
                    <img src="/icons/icon-up_arrow.png" alt="Icon" class="h-4 w-4">
                </div>
            </div>

            <!-- Render this div when isExpanded is false -->
            <div v-else
                class="flex flex-row bg-special-white rounded-[20px] justify-center py-2 border-2 border-green-300"
                @click="toggleContent">
                <div class="inline-flex items-center space-x-2">
                    <p>อ่านเพิ่มเติม</p>
                    <img src="/icons/icon-down_arrow.png" alt="Icon" class="h-4 w-4">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tag from '../components/icons/Tag.vue'

// State management using `ref` for reactivity
const isExpanded = ref(false);

// Method to toggle the content
const toggleContent = () => {
    isExpanded.value = !isExpanded.value;
};

</script>
