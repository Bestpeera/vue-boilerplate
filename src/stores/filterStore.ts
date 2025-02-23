import { defineStore } from "pinia";
import { ref } from "vue";

interface Tag {
  id: number;
  name: string;
  type: string;
  image_url: string;
}

export const useFilterStore = defineStore(
  "filterStore",
  () => {
    // Filters
    const selectedFilters = ref<Tag[]>([]);

    function addFilter(tag: Tag) {
      if (!selectedFilters.value.some((t) => t.id === tag.id)) {
        selectedFilters.value.push(tag);
      }
    }

    function removeFilter(tagId: number) {
      selectedFilters.value = selectedFilters.value.filter(
        (t) => t.id !== tagId
      );
    }

    function clearFilters() {
      selectedFilters.value = [];
    }

    // Additional state
    const search_text = ref("");
    const latitude = ref<number | null>(null);
    const longitude = ref<number | null>(null);
    const fetch_type = ref("");

    // Setters for state updates
    function setSearchText(text: string) {
      search_text.value = text;
    }

    function setLocation(lat: number, lon: number) {
      latitude.value = lat;
      longitude.value = lon;
    }

    function setFetchType(type: string) {
      // Updated function name
      fetch_type.value = type;
    }
    return {
      selectedFilters,
      addFilter,
      removeFilter,
      clearFilters,
      search_text,
      setSearchText,
      latitude,
      longitude,
      setLocation,
      fetch_type,
      setFetchType,
    };
  },
  {
    persist: true, // Enables automatic persistence across page reloads
  }
);
