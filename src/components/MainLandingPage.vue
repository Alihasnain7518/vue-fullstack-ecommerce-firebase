<template>
    <div>
      <app-header></app-header>
      <app-product-cards></app-product-cards>
      <app-crousal-hero></app-crousal-hero>
    </div>
  </template>
  
  <script>
  import Header from './appHeader.vue'
  import CrousalHero from './LandingPage/ProductCards.vue'
  import ProductCards from './LandingPage/appCrousalHero.vue'
  
  export default {
    components: {
      appHeader: Header,
      appCrousalHero: CrousalHero,
      appProductCards: ProductCards,
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Saira&display=swap');
  *{
    margin: 0px;
    padding: 0px;
  }
  html{
    font-family: 'Saira', sans-serif;
    overflow-x: hidden ;
  }
  body{
    overflow-x: hidden;
  }
  </style>
  