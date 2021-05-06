<template>
    <section id="form">
        <v-container fluid>
            <!-- <v-row justify="center" align="center"> -->
                <!-- <v-col cols="12"> -->
           
                    <v-row justify="center" >
                        <div class="rounded black white--text manda-ai">
                            <h1 class="display-1">Mande a Real:</h1>
                        </div>
                    </v-row>
                <v-form class="form">
                    <v-row>

                        <v-col v-if="isMobile" 
                             :class="isMobile ? 'v-col-mobile' : ''"
                            cols="12" md="6" 
                        >
                            <v-text-field
                                hide-details  outlined 
                                prefix="Nome:" class="add-border"
                                placeholder="Insira seu nome"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" v-else>
                            <v-row>
                                <v-col cols="6" class="v-col-two-input">
                                    <v-text-field
                                        hide-details    
                                        prefix="Nome:" class="remove-border-1 underline"
                                        placeholder="Insira seu nome"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6" class="v-col-two-input">
                                        <v-text-field
                                            hide-details   
                                            prefix="Telefone:" class="remove-border-2 underline"
                                            placeholder="Insira seu telefone"
                                        ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                         <v-col v-if="isMobile"  
                            :class="isMobile ? 'v-col-mobile' : ''" 
                            cols="12" md="6"
                         >
                            <v-text-field
                                hide-details outlined 
                                prefix="Telefone:" :class="isMobile ? 'change-input-border' : 'change-input-border-desktop'"
                                placeholder="Insira seu telefone"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" :class="isMobile ? 'v-col-mobile' : 'v-col-desktop'">
                             <v-text-field
                                hide-details outlined 
                                prefix="Email:" class="change-input-border"
                                placeholder="Insira seu Email"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" :class="isMobile ? 'v-col-mobile' : 'v-col-desktop'" >
                             
                            <v-text-field
                                outlined hide-details class="change-input-border"
                                prefix="Motivo do Contato:"
                                placeholder="Assunto"
                            ></v-text-field>
                        </v-col >
                        <v-col cols="12" :class="isMobile ? 'v-col-mobile' : 'v-col-desktop'">
                             <v-textarea
                                outlined  hide-details 
                                class="change-input-border shapped-bottom" 
                                placeholder="Sua Mensagem..."
                                shaped
                            ></v-textarea>
                        </v-col>
                        <v-row justify="end">
                            <v-btn color="black" dark
                                class="rounded-submit" height="60px"
                            >Enviar</v-btn>
                        </v-row>
                    </v-row>
                       
                          
                                <!-- class="rounded-submit" type="button" -->
                           
                            
                            
                </v-form>

                <!-- </v-col> -->
            <!-- </v-row> -->
        </v-container>
    </section >
</template>
<script>
export default {
    name: "SectionForm",
   
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
<style scoped>
    #form {
        background-color: #d07300;
        
    }
    .manda-ai {
        box-sizing:content-box;
        width: 250px;
        text-align: center;
        padding: 10px;
        position: relative;
        top: 25px;
        right: 40px;
    }

    .form {
        margin: 0 auto;        
        border: 1px solid black;
        background: url("../assets/bg.jpeg");
        padding: 30px ;
        max-width: 800px;
        min-height: 200px;
    }

  

    .change-input-border {
        border-radius: 0;
    }
    .change-input-border-desktop {
         margin-top: 30px;
    }
    .shapped-bottom {
        border-radius: 0 0 16px 16px;
    }

    .rounded-submit {
        position: relative;
        border-radius: 10px;
        bottom: 5px;
    }


    .v-col-mobile, .v-col-desktop  {
        padding: 0;
    }
    .v-col-mobile:first-of-type, .second-col {
        margin-top: 30px;
    }

    .v-col-two-input {
        padding: 0;
        margin-top: 10px;
    }

    .add-border {
        border-radius: 16px 16px 0 0;
    }

    .remove-border-1 {
        border: 1px solid rgba(0, 0, 0, 0.4);
        padding: 15px 10px;
        margin-top: 10px;
        border-radius: 16px  0 0 0;

    }
    
    .remove-border-2 {
        border: .3px solid rgba(0, 0, 0, 0.4);
        padding: 15px 10px;
        margin-top: 10px;
        border-radius: 0 16px 0 0;
    }

    .underline >>> .v-input__slot::before {
        border-style: none !important;
    }
    .underline >>> .v-input__slot::after {
        border-style: none !important;
    }

    @media only screen and (min-width: 768px) {
       .rounded {
           position: relative;
           right: 120px;
           width: 500px;
       }
}
</style>