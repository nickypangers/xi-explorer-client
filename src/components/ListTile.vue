<template>
  <button class="w-full grid grid-cols-1 md:grid-cols-3 md:gap-3 p-2 text-left">
    <div>
      <p>{{ prefix }}</p>
      <p>{{ timestamp }}</p>
    </div>
    <div class="md:col-span-2">boom</div>
  </button>
</template>
<script>
export default {
  name: "ListTile",
  props: {
    prefix: {
      type: String,
      default: "",
    },
    timestamp: {
      type: String,
      default: "",
    },
  },
};
</script>
