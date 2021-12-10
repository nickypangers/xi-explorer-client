<template>
  <div class="w-full">
    <p class="mb-2">Active Accounts</p>
    <div class="mb-2 flex justify-end">
      <label for="page">Page&nbsp;</label>
      <select name="page" id="page" v-model="selectedPage">
        <option :value="i" v-for="i in totalPages">{{ i }}</option>
      </select>
    </div>
    <wallet-list-table :list="walletList" v-if="hasData" />
    <div v-if="!hasData">
      <p class="text-center">Loading Data</p>
    </div>
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
    const hasData = ref(false);

    const getData = (start) => {
      walletList.value = [];
      hasData.value = false;
      getWalletAtPage(start, 100).then((data) => {
        walletList.value = data.wallets;
        hasData.value = true;
      });
    };

    watch(selectedPage, (newVal, oldVal) => {
      if (newVal === oldVal) {
        return;
      }
      // walletList.value = [];
      // hasData.value = false;
      // getWalletAtPage(newVal, 100).then((data) => {
      //   walletList.value = data.wallets;
      //   hasData.value = true;
      // });
      getData(newVal);
    });

    onMounted(() => {
      // getWalletAtPage(1, 100).then((data) => {
      //   walletList.value = data.wallets;
      //   hasData.value = true;
      // });
      getData(1)
    });

    return {
      walletList,
      totalPages,
      selectedPage,
      hasData
    };
  },
};
</script>
