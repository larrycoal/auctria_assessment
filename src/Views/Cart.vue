<template>
  <h2>Your Cart</h2>
  <table>
    <tr>
      <th>Item</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
    <tr v-for="(ticket, idx) in allCart" :key="idx">
      <td>
        <img
          src="https://res.cloudinary.com/dbdrtuscd/image/upload/v1701885193/Screenshot_2023-12-06_at_12.51.35_k2pgtu.png"
          alt="icon for a ticket"
        />
      </td>
      <td>{{ ticket.ticketName }}</td>
      <td>{{ ticket.description }}</td>
      <td>{{ ticket.price }}cad</td>
    </tr>
  </table>
  <div class="cart_bottom">
    <div class="container">
      <p><span>Amount:</span><span>{{amount}}cad</span></p>
      <p><span>HST:</span><span>10%</span></p>
      <p><span>Total:</span><span>{{total}}cad</span></p>
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
    let amount: number = 0;
    let total:number = 0
    store.state.cart.forEach((i: eventType) => {
      amount += i.price;
    });
    total = (amount * 0.1) + amount
    return { amount, total };
  },
  computed: {
    ...mapGetters(["allCart"]),
  },
});
</script>
<style scoped>
h2 {
  text-align: center;
  font-size: 3rem;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin: 2rem auto;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr img {
  width: 150px;
}
.cart_bottom {
  width: 50%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-end;
}
.cart_bottom .container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: fit-content;
}
.cart_bottom .container p {
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.cart_bottom .container p:nth-child(3) {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.cart_bottom .container p span:nth-child(1) {
  font-weight: bold;
}
@media screen and (max-width: 400px) {
  table {
    width: 90%;
    margin: 10px;
  }
  .cart_bottom{
    width: 90%;
  }
}
</style>

