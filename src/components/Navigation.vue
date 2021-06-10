<template> 

 <div>
  <div class="hidden-sm-and-up" >
     <v-navigation-drawer
     v-model="drawer"
     absolute
     app
     temporary
     height="800"
     style="z-index: 9999;"
     
     >
     <v-list>
         <v-list-item>
            <v-list-item-content class=" mt-2 ml-13">
                <v-list-item-title class="title">FEIJONES
                    <v-btn style="z-index:100;" class="ml-8" text color="rgba(90,13,4,255)" small fab @click="drawer = false"> <v-icon color="brown" > mdi-arrow-left</v-icon> </v-btn>
                 </v-list-item-title> 
                <v-list-item-subtitle class="subTitle">Feijao e Feijoada</v-list-item-subtitle>
            </v-list-item-content>

         </v-list-item>
     </v-list>

  

         <!-- colocar link do componente em 'link' -->
        <v-list dense
         v-for="([color,icon,text,click],i) in items"
         :key="i"
        >
          <v-divider class="mb-5"></v-divider>
        <v-list-item
            link
        >
          <v-list-item-icon class="justify-start">
                <v-icon  size="30" :color=color> {{icon}} </v-icon> 
          </v-list-item-icon> 
          <v-list-item-content @click="$vuetify.goTo(click); drawer=!drawer" >
             <v-list-item-title>{{text}}</v-list-item-title>
          </v-list-item-content>

         </v-list-item>
        </v-list>
          <v-divider/>
        <img class="mt-9 ml-8" width="190" height="200" src="@/assets/appBarLogo.svg" alt="a">
        <v-icon src="@/assets/appBarLogo.svg" > </v-icon>
     </v-navigation-drawer>
  </div>

 <v-app-bar
      dark
     :height=barSize
     flat
     color="black"
     class="fix"
     >
     
<v-col>
    <v-row justify="center">
    <img v-if="!isMobile" :class=imgStyle :src=imgSize width="530" height="260" style="z-index:10;">
    <img v-else :class=imgStyle :src=imgSize width="200" height="200" style="z-index:10;">
        <span v-if="!isMobile" class="dotDesktop"></span>
        <span v-else class="dotMobile"></span>
    </v-row>
 

  <v-row justify="space-between">
   <v-btn style="z-index:100;" class="btnMenu hidden-sm-and-up" color="rgba(90,13,4,255)" fab>
     <v-app-bar-nav-icon
     @click.stop="drawer = !drawer"
     >
     </v-app-bar-nav-icon>
     </v-btn>
       <v-btn style="z-index:200;" class="btnCart hidden-sm-and-up" color="rgba(90,13,4,255)" fab >
      <v-icon>mdi-cart</v-icon>
     </v-btn>
   </v-row>

   <v-spacer/>

    <v-app-bar
    class="expand poligon" 
    style="position:absolute;bottom:0px;"
    color="rgba(90,13,4,0.7)"
    :width= imgWi
    :height= imgHe
    flat
    
    >
   
    <v-row justify="end" class="hidden-md-and-down alo ">
        <v-col cols="2" align="center">
          <v-btn  style="position:relative;z-index:1000;"  x-large text class="mr-3 ml-5" >
           <span  class="appBar4">Home</span>
         </v-btn>
        </v-col>

        <v-col align="start">
         <v-btn @click="$vuetify.goTo('#historia'); " x-large text class="mr-3">
          <span class="appBar4">Feijões</span>
         </v-btn>
        </v-col>

        
        <v-col align="end">
         <v-btn @click="$vuetify.goTo('#form')" x-large class="mr-12" text >
           <span class="appBar4">Fale Conosco</span>
         </v-btn>
        </v-col>
    </v-row>
    </v-app-bar>

 
 </v-col>
 </v-app-bar>

 <v-app-bar
    app
    inverted-scroll
    style="bottom:0;"
    class="expand" 
    color="rgba(90,13,4,0.9) "
    :width= imgWi
    height= "90px"
    flat
    
    >



    <v-row justify="start">
     <img v-if=!isMobile height="75" src="@/assets/logoAppBar.svg" > 
    </v-row>

    <v-row class="mb-3" align="end" v-if="!isMobile" justify="space-between" >
        <v-row justify="end">
         <v-btn style="position:relative;z-index:100;" @click="$vuetify.goTo('#hero')"  x-large text class="mr-16" >
          <span  class="appBar4  ">Home</span>
         </v-btn>

        <v-btn  @click="$vuetify.goTo('#historia')" x-large text class="mr-16">
          <span  class="appBar4">Feijões</span>
        </v-btn>
      
        <v-btn  @click="$vuetify.goTo('#form')"  x-large class="mr-16" rounded outlined text >
          <span class="appBar4">Fale Conosco</span>
        </v-btn>
       </v-row>
    </v-row>

   <v-col class="mt-1" cols="12" v-else>
    <v-row  justify="space-between"  >
      <v-btn  class="" color="rgba(90,13,4,255)"  dark fab>
            <v-app-bar-nav-icon @click.stop="toTop()">
            </v-app-bar-nav-icon>
     </v-btn >
     <img  height="75" src="@/assets/logoAppBar.svg" > 
       <v-btn class="mr-2" color="rgba(90,13,4,255)" dark fab >
      <v-icon>mdi-cart</v-icon>
     </v-btn>
    </v-row>
   </v-col>
    </v-app-bar>

 </div>
</template>

<script>

export default {

    name: 'Navigation',
    data:() =>({
        drawer:false,
        img:   [
            { 
              src: require ('@/assets/newLogoCold.svg'),
              width:"",
              hight:"220"
              
            },
            { src: require ('@/assets/newLogoCold.svg'),
              width:"200000",
              hight:"250"
            }
            
            ],
        items:[
            ["orange","mdi-home-outline","Home", "#hero"],
            ["orange","mdi-silverware-variant","Feijões","#historia"],
            ["orange","mdi-message","Fale conosco","#form"],
            ["orange","mdi-cart","Carrinho","#hero"]



            
        ],
        // imgApp:[
        //     {
        //         width:"",
        //         hight:"100"
        //     },
        //     {
        //         width:"",
        //         hight:"100"
        //     }
        // ]
        
        
    }),

    methods: {
        toTop (){
            this.$vuetify.goTo(0)
            this.drawer = true
        }
    },
    computed:{
        isMobile() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return true;
                case "sm":
                    return true;
                default: 
                    return false;
            }
      },
      
        imgSize(){
            switch(this.$vuetify.breakpoint.name){

                case"xs":
                    return this.img[0].src
            default: return this.img[1].src
            }
            
        } ,

        imgWi(){
             switch(this.$vuetify.breakpoint.name){

                case"xs":
                    return this.img[0].width
                case "sm":
                    return  this.img[0].width   
            default: return this.img[1].width
            }

        },
        imgHe(){
             switch(this.$vuetify.breakpoint.name){

                case"xs":
                    return this.img[0].hight
                case "sm":
                    return this.img[0].hight
            default: return this.img[1].hight
            }


        },

        barSize(){
            switch (this.$vuetify.breakpoint.name){
                case"xs":
                    return 186
                case "sm":
                    return 186    
                default: return 270
            }
        },
        imgStyle(){
            switch (this.$vuetify.breakpoint.name){
                case"xs":
                    return "appBar2"
                default: return ""
            }
            
        },

        
        

    },
    
    
  }
</script>

<style scoped>

    .fix {
        position: relative;
        z-index: 30;
    }
.title{
    color:#211004 !important;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.subTitle{
    color: #8a542e !important;
    font-family: bold;
}
.appBar3{
   padding-top:4rem ;
   font-size: 20px;

}
.appBar4{
    font-family: 'ebrima';
    font-size:27px;
    color: #f4f4cc;
    text-transform: capitalize;
}
.spaceBar{
    width:850px ;
}

.dotDesktop{
    height: 260px;
    width: 300px;
    border-radius:50%;
    display: inline-block;
    background: black;
    position: absolute;
    z-index: 9;
    
}
.dotMobile{
    height: 140px;
    width: 170px;
    border-radius:50%;
    display: inline-block;
    background: black;
    position: absolute;
    z-index: 9;
    
}



.btnMenu{
   
    margin-bottom:7.4rem;
}
.btnCart{
  
    margin-bottom:7.4rem ;
}
.backDesktop{
    align-content: center;
}


.appBar2{
    position: absolute;
    bottom: 0px;
   
    
}
.poligon{
   clip-path: polygon(52% 70%, 100% 79%, 100% 100%, 0 100%, 0 79%);




   
}
.alo{
    padding-top:12rem ;
}




</style>