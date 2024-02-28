import { createStore } from 'vuex'
// import axios from 'axios'
const baseUrl = 'https://nodejseomp-1.onrender.com';

export default createStore({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    setProducts:(state, data) => {
      state.products = data
    },
  },
  actions: {
    async display(context){
      // let data = await axios.get(baseUrl+'/products')
      console.log( `${baseUrl}/products` )
      let data = await fetch( `${baseUrl}/products` );
      let jsonData = await data.json();
      console.log(jsonData);

      // fetch(url, {
      //   method: 'POST',
      //   body: JSON.stringify(body)
      // })

      console.log(data);
      context.commit('setProducts', jsonData)
    },
  },
  modules: {
  }
})
