<template>
  <div>

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
                  <a class="link" @click="goToBlock(block.height)"
                    >Block {{ block.height }}
                  </a>
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
              v-for="transaction in latestTransactions"
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
                        <a class="link" @click="log(transaction)">{{
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
import { ref, onMounted, computed } from "vue";
import { goToBlock, goToTransaction, goToAddress } from "@/common/router";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {
    InfoBox,
    Search,
    ListTable,
    ListTile,
  },
  setup() {
    const store = useStore();
    const latestBlock = computed(() => store.state.latestBlock);
    const walletCount = computed(() => store.state.walletCount);
    const blockList = computed(() => store.state.blockList);
    const latestTransactions = computed(() => store.state.latestTransactions);

    const latestBlockTransactionCount = computed(() => {
      if (latestBlock.value.transactions === undefined) {
        return 0;
      }
      return latestBlock.value.transactions.length;
    });

    const viewAll = () => {
      console.log("View All");
    };

    const totalBlockValue = (block) => {
      return block.transactions
        .map((transaction) => transaction.amount)
        .reduce((a, b) => a + b, 0);
    };

    const log = (message) => {
      console.log(message);
    };

    onMounted(() => {
    });

    return {
      viewAll,
      shortenAddress,
      shortenHash,
      displayBlockTimeSinceNowString,
      latestBlock,
      walletCount,
      blockList,
      latestTransactions,
      totalBlockValue,
      latestBlockTransactionCount,
      log,
      goToBlock,
      goToTransaction,
      goToAddress,
    };
  },
};
</script>
<style scoped>
.timestamp {
  @apply text-gray-500 text-sm;
}
</style>
