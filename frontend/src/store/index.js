import { createStore } from "vuex";

const baseUrl = "https://nodejseomp-1.onrender.com";

export default createStore({
  state: {
    products: null,
    product: null,
    users: [],
    user: null,
    category: null,
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getUser: (state) => state.user,
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
    deleteUser(state, userID) {
      state.users = state.users.filter(
        (user) => user.ID !== userID
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
    addUser(state, newUser) {
      state.users = state.users.map((user) => {
        console.log("i was here")
        if (user.userID === newUser.userID) {
          return newUser;
        }
        return user;
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
    editUser(state, updatedUser) {
      state.users = state.users.map((user) => {
        if (user.userID === updatedUser.userID) {
          return updatedUser;
        }
        return user;
      });
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
      console.log("sending ~ getProdCategory ~ category:", category);
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

        console.log("sending ~ getProdCategory ~ products:", products);
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
          `${baseUrl}/products/${productID}`,
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

    async addProd({ commit }, { newProduct }) {
      try {
        const response = await fetch(`${baseUrl}/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });

        if (!response.ok) {
          throw new Error("Failed to add product");
        }

        const updatedProducts = await response.json();

        commit("setProducts", updatedProducts);

        console.log("Product added successfully");
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    async addUserDB({ commit }, { newUser }) {
      console.log("sending ~ addUserDB ~ newUser:", newUser);
      try {
        const response = await fetch(`${baseUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (!response.ok) {
          throw new Error("Failed to add user");
        }

        const addedUser = await response.json(); 
        console.log("sending ~ addUserDB ~ addedUser:", addedUser);

        commit("setUsers", addedUser); 

        console.log("User added successfully");
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },

    async getUsers({ commit }) {
      try {
        const response = await fetch(`${baseUrl}/users`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const usersInDB = await response.json();
        console.log("sending ~ getUsers ~ getUsers:", usersInDB)
        commit("setUsers", usersInDB);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    async delUser({ commit }, userID) {
      try {
        const response = await fetch(`${baseUrl}/users/${userID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        commit("deleteUser", userID);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
    async editUser({ commit },{userID, updatedUser}) {
      try {
        const response = await fetch(`${baseUrl}/users/${userID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        commit("editUser", updatedUser);
        console.log("User updated successfully");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
  },
  modules: {},
});
