<template>
  <div class="rounded-lg bg-white shadow-sm text-left">
    <p class="p-2 border-gray-300">{{ title }}</p>
    <div class="divide-y divide-gray-300 px-2 border-t border-b">
      <list-tile
        v-for="i in 10"
        :key="'list-' + i"
        :prefix="i"
        :timestamp="`${i}s ago`"
      >
        <template v-slot:icon>
          <img src="/images/block.png" alt="block" />
        </template>
      </list-tile>
    </div>
    <div class="p-2">
      <button class="w-full bg-blue-100 p-1 text-blue-400 text-sm rounded-lg">
        View all blocks
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
  },
};
</script>
