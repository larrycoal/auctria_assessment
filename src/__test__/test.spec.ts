import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import {createStore} from "vuex";
import App from "../App.vue";
import eventType from "../types/event";
interface stateType {
  tickets: eventType[];
  cart: eventType[];
}

describe("Home", () => {
  let state: stateType;
  //let getters;
   let tickets: eventType[] = [];
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
  // beforeEach(() => {
   

  // });
  it("should render correctly", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store]
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
