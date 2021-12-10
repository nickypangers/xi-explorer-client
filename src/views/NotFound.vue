<template>
  <div class="w-full h-96 flex flex-col items-center justify-center">
    <h1 class="font-bold text-xl">Oops! Something's not right.</h1>
    <p class="mt-3">This page is still waiting to be mined.</p>
    <router-link to="/" class="mt-3">
      <button class="bg-action rounded p-3 text-white">Go Home</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
