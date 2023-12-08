<template>
  <div class="w-8/12 mx-auto bg-white my-4 p-4 admin_wrapper">
    <h2 class="text-3xl text-center">Add New Ticket</h2>
    <form class="flex flex-col gap-1 my-4 p-4" v-on:submit="handleSubmit">
      <div>
        <label>Ticket Name</label>
        <input
          type="text"
          placeholder="Enter ticket name"
          v-model="ticketData.ticketName"
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter ticket name"
          v-model="ticketData.description"
          required
        />
      </div>
      <div>
        <label>Count</label>
        <input
          type="number"
          placeholder="Enter number of ticket"
          v-model="ticketData.count"
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          placeholder="Enter ticket price"
          v-model="ticketData.price"
          required
        />
      </div>
      <div class="flex flex-row my-2">
        <input type="checkbox" v-model="ticketData.isVip" />
        <label>Vip Ticket</label>
      </div>
      <button class="bg-slate-900 text-gray-50 p-2 rounded">Add Ticket</button>
    </form>
  </div>
  <table>
    <tr>
      <th>Name</th>
      <th>description</th>
      <th>price</th>
      <th></th>
    </tr>
    <tr v-for="(ticket, idx) in allTickets" :key="idx">
      <td>{{ ticket.ticketName }}</td>
      <td>{{ ticket.description }}</td>
      <td>{{ ticket.price }}cad</td>
      <td>
        <i
          class="fa-solid fa-trash cursor-pointer"
          v-on:click="handleDeleteTicket(idx)"
        ></i>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { useStore, mapGetters } from "vuex";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import eventType from "../types/event";
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const ticketData = ref<eventType>({
      ticketName: "",
      count: 0,
      price: 0,
      isVip: false,
      description: "",
    });

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const temp: eventType = {
        ticketName: ticketData.value.ticketName,
        count: ticketData.value.count,
        description: ticketData.value.description,
        isVip: ticketData.value.isVip,
        price: ticketData.value.price,
      };
      store.commit("addTicket", temp);
      router.push("/");
    };

    const handleDeleteTicket = (idx: number) => {
      store.commit("removeTicket", idx);
    };
    return { handleSubmit, ticketData, handleDeleteTicket };
  },
  computed: {
    ...mapGetters(["allTickets"]),
  },
});
</script>
<style scoped>
form {
  box-shadow: 1px 1px 9px 6px #f0f1f4;
  border-radius: 5px;
}
form div {
  display: flex;
  gap: 5px;
  flex-direction: column;
}
form div:nth-child(5) {
  flex-direction: row;
}
div input {
  border: 1px solid #1e293b;
  border-radius: 5px;
  padding: 10px;
  outline: none;
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
@media screen and (max-width: 400px) {
  .admin_wrapper {
    width: 100%;
  }
}
</style>
