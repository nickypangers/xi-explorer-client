<template>
  <div
    class="
      w-full
      flex flex-col
      md:flex-row
      justify-start
      md:justify-between
      items-start
      md:items-center
      p-2
      text-left
    "
  >
    <div class="w-2/5 mr-3">
      <slot name="prefix"></slot>
    </div>
    <div class="w-full md:flex-grow">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListTile",
};
</script>
