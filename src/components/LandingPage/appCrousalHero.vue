<template>
    <div>
        <div class="slider">

        <div class="slide active">
        <img :src="slides[0]" alt="">
        <div class="info">
          <h4>Specifications Best Prices</h4>
          <h2>Winter Mountains</h2>
        </div>
      </div>
      <div class="slide">
        <img  :src="slides[1]" alt="">
        <div class="info">
            <h4>Specifications Best Prices</h4>
          <h2>Tropical Desert</h2>
        </div>
      </div>
      <div class="slide">
        <img  :src="slides[2]" alt="">
        <div class="info">
          <h4>Specifications Best Prices</h4>
          <h2>Steaming Volcanoes</h2>
        </div>
      </div>
      <div class="navigation">
        <i class="fas fa-chevron-left prev-btn"></i>
        <i class="fas fa-chevron-right next-btn"></i>
      </div>
      <div class="navigation-visibility">
        <div id="slide-icon-id" class="slide-icon active"></div>
        <div id="slide-icon-id1" class="slide-icon"></div>
        <div id="slide-icon-id2" class="slide-icon"></div>
      </div>
        </div>
    </div>

</template>

<script>

export default {
  
    data(){
        return {
            slides: [
                'https://cdn.shopify.com/s/files/1/0532/5907/5761/files/s2_1920x.jpg?v=1639326890',
                'https://cdn.shopify.com/s/files/1/0532/5907/5761/files/s1_1920x.jpg?v=1639326891',
                'https://cdn.shopify.com/s/files/1/0532/5907/5761/files/s3_1920x.jpg?v=1639326890'
            ]
        }
    },
    methods:{
        imageCrousalslider(){
                const slider = document.querySelector(".slider");
                const nextBtn = document.querySelector(".next-btn");
                const prevBtn = document.querySelector(".prev-btn");
                const slides = document.querySelectorAll(".slide");
                const slideIcons = document.querySelectorAll(".slide-icon");
                const slideIconId = document.querySelector("#slide-icon-id");
                const slideIconId1 = document.querySelector("#slide-icon-id1");
                const slideIconId2 = document.querySelector("#slide-icon-id2");
                const numberOfSlides = slides.length;
                var slideNumber = 0;

                //image slider next button
                nextBtn.addEventListener("click", () => {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcon) => {
                    slideIcon.classList.remove("active");
                });

                slideNumber++;

                if(slideNumber > (numberOfSlides - 1)){
                    slideNumber = 0;
                }

                slides[slideNumber].classList.add("active");
                slideIcons[slideNumber].classList.add("active");
                });
                // change image on slideicon click
                slideIconId.addEventListener("click", () => {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcon) => {
                    slideIcon.classList.remove("active");
                });

                slideNumber++;

                if(slideNumber > (numberOfSlides - 1)){
                    slideNumber = 0;
                }
                slides[0].classList.add("active");
               slideIconId.classList.add("active");
                });
               
                slideIconId1.addEventListener("click", () => {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcon) => {
                    slideIcon.classList.remove("active");
                });

                slideNumber++;

                if(slideNumber > (numberOfSlides - 1)){
                    slideNumber = 0;
                }
                slides[1].classList.add("active");
               slideIconId1.classList.add("active");
                });
               
               
                slideIconId2.addEventListener("click", () => {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcon) => {
                    slideIcon.classList.remove("active");
                });

                slideNumber++;

                if(slideNumber > (numberOfSlides - 1)){
                    slideNumber = 0;
                }
                slides[2].classList.add("active");
               slideIconId2.classList.add("active");
                });
               
                //image slider previous button

                prevBtn.addEventListener("click", () => {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                slideIcons.forEach((slideIcon) => {
                    slideIcon.classList.remove("active");
                });

                slideNumber--;

                if(slideNumber < 0){
                    slideNumber = numberOfSlides - 1;
                }

                slides[slideNumber].classList.add("active");
                slideIcons[slideNumber].classList.add("active");
                });

                //image slider autoplay
                var playSlider;

                var repeater = () => {
                playSlider = setInterval(function(){
                    slides.forEach((slide) => {
                    slide.classList.remove("active");
                    });
                    slideIcons.forEach((slideIcon) => {
                    slideIcon.classList.remove("active");
                    });

                    slideNumber++;

                    if(slideNumber > (numberOfSlides - 1)){
                    slideNumber = 0;
                    }

                    slides[slideNumber].classList.add("active");
                    slideIcons[slideNumber].classList.add("active");
                }, 4000);
                }
                repeater();

                //stop the image slider autoplay on mouseover
                slider.addEventListener("mouseover", () => {
                clearInterval(playSlider);
                });

                //start the image slider autoplay again on mouseout
                slider.addEventListener("mouseout", () => {
                repeater();
                });
        }
    },
    mounted(){
        this.imageCrousalslider();
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.slider{
  position: relative;
  background: #000116;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
}
.navigation-visibility{
    margin: 12rem 0 0 46rem;

}
.slider .slide{
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(0%);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  transform: scale(0.8);
}

.slider .slide.active{
  clip-path: circle(100%);
  transform: scale(1);
  transition: 2.5s;
}

.slider .slide img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.slider .slide .info{
  position: absolute;
  color: white;
  /* background: rgba(255, 255, 255, 0.3); */
  width: 75%;
  margin-top: 0;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(1 1 1 / 5%);
}

.slider .slide .info h2{
  font-size: 4rem;
  font-weight: 800;
}

.slider .slide .info h4{
  font-size: 2rem;
  font-weight: 400;
}

.navigation{
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slider:hover .navigation{
  opacity: 1;
}

.prev-btn, .next-btn{
  z-index: 999;
  font-size: 2em;
  color: #222;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  cursor: pointer;
}

.prev-btn{
    display: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.next-btn{
    display: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.navigation-visibility{
  z-index: 999;
  display: flex;
  justify-content: center;
}

.navigation-visibility .slide-icon{
  z-index: 999;
  background: rgba(255, 255, 255);
  width: 20px;
  height: 20px;
  transform: translateY(-50px);
  margin: 0 6px;
  border-radius: 1rem;
  box-shadow: 0 5px 25px rgb(1 1 1 / 20%);
  cursor: pointer;
}

.navigation-visibility .slide-icon.active{
  background: #c29168;
  cursor: pointer;
}
.navigation-visibility .slide-icon:hover{
    background: #c29168;

}
@media (max-width: 900px){
  .slider{
    width: 100%;
  }

  .slider .slide .info{
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px){
  .slider .slide .info h2{
    font-size: 1.8em;
    line-height: 40px;
  }

  .slider .slide .info p{
    font-size: 0.9em;
  }
}

</style>