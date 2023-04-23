<template>
  <div id="ingredient" class="wrap ingredient">
    <h1 class="ingredient__header">Ingredients</h1>
    <p class="ingredient__title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel
      maximus.
    </p>
    <VueSlickCarousel v-bind="settings">
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Buns.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">buns</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Salad.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Salad</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Tomato.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Tomato</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Cheese.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Cheese</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Meat.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Meat</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Buns.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">buns</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Salad.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Salad</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Tomato.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Tomato</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Cheese.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Cheese</p>
      </div>
      <div class="slide">
        <div class="test"
             :style="{
         background: 'url(' + require('@/assets/Meat.png') + ')',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top'
       }"/>
        <p class="slide__title">Meat</p>
      </div>
    </VueSlickCarousel>
    <p class="ingredient__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem.
      Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus
      sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur
      lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla
      mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.
    </p>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "speed": 500,
        "swipeToSlide": true,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "responsive": [
          {
            "breakpoint": 1200,
            "settings": {
              "slidesToShow": 4
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 576,
            "settings": {
              "slidesToShow": 2
            }
          },
          {
            "breakpoint": 530,
            "settings": {
              "slidesToShow": 1,
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "Carousel";
</style>