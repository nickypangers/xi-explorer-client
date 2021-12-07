<template>
  <div>
    <!-- Start Search Row -->
    <div class="pt-5">
      <search />
    </div>
    <!-- End Search Row -->
    <!-- Start Info Box Row -->
    <div class="pt-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <info-box title="Blocks" :data="latestBlock.height">
          <template v-slot:image>
            <img src="/images/block.png" />
          </template>
        </info-box>
        <info-box title="Blocks / Hour (avg)" :data="60">
          <template v-slot:image>
            <img src="/images/timer.png" />
          </template>
        </info-box>
        <info-box title="Active Wallets" :data="walletCount">
          <template v-slot:image>
            <img src="/images/wallet.png" />
          </template>
        </info-box>
        <info-box
          title="Last Block Transactions"
          :data="latestBlockTransactionCount"
        >
          <template v-slot:image>
            <img src="/images/transaction.png" />
          </template>
        </info-box>
      </div>
    </div>
    <!-- End Info Box Row -->
    <!-- Start List Grid -->
    <div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Start Left List -->
      <div>
        <list-table
          title="Latest Blocks"
          button-text="View All Blocks"
          @view-all="viewAll"
        >
          <template v-slot:tile>
            <list-tile
              v-for="block in blockList"
              :key="'list-' + block.height"
              @click=""
            >
              <template v-slot:prefix>
                <slot name="prefix">
                  <a class="link" href="">Block {{ block.height }} </a>
                  <p class="timestamp">
                    {{ displayBlockTimeSinceNowString(block.timestamp) }} ago
                  </p>
                </slot>
              </template>
              <template v-slot:body>
                <div
                  class="
                    w-full
                    h-full
                    flex
                    justify-between
                    items-end
                    md:items-center
                  "
                >
                  <div>
                    <p>
                      Miner:
                      <span>
                        <a class="link" href="">{{
                          shortenAddress(block.miner)
                        }}</a>
                      </span>
                    </p>
                    <p class="">{{ block.transactions.length }} Transactions</p>
                  </div>
                  <p>{{ totalBlockValue(block).toFixed(2) }} XI</p>
                </div>
              </template>
            </list-tile>
          </template>
        </list-table>
      </div>
      <!-- End Left List -->
      <!-- Start Right List -->
      <div>
        <list-table
          title="Latest Transactions"
          button-text="View All Transactions"
          @view-all="viewAll"
        >
          <template v-slot:tile>
            <list-tile
              v-for="transaction in lastestTransactions"
              :key="'list-' + transaction.hash"
            >
              <template v-slot:prefix>
                <slot name="prefix">
                  <a class="link" href="">
                    {{ shortenHash(transaction.hash) }}
                  </a>
                  <p class="timestamp">
                    {{ displayBlockTimeSinceNowString(transaction.timestamp) }}
                    ago
                  </p>
                </slot>
              </template>
              <template v-slot:body>
                <div
                  class="
                    w-full
                    h-full
                    flex
                    justify-between
                    items-end
                    md:items-center
                  "
                >
                  <div>
                    <p>
                      From:
                      <span>
                        <a class="link" href="">
                          {{ shortenAddress(transaction.from) }}
                        </a>
                      </span>
                    </p>
                    <p>
                      To:
                      <span>
                        <a class="link" href="">{{
                          shortenAddress(transaction.to)
                        }}</a>
                      </span>
                    </p>
                  </div>
                  <p>{{ transaction.amount }} XI</p>
                </div>
              </template>
            </list-tile>
          </template>
        </list-table>
      </div>
    </div>
    <!-- End Right List -->
    <!-- End List Grid -->
  </div>
</template>
<script>
import InfoBox from "@/components/InfoBox.vue";
import Search from "@/components/Search.vue";
import ListTable from "@/components/ListTable.vue";
import ListTile from "@/components/ListTile.vue";
import { shortenAddress, shortenHash } from "@/common/strings";
import { displayBlockTimeSinceNowString } from "@/common/date";
import axios from "axios";
import { ref, onMounted, computed } from "vue";
export default {
  name: "Home",
  components: {
    InfoBox,
    Search,
    ListTable,
    ListTile,
  },
  setup() {
    const latestBlock = ref({});
    const walletCount = ref(0);
    const blockList = ref([]);
    const lastestTransactions = ref([]);

    const latestBlockTransactionCount = computed(() => {
      if (latestBlock.value.transactions === undefined) {
        return 0;
      }
      return latestBlock.value.transactions.length;
    });

    const viewAll = () => {
      console.log("View All");
    };

    const getLatestBlockList = async () => {
      const response = await axios.get("/blocks");
      return response.data;
    };

    const getLatestTransactions = async () => {
      const response = await axios.get("/transactions/limit/10");
      return response.data;
    };

    const getWalletCount = async () => {
      const response = await axios.get("/wallets/count");
      return response.data;
    };

    const totalBlockValue = (block) => {
      return block.transactions
        .map((transaction) => transaction.amount)
        .reduce((a, b) => a + b, 0);
    };

    onMounted(() => {
      getWalletCount().then((data) => {
        walletCount.value = data.count;
      });

      getLatestBlockList().then((data) => {
        blockList.value = data.blocks;
        latestBlock.value = data.blocks[0];
      });

      getLatestTransactions().then((data) => {
        console.log(data);
        lastestTransactions.value = data.transactions;
      });
    });

    return {
      viewAll,
      shortenAddress,
      shortenHash,
      displayBlockTimeSinceNowString,
      latestBlock,
      walletCount,
      blockList,
      lastestTransactions,
      totalBlockValue,
      latestBlockTransactionCount,
    };
  },
};
</script>
<style scoped>
.timestamp {
  @apply text-gray-500 text-sm;
}
</style>
