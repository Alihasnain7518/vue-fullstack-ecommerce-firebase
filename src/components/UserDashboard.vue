<template>
  <div>
  <app-user-auth-header></app-user-auth-header>
    <div id="dashboard">
      <h1>That's the dashboard!</h1>
      <p>You should only get here if you're authenticated!</p>
    </div>
  </div>
  </template>

  <script>
import UserAuthHeader from './UserAuthHeader/UserAuthHeader.vue';
  export default {
    components: {
    appUserAuthHeader: UserAuthHeader
    }
  

  }
  </script>
  <style scoped>
    h1, p {
      text-align: center;
    }
  
    p {
      color: red;
    }
    #dashboard{
      margin: 5rem 0 0 0 ;
    }
  </style>