import { createStore } from "vuex";
import eventType from "../types/event";

// define state type
interface stateType {
  tickets: eventType[];
  cart: eventType[];
}

let tickets: eventType[] = [
  {
    ticketName: "Festival",
    description:
      "Get your ticket for the afro vibes festival happening in summer '24 in kitchener. you dont want to miss out on this festival",
    price: 50,
    isVip: false,
    count: 100,
  },
  {
    ticketName: "Dance Hall",
    description:
      "Get your dancing shoes ready because this promise to be the best, happening in the month of december come out and party!!",
    price: 10,
    isVip: false,
    count: 100,
  },
  {
    ticketName: "Cinema",
    description:
      "Drive through cinema happening in kitchener central park, drinks and food available for all, come and enjoy with your partners",
    price: 50,
    isVip: true,
    count: 100,
  },
];
let cart: eventType[] = [];
let state: stateType = {
  tickets,
  cart,
};
// Create a new store instance.
export const store = createStore({
  state,
  mutations: {
    addTicket(state, newstate) {
      state.tickets.push(newstate);
    },
    removeTicket(state, idx) {
      state.tickets.splice(idx, 1);
    },
    addToCart(state, newCart) {
      state.cart.push(newCart);
    },
  },
  getters: {
    allTickets: (state) => state.tickets,
    allCart: (state) => state.cart,
  },
});
