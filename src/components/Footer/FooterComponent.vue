<template>
  <footer class="footer">
    <div class="container wrap">
      <a class="footer-img" href="/public">
        <img class="footer-img__logo" src="@/assets/logoBurger.png" alt="logo">
      </a>
      <list-address :list="addresses" />
    </div>
  </footer>
</template>

<script>
import ListAddress from '@/components/Location/ListAddress/ListAddress';

export default {
  components: {
    ListAddress
  },
  data() {
    return {
      addresses: [
        {
          id: 'address1',
          title: 'Burger Factory'
        },
        {
          id: 'address2',
          title: 'Pl. de la Riponne 10'
        },
        {
          id: 'address3',
          title: '1005 Lausanne'
        },
        {
          id: 'address4',
          title: '021 800 00 00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "FooterComponent";
</style>