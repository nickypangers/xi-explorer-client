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
    <p class="p-1 text-alert" v-if="isQueryEmpty">Please enter something</p>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Search",
  setup() {
    const router = useRouter();
    const query = ref("");
    const isQueryEmpty = ref(false);

    const search = (query) => {
      if (!query) {
        console.debug("search", "search is empty");
        isQueryEmpty.value = true;
        return;
      }
      if (query.includes("xi_")) {
        router.push({
          name: "Address",
          params: {
            address: query,
          },
        });
        return;
      }
      if (query.length === 64) {
        router.push({
          name: "Transaction",
          params: {
            hash: query,
          },
        });
        return;
      }

      router.push({
        name: "Block",
        params: {
          height: query,
        },
      });
    };

    return {
      search,
      query,
      isQueryEmpty,
    };
  },
};
</script>
<style scoped>
svg {
  @apply text-white fill-current;
}
</style>
