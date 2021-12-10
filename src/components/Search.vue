<template>
  <!-- <div class="w-full flex flex-col justify-center items-center">
    
  </div> -->
  <div class="w-full md:w-3/4 lg:w-2/4 text-left">
    <form class="w-full flex items-center h-12" @submit.prevent="search(query)">
      <input
        type="text"
        class="w-full rounded-tl-md rounded-bl-md p-2 h-full"
        placeholder="Search by Address / Txn Hash / Block"
        v-model="query"
      />
      <button
        type="submit"
        class="bg-action h-full w-12 rounded-tr-md rounded-br-md"
      >
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </form>
    <p class="p-1 text-alert" v-if="hasError">{{ errorMessage }}</p>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Search",
  setup() {
    const router = useRouter();
    const store = useStore();
    const query = computed({
      get: () => {
        return store.state.query;
      },
      set: (val) => {
        store.commit("setQuery", val);
      },
    });
    const hasError = computed(() => store.state.searchHasError);
    const errorMessage = computed(() => store.state.searchErrorMessage);

    const latestBlockHeight = computed(() => store.state.latestBlock.height);

    const setHasError = (msg) => {
      store.dispatch("setSearchErrorMessage", msg);
    };

    const setNoError = () => {
      store.dispatch("clearSearchErrorMessage");
    };

    const search = (query) => {
      setNoError();
      if (!query) {
        console.debug("search", "search is empty");
        setHasError("Please enter something");
        return;
      }
      if (query.includes("xi_")) {
        router.push({
          name: "WalletOverview",
          params: {
            address: query,
          },
        });
        return;
      }
      if (query.length === 64) {
        router.push({
          name: "TransactionOverview",
          params: {
            hash: query,
          },
        });
        return;
      }
      if (query <= latestBlockHeight.value) {
        router.push({
          name: "BlockOverview",
          params: {
            height: query,
          },
        });
      }
      setHasError("Please enter valid address, transaction or Block ID.");
    };

    return {
      search,
      query,
      hasError,
      errorMessage,
    };
  },
};
</script>
<style scoped>
svg {
  @apply text-white fill-current;
}
</style>
