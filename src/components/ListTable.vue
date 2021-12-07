<template>
  <div class="rounded-lg bg-white shadow-sm text-left">
    <p class="p-2 border-gray-300 font-semibold text-gray-600">{{ title }}</p>
    <div class="divide-y divide-gray-300 px-2 border-t border-b">
      <slot name="tile"></slot>
    </div>
    <div class="p-2">
      <button
        class="w-full bg-blue-100 p-1 text-action text-sm rounded-lg"
        @click="viewAll"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<script>
import ListTile from "./ListTile.vue";
export default {
  name: "ListTable",
  components: {
    ListTile,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
  emits: ["view-all"],
  setup(_, { emit }) {
    const viewAll = () => {
      emit("view-all");
    };

    return {
      viewAll,
    };
  },
};
</script>
