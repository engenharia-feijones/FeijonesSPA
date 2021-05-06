<template>
 
    <section id="hero">
      <v-container v-if="isMobile">
        <div class="first-div">
          <h1 class="title-first">O Brasileiro
             <h2 class="subtitle-first">Ama Feijão</h2>
          </h1>
          <img class="copo" src="@/assets/copo@Mobile.png" alt="">
        </div>

         <div class="second-div">
           <img class="embalagem" src="@/assets/embalagem@Teste3.png" width="300px">
          <h1>E agora chegou o jeito<br /><span style="margin-left: 60px">fácil de consumir.</span>
             <div class="second-cta"  @click="getLinkWhastapp()">
            <span style=" color: white;">(71) 9 9999-2891</span>
            <v-btn  @click="getLinkWhastapp()" class="cta-btn" color="green"  fab>
              <v-icon dark>mdi-whatsapp</v-icon>
            </v-btn>
            </div> 
        </h1>
       
        </div> 
      </v-container>
      <v-container v-else>
          <div class="first-div">
            <h1 class="title-first">O Brasileiro
              <h2 class="subtitle-first">Ama Feijão</h2>
            </h1>
        </div>

         <div class="second-div">
            <h1>E agora chegou o jeito<br /><span style="margin-left: 60px">fácil de consumir.</span>
              <div class="second-cta" @click="getLinkWhastapp()">
                <span style=" color: white;">(71) 9 9999-2891</span>
                <v-btn @click="getLinkWhastapp()" class="cta-btn" color="green"  fab>
                  <v-icon dark>mdi-whatsapp</v-icon>
                </v-btn>
              </div> 
          </h1>
        </div>

        <img class="bg" src="@/assets/teste@2.png"  alt="">
      </v-container>
  </section>

  
</template>

<script>

  export default {
    name: 'Home',

    computed:  {
     justifyContent() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "end";
        case "sm":
          return "end";
        case "md":
          return "center";
        case "lg":
          return "center";
        case "xl":
          return "center";
        default: return "center";
      }
    },

    isMobile() {
      switch(this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
            return true
        default: 
          return false
      }
    }

  },
    methods: {
       getLinkWhastapp() {
        var url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`
        window.open(url, '_blank')
      }
    }
    
  }
</script>

<style scoped>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: #5a0d04;
 }
  html {
    font-size: 10px;
    max-width: 768px;
  }
  #hero {
    background: url("../assets/bg.jpeg");
    display: flex;
    justify-content: center;
    padding-top: 13rem;
    min-height: 500px;
    max-width: 100vw;
  }
  .first-div {
    display: grid;
    grid-template-columns: 1fr 150px;
    justify-content: space-around;
    align-items: flex-end;
    position: relative;
    margin-bottom: 30px;
  }

  .second-div {
    display: grid;
    grid-template-columns: 120px 1fr;
    font-size: .7rem;
    padding-top: 20px;
    text-align: right;
    padding-right: 10px;
    padding-bottom: 10px;

  }

  .title-first {
    font-size: 2.3rem ;
    transform: rotate(-4deg);
    justify-self: flex-end;
    align-self: flex-end; 
  }

  .subtitle-first {
    font-size: 2.1rem;
    text-align: right;
  }

  .second-cta {
    cursor: pointer;
    background:  #5a0d04;
    padding: 20px;
    border-radius: 10px;
    color: white;
    text-align: center;
    position: relative;
    margin-top: 20px;
   
  }

  .cta-btn {
    position: absolute;
    bottom: -40px;
    left: 170px;
    color: white;
    z-index: 300;
  }
  .copo {
    height: 150px;
    overflow:hidden;
    justify-self: flex-end;
  }

  .embalagem {
    height: 350px;
    transform: rotate(-10deg);
    position: relative;
    bottom: 45%;
    right: 10%;
    z-index: 1;
  }

  
  .home_image {
    height: 700px;
    position: absolute;
    top: 8%;
    left: 1%;

  }

  @media screen and (min-width: 360px) {
  

    .embalagem {
      right: 43%;
    }
  }


  /* IPHONE 5 LAYOUT */
    @media screen and (device-aspect-ratio: 40/71) {
     .second-div {
       grid-template-columns: 80px 1fr;
       font-size: .6rem;
     }


    .title-first {
      font-size: 1.8rem;
    }
    .subtitle-first {
      font-size: 1.6rem;
    }

    .copo {
      height: 100px;
    }

    .embalagem {
        height: 300px;
        bottom: 120px;
        right: 45px;
        z-index: 1;
    }
  } /* FIM LAYOUT IPHONE 5 */


@media screen and (min-width: 453px) and (max-width: 767px) {

  .second-div {
    grid-template-columns: 250px 1fr;
  }
  .embalagem {
    justify-self: flex-end;
    left: 60%;
    top: -40%;
  }
}

@media screen and (min-width: 585px) and (max-width: 767px) {
  .embalagem {
    left: 21rem;
  }
}

@media screen and (min-width: 800px) and (max-width: 1023px) {
  .embalagem {
    left: 5rem;
  }
}


@media screen and (min-width: 1024px) and (max-width: 1300px) {
/* ADD YOUR CSS ADJUSTMENTS BELOW HERE */
  .bg {
    height: 600px !important;
    left: -6% !important;
    top: 12% !important;    
  }
}

@media screen and (min-width: 1301px) and (max-width: 1915px) {
  .bg {
    height: 700px !important;
    left: -10% !important;
  }
}

@media screen and (min-width:799px) and (max-width: 959px) {
  .first-div {
    grid-template-columns: 1fr 1fr;
  }


  .title-first {
    font-size: 4rem;
      justify-self: flex-end;
    align-self: flex-end; 
  }

  .subtitle-first {
    font-size: 3rem;
  }

  .copo {
    height: 200px;
    justify-self: flex-start;
  }

  .second-div {
    grid-template-columns: 300px 1fr;
    justify-content: start;
    padding-top: 0;
  }

  .second-div h1 {
    justify-self: flex-start;
    font-size: 3em;
  }

  .embalagem {
    height: 500px;
    left: 30% !important;
    top: -25% !important;
  }

  .second-cta {
    font-size: 1.5rem;
    padding: 40px;
    width: 300px !important;
  }

  .cta-btn {
    right: 0;
    height: 80px;
    width: 80px;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1023px) {

    #hero {
      padding-top: 18rem;
    }
    .embalagem {
      left: 310%;
    }
    
    .second-cta {
      width: 40%;
      left: 60%;
    }

  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1024px)  {

  .bg {
    height: 800px;
    position: absolute;
    top: 9%;
    left: 3%;
  }

  #hero {
    padding-bottom: 15rem;
    padding-top: 19rem;
  }
  /* CSS */
  .first-div { 
    display: flex;
    justify-content: flex-end;
    transform: rotate(4deg);
    padding-right: 10%;
  } 
  .second-div { 
    display: flex;
    justify-content: flex-end;
    transform: rotate(4deg);
    padding-right: 10%;
    font-size: 1.2rem;
  }

  .title-first {
    font-size: 4rem;
  }

  .subtitle-first {
    font-size: 3.5rem;
  }
  .cta-btn {
    left: 70%;
  }
}



 @media screen and (max-width: 1280px) and (max-height: 960px) and (min-height: 801px) {
    .bg {
        height: 600px;
        left: -10%;
    }
}

  @media screen and (max-width: 1280px) and (max-height: 1024px) {
    .bg {
      height: 500px;
      left: -13%;
      top: 12%;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1023px) {
    .first-div {
      display: flex;
      justify-content: flex-end;
      
    }
    .second-div {
      display: flex;
      justify-content: flex-end;
    }

    .title-first {
      font-size: 4rem !important;
    }

    .subtitle-first {
      font-size: 3.2rem !important;
    }

    .second-cta {
      position: relative;
      left: 2%;
      width: 200px;
    }

    .cta-btn {
      top: 68%;
      left: 70%;
    }

    .bg {
      position: relative;
      top: -45% !important;
      height: 500px !important;
    }

  }

  @media screen and (min-width: 1024px) and (max-width: 1263px) {
 
    .bg {
      height: 450px !important;
      top: 14% !important;
      left: -10% !important;
    }
  }
</style>


