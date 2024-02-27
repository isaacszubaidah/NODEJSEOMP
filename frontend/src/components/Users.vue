<template>
   <div>
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
            <tr v-for="user in users" :key="user.userID">
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
export default {

}
</script>

<style scoped>

</style>