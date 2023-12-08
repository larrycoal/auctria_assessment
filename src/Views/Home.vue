<template>
  <div>
    <div class="hero">
      <h2>Welcome To Ticketster</h2>
      <p>Your one stop shop to all your ticket needs</p>
    </div>
    <h2 class="text-center text-4xl">Buy Tickets</h2>
    <ul class="tickets_wrapper" v-if="allTickets.length">
      <li class="card" v-for="(ticket, idx) in allTickets" :key="idx">
       <div v-if="!ticket.isVip">
         <img
          src="https://res.cloudinary.com/dbdrtuscd/image/upload/v1701885193/Screenshot_2023-12-06_at_12.51.35_k2pgtu.png"
          alt="icon for a ticket"
        />
       </div>
       <div v-if="ticket.isVip">
         <img
          src="https://res.cloudinary.com/dbdrtuscd/image/upload/v1701885193/Screenshot_2023-12-06_at_12.51.27_vkvvjv.png"
          alt="icon for a ticket"
        />
       </div>
        <h3>{{ ticket.ticketName }}</h3>
        <p>{{ ticket.description }}</p>
        <p class="sub">
          <span>{{ ticket.price }}cad</span
          ><span>Available:{{ ticket.count }}</span>
        </p>
        <button class="add_to_cart" v-if="ticket.isVip" v-on:click="handleAddToCart(ticket)">
          <span class="triangle"></span>
          Vip Ticket
          <span class="triangle"></span>
        </button>
        <button class="add_to_cart" v-if="!ticket.isVip" v-on:click="handleAddToCart(ticket)">
          <span class="triangle"></span>Regular Ticket<span
            class="triangle"
          ></span>
        </button>
      </li>
    </ul>
    <div class="text-5xl" v-else>
      <p class="text-center my-4">No ticket on sale presently</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
import eventType from "../types/event";

export default defineComponent({
  setup() {
    const store = useStore();
    // handle when user add ticket to cart
    const handleAddToCart = (ticket: eventType) => {
      store.commit("addToCart", ticket);
    };
    return { handleAddToCart };
  },
  computed: { ...mapGetters(["allTickets"]) },
});
</script>
<style scoped>
.hero {
  width: 80%;
  margin: 0 auto;
  background: #f3f4f6;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
  box-shadow: 0px 4px 3px 3px #f7f7f7;
}
.hero::after {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  top: 0;
  background: #0f172a !important;
  z-index: 2;
  clip-path: polygon(100% 100%, 100% 0%, 40% 60%, 0% 100%);
}
h2 {
  font-size: 2.5rem;
  margin-top: 15px;
  font-weight: bold;
}
.hero p {
  margin: 10px 0;
  font-size: 1.5rem;
}
.tickets_wrapper {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.card {
  width: 200px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 5px 2px whitesmoke;
}
.card img {
  object-fit: contain;
}
.card h3 {
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: capitalize;
}
.card p {
  font-size: 1rem;
  margin: 5px 0;
  text-transform: lowercase;
}
.card .sub {
  display: flex;
  justify-content: space-between;
}
.card .sub span {
  font-size: 15px;
}
.card .sub span:nth-child(1) {
  font-weight: bold;
}
.card button {
  background: #0f172a;
  color: white;
  padding: 10px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.card .triangle {
  position: absolute;
  width: 0;
  height: 0;
  border: 24px solid transparent;
  border-top: 0;
  border-bottom: 30px solid rgb(220, 210, 210);
}
.card button span:nth-child(1) {
  left: -10px;
  transform: rotate(91deg);
}
.card button span:nth-child(2) {
  right: -10px;
  transform: rotate(269deg);
}
@media screen and (max-width: 400px) {
  .hero {
    width: 100%;
  }
  .hero h2 {
    font-size: 1.5rem;
  }
  .hero p {
    font-size: .9rem;
    width: 50%;
  }
  .tickets_wrapper{
    justify-content: center;
    width: 90%;
  }
  .card{
    width: 100%;
  }
}
</style>
