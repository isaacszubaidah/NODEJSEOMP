import { createStore } from "vuex";

const baseUrl = "https://nodejseomp-1.onrender.com";

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    category: null,
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getUsers: (state) => state.users,
    getCategory: (state) => state.category,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    deleteProduct(state, productID) {
      state.products = state.products.filter(
        (product) => product.ID !== productID
      );
      window.location.reload();
    },
    editProduct(state, updatedProduct) {
      state.products = state.products.map((product) => {
        if (product.productID === updatedProduct.productID) {
          return updatedProduct;
        }
        return product;
      });
      window.location.reload();
    },
    addProduct(state, newProduct) {
      state.products = state.products.map((product) => {
        if (product.productID === newProduct.productID) {
          return newProduct;
        }
        return product;
      });
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setCategory(state, category) {
      state.category = category;
    },
  },
  actions: {
    async getProds({ commit }) {
      try {
        const response = await fetch(`${baseUrl}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await response.json();
        commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async getProdById({ commit }, productID) {
      try {
        const response = await fetch(`${baseUrl}/products/${productID}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const product = await response.json();
        commit("setProduct", product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
    async getProdCategory({ commit }, category) {
      console.log("🚀 ~ getProdCategory ~ category:", category);
      try {
        const response = await fetch(`${baseUrl}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch category");
        }
        let products = await response.json();

        products = products.filter((product) => {
          const productCategory = (product.category || "")?.toLowerCase();
          return productCategory === category.toLowerCase();
        });

        console.log("🚀 ~ getProdCategory ~ products:", products);
        commit("setCategory", products);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    },
    async delProduct({ commit }, productID) {
      try {
        const response = await fetch(`${baseUrl}/products/${productID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        commit("deleteProduct", productID);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
    async editProd({ commit }, { productID, updatedProduct }) {
      try {
        const response = await fetch(
          `${baseUrl}/products/${productID}`, // Use productID instead of updatedProduct.productID
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        commit("editProduct", updatedProduct);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
    async addProd({ commit }, { productID, newProduct }) {
      try {
        const response = await fetch(
          `${baseUrl}/products/${newProduct.productID}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        commit("addProduct", newProduct);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
    async getUsers({ commit }) {
      try {
        const response = await fetch(`${baseUrl}/users`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const products = await response.json();
        commit("setUsers", products);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
  modules: {},
});
