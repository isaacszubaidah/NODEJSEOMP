<template>
  <div>
    <h2>Users</h2>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addUsersModal"
    >
      Add User
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
          <th>Username</th>
          <th>Edit</th>
          <th>Delete</th>
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
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editMod' + user.userID">
            Edit
            </button>
          </td>
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

    <!-- Edit User Modal -->
    <div class="modal fade" tabindex="-1" role="dialog" v-for="user in getUsers" :key="user.userID" :id="'editMod' + user.userID">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit User</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text" v-model="user.firstName">
            <input type="text" v-model="user.lastName">
            <input type="text" v-model="user.userAge">
            <input type="text" v-model="user.userGender">
            <input type="text" v-model="user.emailAdd">
            <input type="text" v-model="user.userProfile">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="editUser(user.userID)">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
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
                  v-model="formData.firstName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  v-model="formData.lastName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userAge" class="form-label">User Age</label>
                <input
                  type="number"
                  class="form-control"
                  id="userAge"
                  v-model="formData.userAge"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userGender" class="form-label">User Gender</label>
                <input
                  type="text"
                  class="form-control"
                  id="userGender"
                  v-model="formData.userGender"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="emailAdd" class="form-label">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="emailAdd"
                  v-model="formData.emailAdd"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="userProfile" class="form-label">User Profile</label>
                <input
                  type="text"
                  class="form-control"
                  id="userProfile"
                  v-model="formData.userProfile"
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
      formData: {
        firstName: "",
        lastName: "",
        userAge: "",
        userGender: "",
        emailAdd: "",
        userProfile: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  methods: {
    async addUser() {
      const user = {
        ...this.formData,
        userRole: ""
      };
      try {
        await this.$store.dispatch("addUserDB", {
          newUser: user,
        });
        console.log("User added successfully");
        this.clearForm();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
    async delUser(userID) {
      try {
        await this.$store.dispatch("delUser", userID);
        console.log("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async fetchUsers() {
      try {
        await this.$store.dispatch("getUsers");
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async editUser(userID) {
      const user = this.getUsers.find(user => user.userID === userID);
      try {
        await this.$store.dispatch("editUser", { userID, ediedUser: user });
        console.log("User updated successfully");
      } catch (error) {
        console.error("Error updating user:", error);
      }
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
