<template>
  <div class="overview">
    <div>
      <p class="mb-2">Wallet Overview</p>
      <overview-tile title="Address" :content="address" />
      <overview-tile
        title="Balance"
        :content="`${balance} XI`"
        :has-data="hasData"
      />
      <overview-tile title="Nonce" :content="`${nonce}`" :has-data="hasData" />
    </div>
    <div></div>
    <div class="md:col-span-2">
      <p class="mb-2">Last 10 Blocks Transactions</p>
      <transactions-table :list="transactionList" v-if="hasData" />
      <div v-if="!hasData" class="h-96 w-full">
        <text-loading-pulse />
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import OverviewTile from "@/components/OverviewTile.vue";
import { ref, onMounted, computed, watch } from "vue";
import { getAddressInfo } from "@/common/api";
import TransactionsTable from "@/components/TransactionsTable.vue";
import TextLoadingPulse from "../components/TextLoadingPulse.vue";
export default {
  name: "WalletOverview",
  components: {
    OverviewTile,
    TransactionsTable,
    TextLoadingPulse,
  },
  setup() {
    const route = useRoute();
    const addressInfo = ref({});
    const hasData = ref(false);

    const address = computed(() => route.params.address);
    const balance = computed(() => addressInfo.value.balance ?? 0);
    const transactionList = computed(
      () => addressInfo.value.transactionList ?? []
    );
    const nonce = computed(() => addressInfo.value.nonce ?? 0);

    const clearAddressData = () => {
      addressInfo.value = {};
    };

    const getAddressInfoData = (address) => {
      hasData.value = false;
      getAddressInfo(address).then((data) => {
        addressInfo.value = data;
        hasData.value = true;
      });
    };

    watch(
      () => route.params,
      async (toParams, prevParams) => {
        if (toParams.address === null || toParams.address === undefined) {
          return;
        }

        if (toParams.address === prevParams.address) {
          return;
        }

        clearAddressData();

        // addressInfo.value = await getAddressInfo(toParams.address);
        getAddressInfoData(toParams.address);
      }
    );

    onMounted(() => {
      // getAddressInfo(route.params.address).then(
      //   (data) => (addressInfo.value = data)
      // );
      getAddressInfoData(route.params.address);
    });

    return {
      route,
      address,
      addressInfo,
      balance,
      nonce,
      transactionList,
      hasData,
    };
  },
};
</script>
