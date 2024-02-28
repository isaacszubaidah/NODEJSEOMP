<template>
   <div>
    <h2>Users</h2>
    <table>
        <thead>
            <tr>
               <th>UserId</th>
               <th>FirstName</th>
               <th>LastName</th>
               <th>UserAge</th>
               <th>UserGender</th>
               <th>UserRole</th>
               <th>Email</th>
               <th>UserProfile</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.userId">
               <td>{{ user.firstName }}</td>
               <td>{{ user.lastName }}</td>
               <td>{{ user.userAge}}</td>
               <td>{{ user.userGender}}</td>
               <td>{{ user.userRole }}</td>
               <td>{{ user.emailAdd}}</td>
               <td>{{ user.userProfile}}</td>

            </tr>
        </tbody>
    </table>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
    ...mapGetters(["getUsers"]),
  },
  async fetchUsers() {
      await this.$store.dispatch("getUsers");
    },
    created() {
    this.fetchUsers();
  },

}
</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: lightgray;
}

th,
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