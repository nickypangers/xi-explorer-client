<template>
  <div class="w-full flex flex-col justify-center items-center">
    <p>Search</p>
    <div class="w-full md:w-3/4 lg:w-2/4 text-left">
      <div class="w-full flex items-center h-12">
        <input
          type="text"
          class="w-full rounded-tl-md rounded-bl-md p-2 h-full"
          placeholder="Search by Address / Txn Hash / Block"
          v-model="query"
        />
        <button
          class="bg-blue-400 h-full w-12 rounded-tr-md rounded-br-md"
          @click="search(query)"
        >
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
      </div>
      <p class="p-1 text-red-600" v-if="isQueryEmpty">Please enter something</p>
    </div>
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
      router.push({
        name: "Address",
        params: {
          address: query,
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
