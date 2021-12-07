<template>
  <div class="w-full bg-dark text-white flex justify-between items-center">
    <p class="ml-3">Logo</p>
    <div class="hidden md:flex w-2/4 justify-between items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/">Blocks</router-link>
      <router-link to="/">Transactions</router-link>
      <router-link to="/">Wallets</router-link>
    </div>
    <div class="block md:hidden p-3">
      <button>Menu</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
a {
  @apply p-3;
}
</style>
