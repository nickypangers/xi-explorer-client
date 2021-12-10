<template>
  <div class="relative text-white">
    <div class="w-full bg-dark flex justify-between items-center">
      <!-- <p class="ml-3">Logo</p> -->
      <router-link to="/">
        <img src="/images/logo.png" class="h-full" alt="Logo" />
      </router-link>
      <div class="hidden md:flex w-2/4 justify-between items-center">
        <router-link to="/">Home</router-link>
        <router-link to="/blocks">Blocks</router-link>
        <router-link to="/transactions">Transactions</router-link>
        <router-link to="/wallets">Wallets</router-link>
      </div>
      <div class="block md:hidden p-3">
        <button @click="isOpen = !isOpen">Menu</button>
      </div>
    </div>
  </div>

  <div
    ref="mobile"
    class="
      fixed
      top-0
      left-0
      w-full
      bg-dark
      overflow-y-hidden
      transition-all
      duration-500
      ease-in-out
      z-10
      text-white
    "
    style="height: 0"
  >
    <div class="flex justify-between items-center">
      <router-link to="/">
        <img src="/images/logo.png" class="h-full" alt="Logo" />
      </router-link>
      <div class="block md:hidden p-3">
        <button @click="isOpen = false">Back</button>
      </div>
    </div>
    <router-link to="/" class="mobile" @click="isOpen = false"
      >Home</router-link
    >
    <router-link to="/blocks" class="mobile" @click="isOpen = false"
      >Blocks</router-link
    >
    <router-link to="/transactions" class="mobile" @click="isOpen = false"
      >Transactions</router-link
    >
    <router-link to="/wallets" class="mobile" @click="isOpen = false"
      >Wallets</router-link
    >
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
export default {
  name: "NavBar",
  setup() {
    const isOpen = ref(false);
    const mobile = ref(null);

    const toggleMobileMenu = () => {
      if (isOpen.value) {
        mobile.value.style.height = "100%";
      } else {
        mobile.value.style.height = "0";
      }
    };

    watch(isOpen, toggleMobileMenu);

    onMounted(() => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          isOpen.value = false;
        }
      });
    });

    return {
      isOpen,
      mobile,
    };
  },
};
</script>
<style scoped>
a {
  @apply p-3;
}

.mobile {
  @apply block py-5;
}
</style>
