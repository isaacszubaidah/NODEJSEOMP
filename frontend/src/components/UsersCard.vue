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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" @click="editUser(user)">
              Edit
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-dark" @click="delUser(user.userID)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add User Modal -->
    <div
      class="modal fade"
      id="addUsersModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <!-- Modal Content -->
    </div>

    <!-- Edit User Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <!-- Modal Content -->
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
      editedUser: null,
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
    editUser(user) {
      this.editedUser = user;
      // Populate modal with user data
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
        await this.$store.dispatch("editUser", { userID: this.editedUser.userID, updatedUser: this.formData });
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
    }
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
