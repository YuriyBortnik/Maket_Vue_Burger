<template>
  <div id="map">
    <div class="container wrap location">
      <h1 class="location__title">Location</h1>
      <list-address :list="addresses" />
      <iframe class="location__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.1440071989298!2d6.63214117219905!3d46.52390762800613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e31ad9a7581%3A0x6910a4219da53f6!2zUGwuIGRlIGxhIFJpcG9ubmUgMTAsIDEwMDUgTGF1c2FubmUsINCo0LLQtdC50YbQsNGA0ZbRjw!5e1!3m2!1suk!2sua!4v1680879186802!5m2!1suk!2sua"></iframe>
    </div>
  </div>
</template>

<script>
import ListAddress from './ListAddress/ListAddress';

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
@import "LocationMap";
</style>
