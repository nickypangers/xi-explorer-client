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
      <p v-if="!isLink" class="truncate overflow-ellipsis text-gray-500">
        {{ content }}
      </p>
      <a class="link" v-if="isLink" @click="onLinkClick">{{ content }}</a>
    </div>
  </div>
</template>
<script>
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
  },
  emits: ["linkClick"],
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
