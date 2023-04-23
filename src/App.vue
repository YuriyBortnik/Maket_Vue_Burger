<template>
  <div id="app">
    <header-component/>
    <burger-factory/>
    <carousel/>
    <burger-story/>
    <card-burger/>
    <location-map/>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/HeaderComponent';
import BurgerFactory from "@/components/BurgerFactory/BurgerFactory";
import Carousel from "@/components/Carousel/Carousel";
import BurgerStory from "@/components/BurgerStory/BurgerStory";
import CardBurger from "@/components/CardBurger/CardBurger";
import LocationMap from "@/components/Location/LocationMap";
import FooterComponent from "@/components/Footer/FooterComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BurgerFactory,
    Carousel,
    BurgerStory,
    CardBurger,
    LocationMap,
    FooterComponent
  }
}
</script>