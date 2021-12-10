<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-4
      gap-3
      bg-white
      mb-1
      rounded
      p-3
      text-sm
    "
  >
    <div>
      <p>{{ title }}</p>
    </div>
    <div class="col-span-1 md:col-span-3 truncate overflow-ellipsis">
      <template v-if="hasData">
        <p v-if="!isLink" class="truncate overflow-ellipsis text-gray-500">
          {{ content }}
        </p>
        <a class="link" v-if="isLink" @click="onLinkClick">{{ content }}</a>
      </template>
      <!-- <div v-if="!hasData" class="h-full bg-black w-full">&nbsp;</div> -->
      <text-loading-pulse v-if="!hasData" />
    </div>
  </div>
</template>
<script>
import TextLoadingPulse from "@/components/TextLoadingPulse.vue";
export default {
  name: "OverviewTile",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    hasData: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["linkClick"],
  components: {
    TextLoadingPulse,
  },
  setup(_, { emit }) {
    const onLinkClick = () => {
      emit("linkClick");
    };

    return {
      onLinkClick,
    };
  },
};
</script>
