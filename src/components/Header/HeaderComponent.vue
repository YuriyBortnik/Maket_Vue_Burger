<template>
  <header class="header">
    <nav class="navigation wrap">
      <div class="navigation__block">
        <a href="/public" class="navigation__block_logo">
          <img src="@/assets/logoBurger.png" alt="logo">
        </a>
        <ul class="menu">
          <li class="menu__item">
            <a href="#ingredient" class="menu__item_link">
              ingredient
            </a>
          </li>
          <li class="menu__item">
            <a href="#story" class="menu__item_link">
              story
            </a>
          </li>
          <li class="menu__item">
            <a href="#burger" class="menu__item_link">
              burgers
            </a>
          </li>
          <li class="menu__item">
            <a href="#map" class="menu__item_link">
              location
            </a>
          </li>
        </ul>
      </div>
      <button class="navigation__button">Order now</button>
    </nav>
    <div id="side-menu" class="burger-menu">
      <button class="side-menu__btn" @click="navOpen = !navOpen" :class="{active:navOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="navOpen">
          <div class="side-menu__wrapper">
            <ul class="side-menu__list">
              <li class="side-menu__item"><a href="#ingredient">INGREDIENT</a></li>
              <li class="side-menu__item"><a href="#story">STORY</a></li>
              <li class="side-menu__item"><a href="#burger">BURGERS</a></li>
              <li class="side-menu__item"><a href="#map">LOCATION</a></li>
              <li class="side-menu__item"><a href="">ORDER NOW</a></li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    toggleNavOpen() {
      this.navOpen = !this.navOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import "HeaderComponent";
</style>