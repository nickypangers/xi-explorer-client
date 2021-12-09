<template>
  <div class="w-full">
    <p class="mb-2">Active Accounts</p>
    <div class="mb-2 flex justify-end">
      <label for="page">Page&nbsp;</label>
      <select name="page" id="page" v-model="selectedPage">
        <option :value="i" v-for="i in totalPages">
          {{ i }}
        </option>
      </select>
    </div>
    <wallet-list-table :list="walletList" />
  </div>
</template>
<script>
import WalletListTable from "@/components/WalletListTable.vue";
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { getWalletAtPage } from "@/common/api";
export default {
  name: "Wallets",
  components: {
    WalletListTable,
  },
  setup() {
    const walletList = ref([]);
    const store = useStore();
    const totalPages = computed(() => Math.ceil(store.state.walletCount / 100));
    const selectedPage = ref(1);

    watch(selectedPage, (newVal, oldVal) => {
      if (newVal === oldVal) {
        return;
      }
      walletList.value = [];
      getWalletAtPage(newVal, 100).then((data) => {
        walletList.value = data.wallets;
      });
    });

    onMounted(() => {
      getWalletAtPage(1, 100).then((data) => {
        walletList.value = data.wallets;
      });
    });

    return {
      walletList,
      totalPages,
      selectedPage,
    };
  },
};
</script>
