import { defineStore } from "pinia";
import { ref } from "vue";

interface Tag {
  id: number;
  name: string;
  type: string;
  image_url: string;
}

export const useFilterStore = defineStore("filterStore", () => {
  const selectedFilters = ref<Tag[]>([]);

  function addFilter(tag: Tag) {
    if (!selectedFilters.value.some((t) => t.id === tag.id)) {
      selectedFilters.value.push(tag);
    }
  }

  function removeFilter(tagId: number) {
    selectedFilters.value = selectedFilters.value.filter((t) => t.id !== tagId);
  }

  function clearFilters() {
    selectedFilters.value = [];
  }

  return { selectedFilters, addFilter, removeFilter, clearFilters };
});
