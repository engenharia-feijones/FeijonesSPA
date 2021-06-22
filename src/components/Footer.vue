<template>

    

    <div v-if="isMobile">
<v-footer tile  color="rgba(0, 0, 0, 1)" >
       <v-row justify="space-between">
           <v-col cols="2"> 
                <ul >
                    <v-btn class="text-footer" small color="white" text @click="$vuetify.goTo('#hero')">Home</v-btn>
                    <v-btn class="text-footer" small color="white" text @click="$vuetify.goTo('#historia')">Sobre Nós</v-btn>
                    <v-btn class="text-footer" small color="white" text @click="$vuetify.goTo('#form')">Fale Conosco</v-btn>
                </ul>
           </v-col>
            <v-col class="tagFeijones mt-6" cols="6">
                <p class="white--text  " v-if="isMobile">@FEIJONES</p>
                <span v-if="!isMobile" class="text-footer">@FEIJONES</span>
            </v-col>    
       </v-row>

              <v-row justify="space-between" >
                <v-col cols="12"  align="center">
                <v-btn class="mt-1 mr-6"  :color=icon.btnColor 
                    fab height="38px" width="38px"
                    @click="icon.cta"
                    v-for="(icon,i) in icons" :key="i" 
                >
                    <v-icon size="33px" :color=icon.color>
                        {{icon.icon}}
                    </v-icon>
                 </v-btn>
                </v-col>  
              </v-row>
         

            <v-row justify="center" v-if="isMobile">
              <img height="140" width="140" src="@/assets/newLogoCold.svg">
            </v-row>
          
          <div class="endereco">
              <span><span v-if="!isMobile">Endereço: </span> AV. Urbana, Ponto certo.</span>
          </div>
 </v-footer>
    </div>

                                    <!------------------------------- footer desktop ------------------------------------->
    
    <div v-else>
        <v-footer color="black">
  
    <v-row justify="space-between">
      
                <img  class="ml-6" width="200" height="200" src="@/assets/newLogoCold.svg">
   
        <v-col align="end" class="mt-5">
            <v-btn text color="#f4f4cc" @click="$vuetify.goTo('#form')">
                <span class="text-FotDesk">Fale conosco</span>
            </v-btn>
             <v-btn text color="#f4f4cc" @click="$vuetify.goTo('#hero')">
                <span class="text-FotDesk">Home</span>
            </v-btn>
             <v-btn text color="#f4f4cc" @click="$vuetify.goTo('#historia')">
                <span class="text-FotDesk">Sobre nós</span>
            </v-btn>
             <v-btn text color="#f4f4cc" @click="$vuetify.goTo('#comentarios')">
                <span class="text-FotDesk">Assuntos Legais</span>
            </v-btn>
            <v-col class="mt-6" cols="11">
            <v-row  justify="end">
                 <v-btn text color="#f4f4cc">
                     <h1 class="feijonesTag">@FEIJONES</h1>
                 </v-btn>
                  <v-btn class="mt-1 mr-6"  :color=icon.btnColor 
                    fab height="50px" width="50px"
                    @click="icon.cta"
                    v-for="(icon,i) in icons" :key="i" 
                >
                    <v-icon size="33px" :color=icon.color>
                        {{icon.icon}}
                    </v-icon>
                 </v-btn>
            </v-row>
       <v-col class="mt-7 endDesktop" cols="11">
            <v-row  justify="end">
                <p style="color:#f4f4cc" >Endereço: Av. Urbana, Ponto Certo</p>
            </v-row>
       </v-col>
        
            </v-col>
        </v-col>
    </v-row>  

        </v-footer>
    </div>


    
   

</template>
<script>
export default {
   name:'Footer',
    data:()=>({
        icons:[
                {
                    icon:"mdi-facebook", color:"white",btnColor:"#041454", cta: () => {
                         const url = `https://www.facebook.com/profile.php?id=100066475050399`
                        window.open(url, '_blank')
                    }
                    
                },
                { 
                    icon:"mdi-whatsapp", color:"white", btnColor:"green", cta: () => {
                        const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`
                        window.open(url, '_blank')
                    }
                },
                {
                    
                    icon:"mdi-instagram", color:"white",btnColor:"#FD1D1D", cta: () => {
                        const url = `https://www.instagram.com/feijonesoficial/`
                        window.open(url, '_blank')
                    }
                },
                {
                    icon:"mdi-twitter", color:"white",btnColor:"#1ca4e0", cta: () => {
                         const url = `https://twitter.com/FeijonesOficial`
                         window.open(url,'_blank')
                    }
                },
                {
                    icon:"mdi-youtube", color:"red",btnColor:"white", cta: () => {
                         const url = `https://www.youtube.com/channel/UCJ8CjC_63ylYx3Rj3U9LyUg`
                         window.open(url, '_blank')
                    }
                }
             ]
    }),
    computed: {
        isMobile () {
            switch(this.$vuetify.breakpoint.name) {
                case 'xs':
                    return true
                case 'sm':
                    return true
                default: 
                    return false
            }
        }
    }
}
</script>
<style scoped>

.text-footer{
    text-transform: capitalize;
    font-family: 'ebrima';
    font-size: 16px;
}
.h2{
    color: white;
    font-size:100% ;
}

    .h3{
        color: white;
        font-size: 130%;
    }

    .footer-menu {
        box-sizing: border-box;
        margin-top: 10px;
        display: flex;
        width: 98vw;
        font-size: 12px;
       color: rgba(239,192,141, .9) !important;
       font-family: 'ebrima';
    }

  
    .footer-menu ul {
        list-style-type: none;
        color: rgba(239,192,141, .9) !important;
        font-family: 'ebrima';
    }

    .footer-menu ul li {
        cursor: pointer;
    }
    .text-FotDesk{
        font-size: 25px;
        text-transform: capitalize;
        font-family: 'ebrima';
    }
    .feijonesTag{
        font-family: 'ebrima';
        font-size:40px;
        


    }
    .endDesktop{
        font-size: 20px;
        font-family: 'ebrima'
    }

    .icons-row {
        display: flex;
        width: 98vw;
        justify-content: space-around;
        size: 30px;
    }

    .endereco {
        padding-top: 10px;
        display: flex;
        font-size: 12px;
        color:white !important;
        justify-content: center;
        width: 98vw;
    }

    .logo-footer-desktop {
        position: relative;
        top: 120px;
    }

    @media only screen and (min-width: 760px) {
        .footer-menu {
            display: flex;
            justify-content: flex-end;
            margin-right: 10px;
            font-family: 'ebrima';
        }

        .footer-menu ul {
            display: flex;
        }
        .footer-menu ul li {
            padding: 10px 12px;
        }

        .icons-row {
            justify-content: flex-end;
            align-items:center;
            padding: 6px 3px;
            width: 97vw;
        }

        .insta {
            color: rgba(239,192,141, .9);
            position: relative;
            top: -2px;
            left: -16px;
            font-size: 24px;
        }

    }
</style>