<template>
  <div class="bg-primary h-screen">
    <div class="container h-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <info-box title="Blocks" :data="1833">
          <template v-slot:image>
            <img src="/images/block.png" />
          </template>
        </info-box>
        <info-box title="Transactions" />
        <info-box title="Wallets" />
        <info-box title="Blocks / Hour" :data="60"></info-box>
      </div>
    </div>
  </div>
</template>
<script>
import InfoBox from "@/components/InfoBox.vue";
export default {
  name: "Home",
  components: {
    InfoBox,
  },
};
</script>
