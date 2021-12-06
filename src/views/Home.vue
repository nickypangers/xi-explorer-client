<template>
  <div>
    <!-- Start Search Row -->
    <div class="pt-5">
      <search />
    </div>
    <!-- End Search Row -->
    <!-- Start Info Box Row -->
    <div class="pt-5">
      <info-box-row />
    </div>
    <!-- End Info Box Row -->
    <!-- Start List Grid -->
    <div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <list-table
          title="Latest Blocks"
          button-text="View All Block"
          @view-all="viewAll"
        >
          <template v-slot:tile>
            <list-tile v-for="i in 10" :key="'list-' + i">
              <template v-slot:prefix>
                <slot name="prefix">
                  <p>Test</p>
                  <p>Test</p>
                </slot>
              </template>
              <template v-slot:body>
                <div class="w-full h-full flex md:justify-between items-center">
                  <p class="truncate w-full mr-3">
                    Miner: xi_6d73A4821C224F34F3243d19404BC3dF8785410a
                  </p>
                  <p>Wow</p>
                </div>
              </template>
            </list-tile>
          </template>
        </list-table>
      </div>
      <div>
        <list-table
          title="Latest Blocks"
          button-text="View All Block"
          @view-all="viewAll"
        >
          <template v-slot:tile>
            <list-tile v-for="i in 10" :key="'list-' + i">
              <template v-slot:prefix>
                <slot name="prefix">
                  <p>Test</p>
                </slot>
              </template>
              <template v-slot:body>
                <div class="w-full flex md:justify-between">
                  <p class="truncate w-full mr-3">
                    Miner: xi_6d73A4821C224F34F3243d19404BC3dF8785410a
                  </p>
                  <p>Wow</p>
                </div>
              </template>
            </list-tile>
          </template>
        </list-table>
      </div>
    </div>

    <!-- End List Grid -->
  </div>
</template>
<script>
import InfoBoxRow from "@/components/InfoBoxRow.vue";
import Search from "@/components/Search.vue";
import ListTable from "@/components/ListTable.vue";
import ListTile from "@/components/ListTile.vue";
export default {
  name: "Home",
  components: {
    InfoBoxRow,
    Search,
    ListTable,
    ListTile,
  },
  setup() {
    const viewAll = () => {
      console.log("View All");
    };
    return {
      viewAll,
    };
  },
};
</script>
