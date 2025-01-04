<template>
    <div class="bg-green-200 rounded-[20px] justify-center pt-5 space-y-2">
        <div class="flex flex-row space-x-2 px-5">
            <div class="flex flex-col basis-1/4">
                <img class="rounded-full border-4 border-green-500" src="/images/default_image.png">
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
            <Tag class="ml-2" icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพแห่งความสำเร็จ"
                bg_color="bg-purple-350" />
            <Tag class="ml-2" icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ" bg_color="bg-purple-350" />
            <Tag class="ml-2" icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ" bg_color="bg-purple-350" />
            <Tag class="ml-2" icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ" bg_color="bg-purple-350" />
            <Tag class="ml-2" icon_img_url="https://i.imgur.com/3KNZ1yi.png" text="เทพ" bg_color="bg-purple-350" />
        </div>
        <!-- Expand button -->
        <div>
            <!-- Render this div when isExpanded is true -->
            <div v-if="isExpanded" class="" @click="toggleContent">
                <div
                    class="flex flex-row bg-special-white rounded-[20px] justify-center py-2 px-5 border-2 border-green-300">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
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
