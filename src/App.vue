<template>
  <header class="flex p-2 text-xl text-center bg-slate-900 text-gray-50 nav">
    <h2 class="mx-2 flex flex-1 items-start font-bold">Ticketster</h2>
    <nav class="desktop_nav">
      <router-link class="mx-4" to="/"
        ><i class="fa-solid fa-house" style="color: #ffffff"></i
        >Home</router-link
      >
      <router-link class="mx-4" to="/admin"
        ><i class="fa-solid fa-screwdriver-wrench" style="color: #ffffff"></i
        >Admin</router-link
      >
      <router-link class="mx-4 position:relative" to="/cart"
        ><i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>Cart
        <span>{{ allCart.length }}</span></router-link
      >
    </nav>
    <div @click="handleShowNav" class="hamburger">
      <i class="fa-solid fa-bars" style="color: #f7f7f8"></i>
    </div>
    <nav v-if="shownav" class="mobile_nav">
      <router-link class="mx-4" to="/"
        ><i class="fa-solid fa-house" style="color: #ffffff"></i
        >Home</router-link
      >
      <router-link class="mx-4" to="/admin"
        ><i class="fa-solid fa-screwdriver-wrench" style="color: #ffffff"></i
        >Admin</router-link
      >
      <router-link class="mx-4 position:relative" to="/cart"
        ><i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>Cart
        <span>{{ allCart.length }}</span></router-link
      >
    </nav>
  </header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  setup(){
    let shownav = ref<boolean>(false)
    const handleShowNav = ()=>{
      shownav.value = !shownav.value
    }
    return{shownav,handleShowNav}
  },
  computed: {
    ...mapGetters(["allCart"]),
  },
});
</script>
<style scoped>
i {
  margin: 0 5px;
  height: 10px;
}
.nav{
  position: relative;
}
.nav a {
  display: flex;
  align-items: baseline;
  gap: 5px;
}
.mobile_nav{
  display: none;
}
.nav a span {
  color: red;
  font-size: 12px;
  align-self: flex-start;
  font-weight: bold;
  height: fit-content;
}
.hamburger {
  display: none;
}
.desktop_nav{
  display: flex;
}
@media screen and (max-width: 400px) {
  .nav .desktop_nav {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .mobile_nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    position: absolute;
    background: #0f172a;
    width: 100%;
    z-index: 3;
    top: 42px;
    left: 0;
  }
}
</style>