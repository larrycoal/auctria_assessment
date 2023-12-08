import { mount } from "@vue/test-utils";
import {  expect, test } from "vitest";
import {createStore} from "vuex";
import App from "../App.vue";
import Home from "../Views/Home.vue";
import Cart from "../Views/Cart.vue";
import Admin from "../Views/Admi.vue";
import eventType from "../types/event";
interface stateType {
  tickets: eventType[];
  cart: eventType[];
}
let state: stateType;
  //let getters;
   let tickets: eventType[] = [
     {
       ticketName: "Festival",
       description:
         "Get your ticket for the afro vibes festival happening in summer '24 in kitchener. you dont want to miss out on this festival",
       price: 50,
       isVip: false,
       count: 100,
     },
   ];
   let cart: eventType[] = [];
   state = {
     tickets,
     cart,
   };
  const store = createStore({
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
test("Application wrapper renders correctly", () => {
  const wrapper = mount(App, {
    global: {
      plugins: [store],
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test("Home page renders correctly", () => {
  const wrapper = mount(Home, {
    global: {
      plugins: [store],
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test("Cart page renders correctly", () => {
  const wrapper = mount(Cart, {
    global: {
      plugins: [store],
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test("Admin page renders correctly", () => {
  const wrapper = mount(Admin, {
    global: {
      plugins: [store],
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test("Add to cart works", async() => {
  const wrapper = mount(Home, {
    global: {
      plugins: [store],
    },
  });
  await wrapper.find(".add_to_cart").trigger('click')
  expect(store.state.cart.length).toBeGreaterThan(0);
});
