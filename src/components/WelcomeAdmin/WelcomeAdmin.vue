<template>
    <div>
        <router-view></router-view>
        <app-user-auth-header></app-user-auth-header>
        <div class="wrapper">
      <!-- <h1>Bubbles Animation</h1> -->
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
    <div id="welcome">
      <h1>Dude You Should Either SignUp Or SingIn For Accessing Admin Panel </h1>
      <p>You found the best  Admin Panel - and now you're just one sign in (or sign up) away from it!</p>
      <div class="cta">
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/signin">Sign In</router-link>
      </div>
    </div>
    </div>
  </template>
    <script>
    import UserAuthHeader from '../UserAuthHeader/UserAuthHeader.vue';
    export default {
        components:{
        appUserAuthHeader: UserAuthHeader
      },
    }
    </script>
  <style scoped>
    #welcome {
      
        width: 100%;
        margin: 5rem 0 0 0 ;
        position: relative;
        z-index: 999;
    }
  
    h1 {
      text-align: center;
    }
  
    p {
      text-align: center;
    }
  
    .cta {
      width: 300px;
      margin: auto;
      text-align: center;
    }
  
    .cta a {
      margin: 10px;
      text-decoration: none;
      display: inline-block;
      border: 1px solid #521751;
      border-radius: 3px;
      width: 100px;
      padding: 10px;
      box-sizing: border-box;
      color: #521751;
    }
  
    .cta a:hover,
    .cta a:active {
      background-color: #521751;
      color: white;
    }
    .wrapper {
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #04fafd, 5%, #119dff, 50%, #030423);
  position: absolute;
  margin: -2rem 0 0 0;
}
.wrapper h1 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-family: sans-serif;
  letter-spacing: 1px;
  word-spacing: 2px;
  color: #fff;
  font-size: 40px;
  font-weight: 888;
  text-transform: uppercase;
}
.wrapper div {
  height: 60px;
  width: 60px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: 4s linear infinite;
}
div .dot {
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 20%;
  right: 20%;
}
.wrapper div:nth-child(1) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(2) {
  top: 60%;
  left: 80%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(3) {
  top: 40%;
  left: 40%;
  animation: animate 3s linear infinite;
}
.wrapper div:nth-child(4) {
  top: 66%;
  left: 30%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(5) {
  top: 90%;
  left: 10%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(6) {
  top: 30%;
  left: 60%;
  animation: animate 5s linear infinite;
}
.wrapper div:nth-child(7) {
  top: 70%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(8) {
  top: 75%;
  left: 60%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(9) {
  top: 50%;
  left: 50%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(10) {
  top: 45%;
  left: 20%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(11) {
  top: 10%;
  left: 90%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(12) {
  top: 20%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(13) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(14) {
  top: 60%;
  left: 5%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(15) {
  top: 90%;
  left: 80%;
  animation: animate 9s linear infinite;
}
@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
}

  </style>