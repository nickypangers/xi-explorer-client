<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <info-box title="Blocks" :data="1833">
      <template v-slot:image>
        <img src="/images/block.png" />
      </template>
    </info-box>
    <info-box title="Blocks / Hour (avg)" :data="60">
      <template v-slot:image>
        <img src="/images/timer.png" />
      </template>
    </info-box>
    <info-box title="Active Wallets" :data="2000000">
      <template v-slot:image>
        <img src="/images/wallet.png" />
      </template>
    </info-box>
    <info-box title="Last Block Transactions" :data="100.39">
      <template v-slot:image>
        <img src="/images/transaction.png" />
      </template>
    </info-box>
  </div>
</template>
<script>
import InfoBox from "./InfoBox.vue";
export default {
  name: "InfoBoxRow",
  components: {
    InfoBox,
  },
};
</script>
