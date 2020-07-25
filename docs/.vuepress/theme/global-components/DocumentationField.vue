<template lang="pug">
  .schema-table--item
    h4.heading(:title="title") {{ label }}
    .content(:class="{attributes: label === 'Attributes'}")
      P
        slot
</template>

<script>
export default {
  name: "DocumentationField",
  props: [ "label", "title" ]
}
</script>

<style lang="scss" scoped>
@import "../styles/documentation";

.content {
  & > * {
    line-height: 1.5rem;
  }
}
</style>
