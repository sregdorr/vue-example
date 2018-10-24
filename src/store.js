import Vue from 'vue'
import Vuex from 'vuex'
import customers from './assets/customers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: JSON.parse(JSON.stringify(customers))
  },
  getters: {
    customerIds: state => {
      return state.customers.map((item) => {
        return item.CustomerID
      })
    }
  },
  mutations: {
    edit (state, customer) {
      var foundCustomer = state.customers.find((cust) => {
        return cust.CustomerID === customer.CustomerID
      });
      var index = state.customers.indexOf(foundCustomer);
      state.customers[index] = customer
    },
    remove (state, index) {
      state.customers.splice(index, 1)
    },
    add (state, entry) {
      state.customers.unshift(entry)
    }
  },
  actions: {

  }
})
