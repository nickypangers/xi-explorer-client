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
        <list-table title="Latest Blocks" />
      </div>
      <div>Testing</div>
    </div>
    <!-- End List Grid -->
  </div>
</template>
<script>
import InfoBoxRow from "@/components/InfoBoxRow.vue";
import Search from "@/components/Search.vue";
import ListTable from "@/components/ListTable.vue";
export default {
  name: "Home",
  components: {
    InfoBoxRow,
    Search,
    ListTable,
  },
};
</script>
