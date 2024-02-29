<template>
  <div class="mainUserCard">
    <h2>Users</h2>
    <button
      type="button"
      class="btn btn-primary"
      @click="openAddUserForm"
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
            <button
              type="button"
              class="btn btn-primary"
              @click="editUserForm(user)"
            >
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

    <!-- Add User Form -->
    <form @submit.prevent="addUser">
  <!-- Your form inputs go here -->
  <div>
    <label for="firstName">First Name:</label>
    <input v-model="formData.firstName" type="text" id="firstName" required>
  </div>
  <div>
    <label for="lastName">Last Name:</label>
    <input v-model="formData.lastName" type="text" id="lastName" required>
  </div>
  <div>
    <label for="userAge">Age:</label>
    <input v-model="formData.userAge" type="text" id="userAge" required>
  </div>
  <div>
    <label for="userGender">Gender:</label>
    <input v-model="formData.userGender" type="text" id="userGender" required>
  </div>
  <div>
    <label for="userRole">Role:</label>
    <input v-model="formData.userRole" type="text" id="userRole" required>
  </div>
  <div>
    <label for="emailAdd">Email:</label>
    <input v-model="formData.emailAdd" type="text" id="emailAdd" required>
  </div>
  <div>
    <label for="userProfile">Username:</label>
    <input v-model="formData.userProfile" type="text" id="userProfile" required>
  </div>

  <button type="submit" class="btn btn-primary">Save User</button>
</form>

<!-- Edit User Form -->
<form v-if="editedUser" @submit.prevent="saveEditedUser">
  <!-- Your form inputs go here -->
  <div>
    <label for="editFirstName">First Name:</label>
    <input v-model="formData.firstName" type="text" id="editFirstName" required>
  </div>
  <div>
    <label for="editLastName">Last Name:</label>
    <input v-model="formData.lastName" type="text" id="editLastName" required>
  </div>
  <div>
    <label for="editUserAge">Age:</label>
    <input v-model="formData.userAge" type="text" id="editUserAge" required>
  </div>
  <div>
    <label for="editUserGender">Gender:</label>
    <input v-model="formData.userGender" type="text" id="editUserGender" required>
  </div>
  <div>
    <label for="editUserRole">Role:</label>
    <input v-model="formData.userRole" type="text" id="editUserRole" required>
  </div>
  <div>
    <label for="editEmailAdd">Email:</label>
    <input v-model="formData.emailAdd" type="text" id="editEmailAdd" required>
  </div>
  <div>
    <label for="editUserProfile">Username:</label>
    <input v-model="formData.userProfile" type="text" id="editUserProfile" required>
  </div>

  <button type="submit" class="btn btn-primary">Save Changes</button>
  <button type="button" class="btn btn-secondary" @click="clearEditedUser">Cancel</button>
</form>
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
      editedUser: null,
      
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },

  // computed: {
  //   ...mapGetters(["getUsers"]),
  // },
  methods: {
    openAddUserForm() {
      // Clear previous data
      this.clearForm();
      this.clearEditedUser();
    },
    async addUser() {
      let user = {
        ...this.formData,
        userRole: "",
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
    editUserForm(user) {
      this.editedUser = user;
      // Populate form with user data
      this.formData = {
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        userGender: user.userGender,
        emailAdd: user.emailAdd,
        userProfile: user.userProfile,
      };
    },
    async saveEditedUser() {
      try {
        await this.$store.dispatch("editUser", {
          userID: this.editedUser.userID,
          updatedUser: this.formData,
        });
        console.log("User updated successfully");
        this.clearForm();
        this.editedUser = null;
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
    clearForm() {
      this.formData = {
        firstName: "",
        lastName: "",
        userAge: "",
        userGender: "",
        emailAdd: "",
        userProfile: "",
      };
    },
    clearEditedUser() {
      this.editedUser = null;
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

@media screen and (max-width: 480px) {
  .mainUserCard {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    overflow-x: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
