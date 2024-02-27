import { createStore } from 'vuex';

const baseUrl = 'https://nodejseomp-1.onrender.com';

export default createStore({
  state: {
    products: null
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    deleteProduct(state, productID) {
      state.products = state.products.filter(product => product.ID !== productID);
      window.location.reload()
    },
    editProduct(state, updatedProduct) {
      state.products = state.products.map(product => {
        if (product.ID === updatedProduct.ID) {
          return updatedProduct;
        }
        return product;
      });
    }
  },
  actions: {
    async getProds({ commit }) {
      try {
        const response = await fetch(`${baseUrl}/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        commit('setProducts', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async delProduct({ commit }, productID) {
      try {
        const response = await fetch(`${baseUrl}/products/${productID}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        commit('deleteProduct', productID);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async editProd({ commit }, updatedProduct) {
      try {
        const response = await fetch(`${baseUrl}/products/${productID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
        });
        if (!response.ok) {
          throw new Error('Failed to update product');
        }
        commit('editProduct', updatedProduct);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }    
  },
  modules: {}
});

