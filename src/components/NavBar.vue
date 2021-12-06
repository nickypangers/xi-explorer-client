<template>
  <div class="w-full bg-black text-white">
    <div class="container flex justify-between items-center">
      <div class="flex w-full items-center">
        <p class="min-w-min">XI Explorer</p>
        <div class="hidden md:flex flex-grow justify-around items-center">
          <router-link to="/">Home</router-link>
          <router-link to="/blocks">Blocks</router-link>
          <router-link to="/transactions">Transactions</router-link>
          <router-link to="/wallets">Wallets</router-link>
        </div>
      </div>
      <button class="block md:hidden">Menu</button>
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
