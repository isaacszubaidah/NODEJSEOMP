<template>
  <div>
    <h2>Users</h2>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addUsersModal"
    >
      Add Product
    </button>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getUsers" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.userGender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userProfile }}</td>
          <td>
            <button
              type="button"
              class="btn btn-dark"
              @click="delUser(user.userID)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="modal fade"
      id="addUsersModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addUser">
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  v-model="firstName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  v-model="lastName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userAge" class="form-label">user Age</label>
                <input
                  type="number"
                  class="form-control"
                  id="userAge"
                  v-model="userAge"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userGender" class="form-label">user Gender</label>
                <input
                  type="text"
                  class="form-control"
                  id="userGender"
                  v-model="userGender"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userRole" class="form-label">user Role</label>
                <input
                  type="text"
                  class="form-control"
                  id="userRole"
                  v-model="userRole"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="emailAdd" class="form-label">email</label>
                <input
                  type="text"
                  class="form-control"
                  id="emailAdd"
                  v-model="emailAdd"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userProfile" class="form-label">userProfile</label>
                <input
                  type="text"
                  class="form-control"
                  id="userProfile"
                  v-model="userProfile"
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      userGender: "",
      userRole: "",
      emailAdd: "",
      userProfile: "",
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  methods: {
    async fetchUsers() {
      await this.$store.dispatch("getUsers");
    },
    async addUser() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        userAge: this.userAge,
        userGender: this.userGender,
        userRole: this.userRole,
        emailAdd: this.emailAdd,
        userProfile: this.userProfile,
      };

      const users = this.getUsers || [];
      const userID = users.length + 1;
      user.userID = userID;

      try {
        await this.$store.dispatch("addUserDB", {
          userID,
          newUser: user,
        });
        console.log("USer added successfully");

        this.firstName = "";
        this.lastName = "";
        this.userAge = "";
        this.userGender = "";
        this.userRole = "";
        this.emailAdd = "";
        this.userProfile = "";
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    async delUser(userID) {
      await this.$store.dispatch("delUser", userID);
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: lightgray;
}
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f2f2f2;
}

img {
  width: 150px;
  height: 150px;
}
</style>
