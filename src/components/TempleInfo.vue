<script setup lang="ts">
import FamousTag from '../components/icons/FamousTag.vue'
import GodTag from '../components/icons/GodTag.vue'
import ItemIcon from '../components/icons/ItemIcon.vue'

</script>

<template>
    <div class="bg-special-banana-1000 md:w-5/12">
        <div class="py-7 pl-7">
            <p class="text-lg text-black">ศาลเจ้าหลีตี้เมี้ยว</p>
            <p class="text-sm text-black">Lee Ti Miew Shrine</p>
        </div>
        <div class="bg-white rounded-[30px] flex flex-col justify-center py-7 px-8">
            <div
                class="bg-neutral-400 rounded-[14px] py-2 px-5 flex flex-row justify-center items-center w-2/3 self-center">
                <div class="basis-1/4">
                    <img src="/images/chinese_group.png" alt="Image description" width="45" height="45">
                </div>
                <div class="basis-3/4">
                    <p class="text-sm text-center text-black">ศาสนาพุทธวัฒนธรรมจีน</p>
                </div>
            </div>
            <div class="flex-row pt-5 pb-3">
                <p class="text-sm font-semibold text-black">มีชื่อเสียงด้าน</p>
            </div>
            <div class="flex-row flex overflow-x-auto space-x-4">
                <FamousTag emoji="💰" text="การเงิน" color="bg-secondary-400" />
                <FamousTag emoji="💻" text="การงาน" color="bg-primary-400" />
                <FamousTag emoji="❤️" text="ความรัก" color="bg-special-peach-1000" />
                <FamousTag emoji="👨‍👩‍👧‍👦" text="ครอบครัว" color="bg-special-leaf-1000" />
            </div>
            <div class="flex-row pt-5 pb-3">
                <p class="text-sm font-semibold text-black">ชื่อเทพเจ้า</p>
                <p class="text-sm text-black">เพื่อนๆ สามารถกดดูประวัติของเทพเจ้า แต่ละองค์ได้</p>
            </div>
            <div class="flex flex-row overflow-x-auto space-x-4">
                <GodTag god_name="เจ้าพ่อกวนอู" god_description="เทพแห่งความสำเร็จ" color="bg-primary-400"
                    god_image_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" />
                <GodTag god_name="เจ้าพ่อกวนอู" god_description="เทพแห่งความสำเร็จ" color="bg-secondary-400"
                    god_image_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" />
                <GodTag god_name="เจ้าพ่อกวนอู" god_description="เทพแห่งความสำเร็จ" color="bg-special-peach-1000"
                    god_image_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" />
                <GodTag god_name="เจ้าพ่อกวนอู" god_description="เทพแห่งความสำเร็จ" color="bg-special-peach-1000"
                    god_image_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" />
            </div>
        </div>
        <!-- <div class="py-2 pl-7">
            <div class="flex-row pt-5 pb-3">
                <p class="text-sm font-semibold text-black">บทสวดมนต์</p>
                <p class="text-sm text-black">บทสวดมนต์หลักประจำศาลเจ้า</p>
            </div>
        </div>
        <div class="py-2 pl-7">
            <div class="flex-row pt-5 pb-3">
                <p class="text-sm font-semibold text-black">อุปกรณ์สักการะ</p>
            </div>
            <div class="flex space-x-6 overflow-x-auto py-4 px-2">
                <ItemIcon imagePath="images/items/item_yellow_flower.png" text="ดอกไม้เหลือง" altText="yellow flower" />
                <ItemIcon imagePath="images/items/item_tea.png" text="น้ำชา" altText="tea" />
                <ItemIcon imagePath="images/items/item_flower_garland.png" text="พวงมาลัย" altText="flower garland" />
                <ItemIcon imagePath="images/items/item_flower_garland.png" text="พวงมาลัย" altText="flower garland" />
            </div>
        </div> -->
        <div class="flex-row space-y-3 py-3 pl-7">
            <p class="text-sm font-semibold text-black">ประวัติ</p>
            <p class="text-sm text-black">ศาลหลีตี้เมี้ยวถูกสร้างขึ้นในช่วงที่มีการตั้งถิ่นฐาน
                ของชาวจีนในประเทศไทยเพื่อเป็นสถานที่เคารพ บูชาเทพเจ้าหลี่ตี้เมี้ยวซึ่งเป็นเทพเจ้าที่เป็นที่รู้จักใน
                ด้านความโชคดีและความสำเร็จ</p>
        </div>
        <div class="flex-row space-y-3 py-3 pl-7">
            <p class="text-sm font-semibold text-black">รูปภาพ</p>
            <div class="flex flex-row overflow-x-auto space-x-4 justify-center">
                <img class="h-24 w-24" src="/images/default_image.png" alt="default image" />
                <img class="h-24 w-24" src="/images/default_image.png" alt="default image" />
                <img class="h-24 w-24" src="/images/default_image.png" alt="default image" />
                <img class="h-24 w-24" src="/images/default_image.png" alt="default image" />
            </div>
        </div>
        <div
            class="bg-gradient-to-b px-8 py-3 space-y-5 from-white to-neutral-300 rounded-t-[30px] flex flex-col justify-center">
            <div class="flex-row space-y-3">
                <p class="text-sm font-semibold text-black">วิธีการสักการะ</p>
                <ul class="list-disc list-inside space-y-2">
                    <li>ไหว้เทพเจ้าที่ทีกงด้วยธูป 5 ดอก</li>
                    <li>ไหว้พระสังกัจจายน์</li>
                    <li>
                        บทสวดเง็กเซียนฮ่องเต้ คำสวดบทที่ 1 (เปล่งวาจา)<br>
                        <span class="block ml-4 italic">
                            “ข้าพเจ้าขอน้อมสวดถวายสักการะบูชา พระผู้ เป็นเจ้าด้วยความตั้งใจ”
                        </span>
                    </li>
                    <li>สวดวันเกิดเทพเจ้าด้วยธูป 3 ดอก ให้น้ำเจ้าแม่กวนอิม</li>
                    <li>บริจาคดอก เทพหลีตีปิง</li>
                </ul>
            </div>
            <div class="flex-row space-y-3">
                <p class="text-sm font-semibold text-black">ข้อควรระวัง</p>
            </div>
            <div class="flex-row space-y-3">
                <p class="text-sm font-semibold text-black">เทคนิคการไหว้</p>
                <div class="p-6 bg-white border rounded-lg shadow-md space-y-4">
                    <div class="border-t border-gray-300 pt-4">
                        <p class="flex items-center text-gray-800">
                            <span class="mr-2">🙏</span>
                            เตรียมดอกไม้ น้ำชา และพวงมาลัย
                        </p>
                    </div>
                    <div class="border-t border-gray-300 pt-4">
                        <p class="flex items-center text-gray-800">
                            <span class="mr-2">🛕</span>
                            จุดธูป 5 ดอก โดยถือธูปไว้ในมือทั้งสองข้างและกล่าวคำสวดขอพรตาม ความเชื่อของตนเอง
                        </p>
                    </div>
                    <div class="border-t border-gray-300 pt-4">
                        <p class="text-gray-800">
                            วางของไหว้ในที่ที่กำหนดไว้
                        </p>
                    </div>
                    <div class="border-t border-gray-300 pt-4">
                        <p class="flex items-center text-gray-800">
                            <span class="mr-2">🙏</span>
                            โดยเฉพาะที่บูชา และต้องให้สวยงามและจัดให้เรียบร้อย
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex-row space-y-3">
                <p class="text-sm font-semibold text-black">กิจกรรมต่างๆ</p>
                <div class="flex space-x-6 overflow-x-auto py-4 px-2">
                    <ItemIcon imagePath="images/items/item_yellow_flower.png" text="ดอกไม้เหลือง"
                        altText="yellow flower" />
                    <ItemIcon imagePath="images/items/item_tea.png" text="น้ำชา" altText="tea" />
                    <ItemIcon imagePath="images/items/item_flower_garland.png" text="พวงมาลัย"
                        altText="flower garland" />
                    <ItemIcon imagePath="images/items/item_flower_garland.png" text="พวงมาลัย"
                        altText="flower garland" />
                </div>
            </div>
            <div class="flex-row space-y-3">
                <p class="text-sm font-semibold text-black">วิธีการเดินทาง</p>
                <div class="bg-secondary-400 flex-shrink-0 text-white rounded-full px-4 py-2 flex items-center">
                    <span>เปิดใน Google map</span>
                </div>
            </div>
        </div>
    </div>
</template>
