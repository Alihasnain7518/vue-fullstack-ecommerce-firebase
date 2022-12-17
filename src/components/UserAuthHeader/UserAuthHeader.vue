<template>
    <header id="header">
      <div class="logo">
        <router-link to="/"><img src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/logo_color_a259fee4-7513-479c-924e-1b2f9f853322_120x.png?v=1639904938" alt=""></router-link>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/signup">Sign Up</router-link>
          </li>
          <li>
            <router-link to="/signin">Sign In</router-link>
          </li>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
    #header {
      height: 56px;
      display: flex;
      width: 100vw;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      background-color: #000000;
      margin: 0 0 1rem 0;
    }
  
    .logo {
      font-weight: bold;
      color: white;
    }
  
    .logo a {
      text-decoration: none;
      color: white;
    }
  
    nav {
      height: 100%;
    }
  
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
    }
  
    li {
      margin: 0 16px;
    }
  
    li a {
      text-decoration: none;
      color: white;
    }
  
    li a:hover,
    li a:active,
    li a.router-link-active {
      color: #fa923f;
    }
  </style>