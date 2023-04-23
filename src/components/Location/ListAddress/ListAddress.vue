<template>
  <ul class="addresses">
    <li
        v-for="(address, i) of list"
        :key="address.id"
        :class="['addresses__item', i === 0 ? 'main' : '']"
    >
      {{ address.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      text: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "ListAddress";
</style>