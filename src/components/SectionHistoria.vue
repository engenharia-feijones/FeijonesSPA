<template>
    
        <section id="historia">
           <v-container fluid id="teste">
              
               <v-row justify="center">
                  

                   <div v-if="!isMobile" class="moldura-container">
                           <img class="molde" height="600" src="@/assets/moldura.svg" alt="">
                   </div>
                   <div v-else  class="mt-12 moldura-mobile">
                       <img class="moldeMob" height="200" src="@/assets/moldura.svg" alt="">
                   </div>

                   <!-- <div class="cards-feijao">
                 
                       <div class="cards-feijão-filho" v-for="(item, index) in items" :key="index">
                            <v-card >
                                <v-img height="200" width="200" :src="item.src"></v-img>
                            </v-card>
                            <p class="legend">{{ item.text }}</p>
                       </div>
                   </div> -->
                   
               </v-row>

               
               <v-row justify="space-between" align="center" >
                   
               </v-row>
                   
                <h1 class="display-1 my-12 historia-title" v-if="!isMobile" align="center">Feijão,<br /> Uma Historia</h1>  
                <v-row align="center" justify="center" v-if="!isMobile">
                    <v-col cols="12">
                        <v-row justify="center">
                            <v-col cols="5">
                                <p class="text-justify historia-paragraph">
                                    O feijão-comum está entre os alimentos mais antigos do  mundo.  Seus  registros  estão   diretamente   asso-ciados  à  história  da  humanidade. No antigo Egito e   na   Grécia,   os   feijões   eram  cultivados  e  cultua-dos como símbolo da vida.
                                </p>
                            </v-col>
                            <v-col cols="5">
                                <p class="text-justify historia-paragraph">
                                    No mundo da gastronomia 
                                    existem várias hipóteses 
                                    sobre o surgimento da feijoada. Uma das mais famosas diz que a feijoada que 
                                    conhecemos teve sua 
                                    origem no século XIX e já 
                                    se tornou símbolo nacional 
                                    na mesma época. Outra diz 
                                    que o prato foi criado nas 
                                    senzalas, pelos escravos, 
                                    usando restos de comida 
                                    dos nobres portugueses
                                </p>
                            </v-col>
                            <v-col cols="5">

                                <p class="text-justify historia-paragraph">
                                    O feijão preto é de origem sul-americana  e  era  parte  da  dieta  dos  índios  nativos. Antes da chegada dos portugueses  ao  Brasil,  já  se  conhecia  na  Europa  diversas      variedades      de      feijão, e era comum usá-lo no    preparo    de    alguns    pratos,  como  “Cassoulet”  com o feijão branco.
                                </p>

                            </v-col>
                            <v-col cols="5">
                                <p class="text-justify historia-paragraph">
                                    O  que  podemos  dizer  com  certeza  é  que  a  feijoada  é  uma  variação  de  um  prato  bem  antigo  típico  europeu,  que  tem como base a mistura de tipos diferentes  de  carne,  com  legumes  e  verduras, e varia de região em região. 
                                </p>
                            </v-col>
                        </v-row>

                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="historia" v-else>
                <v-col cols="12">
                    <h1 class="my-3
                     historia-title historia-title-mobile" >Feijão,<br /> Uma Historia</h1> 
                    <p class="text-justify historia-paragraph">
                        O feijão-comum está entre os alimentos mais antigos do  mundo.  Seus  registros  estão   diretamente   associados  à  história  da  humanidade. No antigo Egito e   na   Grécia,   os   feijões   eram  cultivados  e  cultuados como símbolo da vida.
                    </p>

                    <p class="text-justify historia-paragraph">
                        O feijão preto é de origem sul-americana  e  era  parte  da  dieta  dos  índios  nativos. Antes da chegada dos portugueses  ao  Brasil,  já  se  conhecia  na  Europa  di-versas      variedades      de      feijão, e era comum usá-lo no    preparo    de    alguns    pratos,  como  “Cassoulet”  com o feijão branco.
                    </p>

                    <p class="text-justify historia-paragraph">
                        No mundo da gastronomia 
                        existem várias hipóteses 
                        sobre o surgimento da feijoada. Uma das mais famosas diz que a feijoada que 
                        conhecemos teve sua 
                        origem no século XIX e já 
                        se tornou símbolo nacional 
                        na mesma época. Outra diz 
                        que o prato foi criado nas 
                        senzalas, pelos escravos, 
                        usando restos de comida 
                        dos nobres portugueses
                    </p>

                     <p class="text-justify historia-paragraph">
                            O que  podemos  dizer  com  certeza  é  que  a  feijoada  é  uma  variação  de  um  prato  bem  antigo  típico  europeu,  que  tem como base a mistura de tipos diferentes  de  carne,  com  legumes  e  verduras, e varia de região em região. 
                    </p>
                </v-col>
            </v-row> 
           </v-container>
            

        </section>
    
</template>

<script>
export default {
    data: () => ({
        items : [
            {
            src: 'https://exame.com/wp-content/uploads/2020/06/bacon-in-natura.jpg',
            text: 'Bacon',
          },
          {
            src: 'https://cdn4.ecycle.com.br/cache/images/2018-10/50-650-filosofia-vegana.jpg',
            text: 'Vegano',
          },
          {
            src: 'https://d1uz88p17r663j.cloudfront.net/resized/bb8b6b5a95b117f0bd91bd12faab3ccc_charque-acebolado-receitas-nestle_1200_600.jpg',
            text: 'Charque',
          },
         
        ]
    }),

    computed: {
      isMobile() {
        switch (this.$vuetify.breakpoint.name) {
            case "xs":
                return true;
            case "sm":
                return true;
            default: 
                return false;
        }
      }
    }
}
</script>

<style>
    #historia {
        background: url("../assets/bg.jpeg");
        display: flex;
        align-items: center;
        justify-content: center;
    }

    

    .historia-title {
        text-align: left;
        padding-left: 150px;

        font-weight: 700 !important;
        font-size: 41px !important;
    }

    .historia-title-mobile {
        position: relative;
        font-size: 40px !important;
        right: 140px;
        width: 110vw;
    }

    .historia-paragraph {
        font-size: 23px !important;
    }
    
    .cards-feijao {
        display: flex;
        position: relative;
        width: 98vw;
        justify-content: space-around;
        background-color: black;
        padding: 45px 0;
    }

    .moldura-container {
        width: 100vw;
        
        background-color: black;
        height: 244px;
        display: flex;
        justify-content: center;
        position: relative;
        padding: -100px 0;
    }
        .moldura-mobile {
        
        width: 100vw;
        background-color: black;
        height: 100px;
        display: flex;
        justify-content: center;
        position: relative;
        
        
        
        
        
    }
    .moldeMob {
     
        position: absolute;
        top: -30%;
        height: 158px;
    }

    .molde {
        position: absolute;
        top: -34%;
        height: 400px;
    }

    @media only screen and (max-width: 760px) {
     .historia-paragraph {
        font-size: 17px !important;
    }

    .historia-title {
        font-size: 33px !important;
    }
    
    }




</style>