<template>
    <div>
      <!-- navbar section -->
     <header class="main-nav">
      <div class="top-search-bar">
                  <ion-icon @click="showUserSearchBar" name="close-outline" ></ion-icon>
                  <input type="text" placeholder="Search">
                  <p><strong>Popular Keywords</strong>: Accessories, Devices, E-juices, E-Liquids</p>
                </div>
      <div class="col-3">
        <div class="left-nav ">
          <div class="logo">
            <ul>
              <li><a href=""><img id="logo_img_desktop" src="../assets/logo.avif" alt=""></a></li>
              <li><a href=""><img id="logo_img" src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/logo_color_a259fee4-7513-479c-924e-1b2f9f853322_120x.png?v=1639904938" alt=""></a></li>
            </ul>
          </div>
          <div class="navbar ">
            <ul>
              <li>
                
                <a href="#">Home<ion-icon class="dropdown-icon" name="chevron-down-outline"></ion-icon></a>
                <ul class="drop-menu">
                  <li><a href="#">Drop Menu 1</a></li>
                  <li><a href="#">Drop Menu 2</a></li>
                  <li><a href="#">Drop Menu 3</a></li>
                  <li><a href="#">Drop Menu 4</a></li>
                  <li><a href="#">Drop Menu 5</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Pages<ion-icon class="dropdown-icon" name="chevron-down-outline"></ion-icon></a>
                <div class="mega-box">
                  <div class="content">
                 
                    <div class="row">
                      <h3>Collections</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      
                      </ul>
                    </div>
                    <div class="row">
                      <h3>Product Single</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                   
                      </ul>
                    </div>
                    <div class="row">
                      <h3>Inner Pages</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <img src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/img-5_382x.png?v=1639412459" alt="">
                    </div>
                  </div>
                </div>
                
                </li>
              <li>
                <a href="#">Shop<ion-icon class="dropdown-icon" name="chevron-down-outline"></ion-icon></a>
                <div class="mega-box">
                  <div class="content">
                 
                    <div class="row">
                      <h3>Collections</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <h3>Product Single</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <h3>Inner Pages</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <img src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/img-5_382x.png?v=1639412459" alt="">
                    </div>
                  </div>
                </div>
                </li>
              <li>
                <a href="#">Catogories<ion-icon class="dropdown-icon" name="chevron-down-outline"></ion-icon></a>
                <div class="mega-box">
                  <div class="content">
                 
                    <div class="row">
                      <h3>Collections</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <h3>Product Single</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <h3>Inner Pages</h3>
                      <ul class="mega-links">
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                        <li><a href="#">Drop Menu 4</a></li>
                        <li><a href="#">Drop Menu 5</a></li>
                        <li><a href="#">Drop Menu 6</a></li>
                        <li><a href="#">Drop Menu 7</a></li>
                      </ul>
                    </div>
                    <div class="row">
                      <img src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/img-5_382x.png?v=1639412459" alt="">
                    </div>
                  </div>
                </div>
                </li>
              <li>
                <a href="#">Blog<ion-icon class="dropdown-icon" name="chevron-down-outline"></ion-icon></a>
                <ul class="drop-menu">
                  <li><a href="#">Drop Menu 1</a></li>
                  <li><a href="#">Drop Menu 2</a></li>
                  <li><a href="#">Drop Menu 3</a></li>
                  <li><a href="#">Drop Menu 4</a></li>
                  <li><a href="#">Drop Menu 5</a></li>
                </ul>
                </li>
            </ul>
          </div>
          <div class="main add-main-class">
            <input type="text" name="input" class="input" placeholder="Search Something.....">
            <div class="icon">
              <i class="fa fa-search" aria-hidden="true"></i>
                </div>
        </div>
        </div>
        <div class="right-nav">
          <div class="account-cart-nav">
            <ul>
              <li>
                <i  @click="showUserSearchBar" class="fa fa-search" id="" style="font-size: 19px;" aria-hidden="true"></i>
              
                </li>
              <li>
                <i @click="showUserCart" class="fa fa-cart-plus" style="font-size: 19px;" aria-hidden="true"></i><span class='badge badge-warning' id='lblCartCount'> 5 </span> <i class="fa-solid fa-badge" id='lblCartCount'></i>
                <div class="account-cart">
                  <div class="cart-close">
                    <ion-icon @click="showUserCart" name="close-outline" ></ion-icon>
                  </div>
                     <h3>Your Cart Is Empty!</h3>
                     <div class="buttons-catogories">
                     <button>Starter Kits</button>
                     <button>Jouice</button>
                     <button>Herion</button>
                     <button>Sugar</button>
                     <button>Orange</button>
                     </div>
                    </div>
                </li>
              <li>
                <i class="fa fa-user" @click="showUserMenu" id="user-account-icon" style="font-size: 19px;" aria-hidden="true"></i>
                <div class="account-menu">
                  <div class="logo-close">
                    <ul>
                    <li><a href=""><img id="logo_img_account" src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/logo_color_a259fee4-7513-479c-924e-1b2f9f853322_120x.png?v=1639904938" alt=""></a></li>
                  </ul>
                    <ion-icon @click="showUserMenu" name="close-outline" ></ion-icon>
                  </div>
                      <ul class="account-links">
                        <li>  <router-link to="/admin"><a>Go To Admin Panel</a> </router-link></li>
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">Register Account</a></li>
                        <li><a href="#">Check Out</a></li>
                        <li><a href="#">My Wishlist</a></li>
                        <div class="currency-main-style">
                           <h3>Langauges</h3>
                          <ul class="currency-style">
                            <li><a href="">English</a></li>
                            <li><a href="">Arabic</a></li>
                            <li><a href="">Punjabi</a></li>
                          </ul>
                        </div>
                        <div class="currency-main-style">
                           <h3>Currency</h3>
                          <ul class="currency-style">
                            <li><a href="">USD</a></li>
                            <li><a href="">EUR</a></li>
                            <li><a href="">GBP</a></li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                </li>

            </ul>
          </div>
        </div>
        <div @click="showMobileMenu" class="mobile-navbar-btn">
          <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
          <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
        </div>

        <div class="mobile-nav">
          <div class="logo">
            <ul>
              <li><a href=""><img id="logo_img" src="https://cdn.shopify.com/s/files/1/0532/5907/5761/files/logo_color_a259fee4-7513-479c-924e-1b2f9f853322_120x.png?v=1639904938" alt=""></a></li>
            </ul>
          </div>
          <div class="main">
            <input type="text" name="input" class="input" placeholder="Search Something.....">
            <div class="icon">
              <i class="fa fa-search" aria-hidden="true"></i>
                </div>
        </div>
          <div @click="showMobileMenu" class="mobile-navbar-btn">
          <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
          <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
        </div>
          </div> 
      </div>

     </header>
      
      <!-- navbar section ends -->

        <!-- <div class="image">
            <h3 class="heading">Specifications & Best Prices</h3>
            <p><button class="btn btn-large">New Arrivals</button></p>
         </div> -->
       
    </div>  
</template>



<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    showMobileMenu(){
      const mobile_nav = document.querySelector(".mobile-navbar-btn")
      const nav_header =  document.querySelector(".col-3");
      nav_header.classList.toggle("active")
      mobile_nav.style.color = "black";  
    },
    showUserMenu(){
      // const userNavMenu = document.querySelector("#user-account-icon");  
        const userMenu = document.querySelector(".account-menu");
        userMenu.classList.toggle("active-user")
      },
      showUserCart(){
        const userCart = document.querySelector(".account-cart");
        userCart.classList.toggle("active-cart")

    },
    showUserSearchBar(){
      const userCart = document.querySelector(".top-search-bar");
        userCart.classList.toggle("active-search")
    }
    ,
    intializeTheComponent() {

      const body = document.body;
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if(currentScroll <= 0){
          body.classList.remove("scroll-up")
        }

        if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
          body.classList.remove('scroll-up')
          body.classList.add('scroll-down')
        }
        if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
          body.classList.remove('scroll-down')
          body.classList.add('scroll-up')
        }

        lastScroll = currentScroll
      })


    }
  },
  mounted(){
    this.intializeTheComponent()
  }
 }

</script>
<style   lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Saira&display=swap');

// ***************************** navbar starts******************
.currency-main-style{
  display: flex;
  flex-direction: column;


}
.top-search-bar{
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  width: 100vw;
  align-items: center;
  padding: 1rem;
  // display: none;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 1s ease;
}
.active-search{
  // display: block;
  position: absolute;
  z-index: 999;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: all 1s ease;
}
.top-search-bar input{
  width: 80vw;
  padding: 1rem;
  border: none;
  margin: 0 0 0.5rem 0;
  border-radius: 1rem;
}

.top-search-bar input::placeholder{
	color: #524d4d;
}
.currency-main-style h3{
  padding: 0 0 0 1rem;
}
.buttons-catogories{
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.buttons-catogories button {
  padding: 1rem 3rem;
  color: white;
  background: #c29168;
  margin: 5px;
  font-size: 1rem;
  border: none;
}
.currency-main-style ul{
  border: 1px solid black;
  margin: 0 1rem 0 1rem;
  // height: 2rem;
}
.currency-main-style ul li:nth-child(1){
  background: black;
  // margin: 5px;
  padding: 0 ;

}
.currency-main-style ul li a {
  font-size: 10px;
  padding: 0 ;
}
.account-menu , .account-cart {
    width: 30%;
    height: 100vh;
    background: white;
    color: black;
    position: absolute;
    margin:  37rem 5rem 5rem -28rem;
    padding: 1rem;
    line-height: 3rem;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
    transition: all 1s ease;
}
.account-cart{
  margin: 36rem 5rem 5rem -21rem;
}
.active-user, .active-cart {
  transform: translateX(10%);
    opacity: 1;
    visibility: visible;
}
.account-menu .account-links{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start ;
}
.account-menu .account-links  li a {
  text-decoration: none;
  color: #665c5c;

}
.logo-close{
  display: flex;
  justify-content: space-between;

}
#lblCartCount {
    // position: relative;
    font-size: 11px;
    font-weight: 700;
    background: #c29168;
    color: #fff;
    padding: 0 8px;
    vertical-align: top;
    margin-left: -10px; 
    margin-bottom: 1.2rem;
    border-radius: 12px;
}
.mobile-nav{
  display: none;
}
// .main-navbar{
//   position: fixed;
//   // top: 5rem;
//   // left: 0;
//   z-index: 999;
//   transition: all 1s ease-in-out;
// }

.col-3{
  display: flex;
  position: relative;
  width: 100vw;
  justify-content: space-around;
  // flex-direction: column;
  align-items: center;
  padding: 0 3.7rem 0 3.7rem;
  min-height: 20vh;
  list-style: none;
  color: white;
}
.main{
	width: 100%;
	max-width: 600px;
	display: inline-flex;
	border-radius: 30px;
	position: relative;
	margin: 0 60px;
}
.main {
  display: none;
}
.input{
  margin: 0;
	width: 100%;
	/*width: 500px;*/
	height: 40px;
	padding: 0 20px;
	color: rgb(27, 24, 24);
  border: none;
	outline: none;
	border-radius: 30px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	font-family: 'Poppins', sans-serif;
	background: #f4f4f4;
}

.input::placeholder{
	color: #524d4d;
}
.scroll-down header {
  transform: translate3d(0, -100% , 0);
  transition: all 0.5s ease-in-out;
}
.scroll-up header .col-3{
background: black;
justify-content: space-around;
align-items: center;
width: 100vw;
padding: 0 ;
min-height: 10vh;
transition: all 0.5s ease-in-out;
}
.scroll-up header .col-3 #logo_img_desktop{
  display: none;
}
.scroll-up header .col-3 #logo_img{
  display: block;
}
.scroll-up header .col-3 .mega-box{
  margin: 0 0 0 -20rem;
}

header{
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease-in-out;
}
// search bar start********************************


.icon{
	width: 90px;
	// height: var(--hieght);
	border-left: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
	cursor: pointer;
	background: #f4f4f4;
}

i.fa-search{
	font-size: 17px;
	color: #c29168;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;

	background: transparent;
}

.input:focus + .icon i.fa-search{
	transform: rotate(360deg);
}

// search bar ends********************************
.left-nav{
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  align-items: center;
}
.col-3 .logo ul li{
  list-style: none;
}

.col-3 .logo ul li a img{
  max-height: 192px;
}
.logo{
  display: flex;
  flex-direction: row;
}
#logo_img{
  display: none;
}
.navbar{
  margin:  0 0 0 5rem;
  position: relative;
}
 .navbar ul li {
  display: inline-flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
}
.mega-box{
  position: absolute;
  top: 3.6rem;
  width: 100vw;
  left: 0;
  background: white;
  color: black;
  margin: 0 0 0 -22rem;
  opacity: 0;
  visibility: hidden;
}
.mega-box .content{
  background: white;
  color: black;
  padding: 25px 20px;
  display: flex;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
  margin: 0 8rem 0 -5rem;
  padding: 1rem 0 1rem 5rem;
  line-height: 1rem;
}
.mega-box .content .row ul li a{
  color: rgb(96, 91, 91);
  font-weight: 200;
  justify-content: center;
  align-content: center;
}
.mega-box .content .row header{
  font-size: 1rem;
  font-weight: 900;
}
.content .row{
  width: calc(25% - 30px);
  line-height: 45px;
}
.content .row img{
  widows: 100%;
  height: 55vh;
  object-fit: cover;
}
.navbar ul li:hover .mega-box{
  top: 2.6rem;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}
.navbar .drop-menu{
  background: white;
  display: flex;
  color: black;
  flex-direction: column;
  position: absolute;
  width: 200px;
  justify-content: center;
  align-items: self-start;
  top: 3rem;
  margin: 0 -10rem 0 2rem;
  padding: 2rem 2rem 2rem 1.2rem;
  line-height: 2.5rem;
  opacity: 0;
  visibility: hidden;
}

.navbar ul li:hover .drop-menu{
  top: 1.7rem;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}
.navbar .drop-menu li a {
  color: rgb(96, 91, 91);
  font-weight: 200;
  
}

.navbar ul li a{
  margin: 0 1.5rem 0 1.5rem;
  font-family: 'Saira', sans-serif;
  font-weight: 900;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.dropdown-icon{
  padding: 0.4rem 0  0 3px;
  position: absolute;
  width: 24px;
}
.navbar ul li a:hover{
  color: #c29168;
}
.account-cart-nav ul li{
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 0 1rem;
}
.account-cart-nav ul li i{
  cursor: pointer;
}

.mobile-navbar-btn{
  display: none;
  background: transparent;
  cursor: pointer;

}
ion-icon{ 
  font-weight: 900;
  --ionicon-stroke-width: 46px;
}
.mobile-nav-icon{
  width: 2rem;
  height: 2rem;
}
.mobile-nav-icon[name="close-outline"]{
  display: none;
}

// ***************************** navbar Responsive Code starts******************

// 980px
@media (max-width: 62em){
  .mobile-navbar-btn{
    display: block;
    z-index: 999;
    color: white;
    position: absolute;
    margin:  0 3rem  0 -3rem ;

  }
  .col-3{
    width: 90vw;
    justify-content: space-between;
  }
  .logo{ 
    margin:  0 0 0 1rem;
  }
  .navbar{
  margin:  0 0 0 0;
}
  .navbar{
    width: 33%;
    height: 100vh;
    background: white;
    position: absolute;
    color: black;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: left;
    padding: 2rem 0 0 0;
    align-items: start;
    flex-direction: column;

    // to get the transition
    transform: translateX(-100%);
    transition: all 0.5s linear;
    
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .navbar ul li a{
    color: black;
    margin: 1rem;
  }
  .navbar ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: rem;
  }
  .active .navbar {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    
  }
  .active  .navbar .drop-menu {
    background: white;
    display: block;
    color: black;
    flex-direction: column;
    position: absolute;
    width: 120px;
    justify-content: center;
    align-items: self-start;
    top: 3rem;
    margin: 1rem -10rem 0 -8rem;
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    line-height: 0px;
}
.active .navbar ul li a {
    color: black;
    margin: 1rem;
    font-size: 12px;
}
.active .navbar ul li:hover .mega-box {
    top: 7.8rem;
    opacity: 1;
    width: 26vw;
    visibility: visible;
    transition: all 0.3s ease;
}
.active .navbar .drop-menu li a {
    color: rgb(96, 91, 91);
    font-weight: 200;
    font-size: 12px;
}
.active .mega-box .content {
    background: white;
    color: black;
    display: flex;
    width: 26vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: self-start;
    margin: 0 4rem 0 26rem;
    padding: 0;
    line-height: 0px;
    font-size: 0.8rem;
    overflow: hidden;
}
.active h3{
  text-align: center;
  padding-bottom: 1px;
}
.active  .content .row {
    width: auto;
    line-height: 1px;
    padding: 0.8rem;
    font-size: 10px;
}
.active  .content .row img{
  display: none;
}
.active .mega-box .content .row ul li a {
    color: rgb(96, 91, 91);
    font-weight: 200;
    justify-content: center;
    align-content: center;
    font-size: 0.7rem;
    line-height: 1px;
    padding: 0;
    margin: 10px;
}
  .active .mobile-navbar-btn .mobile-nav-icon[name="close-outline"]{
    display: block;
    position: absolute;
    margin: -5.5rem 0 0 7rem;
    transition: all 2s ease;

  }

  .active .mobile-navbar-btn .mobile-nav-icon[name="menu-outline"]{
    display: none;
  
  }

}
// 760px
@media (max-width: 47em){
  .mobile-navbar-btn{
    position: relative;
    color: black;

  }
  #logo_img_desktop{
    display: none;
  }
  .col-3{
    width: 100vw;
    justify-content: space-between;
  }
.main{
  display: inline-flex;
}
  
  #logo_img{
    display: block;
  }
  .right-nav{
    display: none;
  }

  .navbar{
    transform: translateX(0);
    width: 30%;
    transition: all 0.5s linear;
  }
  .active .navbar{
    transform: translateX(240%);
  }
  .col-3{
    min-height: 10vh;
    background: white;
    padding: 0px;
  }
  .active .mobile-navbar-btn .mobile-nav-icon[name="close-outline"]{
    display: block;
    position: absolute;
    margin:  0;
    transition: all 2s ease;

  }
}
// ***************************** navbar ends******************
.image {
   background-color: #490D40;
   background: url(https://cdn.shopify.com/s/files/1/0532/5907/5761/files/s3_1920x.jpg?v=1639326890) no-repeat center center;
   background-size: cover;
   height: 101vh;
   margin-top: -20vh;
   
   .heading {
      color: white;
      text-align: center;
      padding-top: 20rem;
   }

   p {
      text-align: center;
      padding: 20px 60px;
      
       .btn {
         background-color: transparent;
         color: white;
         border: 1px solid white;
         padding: 10px;
         font-size: 1.2em;
             
          &:hover {
             color: #C57ED3;
             border-color: #C57ED3;
          }
      }
   }
}
</style> 


