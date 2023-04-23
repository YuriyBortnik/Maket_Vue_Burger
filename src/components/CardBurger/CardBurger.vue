<template>
  <div id="burger" class="burger">
    <h1 class="burger__title">Burgers</h1>
    <div class="container wrap media">
      <div class="expandable" :class="{ expanded: menuVisible1 }" @click="toggle('menuVisible1')">
        <div class="expandable__content">
          <h2 class="expandable__content_title">1/4 Pound Cheese</h2>
          <img class="expandable__content_img" src="@/assets/Burg.png" alt="picture">
          <button class="expandable__content_btn" v-if="!menuVisible1" @click="toggle('menuVisible1')">Details</button>
        </div>
        <div class="menu__wrapper">
          <ul class="menu" :class="{ visible: menuVisible1 }">
            <li class="menu__item">Ingredient</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button v-if="menuVisible1" class="menu__wrapper_btn">Reduce</button>
        </div>
      </div>
      <div class="expandable" :class="{ expanded: menuVisible2 }" @click="toggle('menuVisible2')">
        <div class="expandable__content">
          <h2 class="expandable__content_title">Big Burger</h2>
          <img class="expandable__content_img" src="@/assets/Burg.png" alt="picture">
          <button class="expandable__content_btn" v-if="!menuVisible2" @click="toggle('menuVisible2')">Details</button>
        </div>
        <div class="menu__wrapper">
          <ul class="menu" :class="{ visible: menuVisible2 }">
            <li class="menu__item">Ingredient</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button v-if="menuVisible2" class="menu__wrapper_btn">Reduce</button>
        </div>
      </div>
      <div class="expandable" :class="{ expanded: menuVisible3 }" @click="toggle('menuVisible3')">
        <div class="expandable__content">
          <h2 class="expandable__content_title">Big Burger</h2>
          <img class="expandable__content_img" src="@/assets/Burg.png" alt="picture">
          <button class="expandable__content_btn" v-if="!menuVisible3" @click="toggle('menuVisible3')">Details</button>
        </div>
        <div class="menu__wrapper">
          <ul :class="[{ visible: menuVisible3 }, 'menu']">
            <li class="menu__item">Ingredient</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button v-if="menuVisible3" class="menu__wrapper_btn">Reduce</button>
        </div>
      </div>
    </div>
    <button class="burger__button">Order now</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuVisible1: false,
      menuVisible2: false,
      menuVisible3: false,
    }
  },
  methods: {
    toggle(property) {
      this[property] = !this[property];
    }
  },
};
</script>

<style>
@import "CardBurger";
</style>