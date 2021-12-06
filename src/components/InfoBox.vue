<template>
  <div class="rounded shadow w-full flex items-center h-24 border-gray-200 p-3">
    <div class="h-16 w-16 rounded-full filter bg-opacity-50 bg-green-100 p-2">
      <slot name="image"></slot>
    </div>
    <div class="flex ml-3 h-full flex-col justify-center text-left">
      <p class="font-extrabold text-lg">{{ data.toLocaleString() }}</p>
      <p class="text-gray-600 font-medium text-sm">{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    data: {
      type: Number,
      default: 0,
    },
  },
};
</script>
