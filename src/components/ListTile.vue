<template>
  <button class="w-full grid grid-cols-1 md:grid-cols-4 md:gap-3 p-2 text-left">
    <div>
      <slot name="prefix"></slot>
    </div>
    <div class="md:col-span-3 h-full">
      <slot name="body"></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "ListTile",
};
</script>
