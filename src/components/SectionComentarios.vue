<template>
    <section id="comentarios">
        <v-container fluid>
            <v-row justify="center" align="center">
                
                <v-col cols="12">
                    <h3 class="text-center">Comentarios dos nossos clientes</h3>
                    <v-row justify="center">
                        <v-icon class="move" size="40" color="orange">mdi-format-quote-open</v-icon>
                        <v-icon class="move" size="40" color="orange"> mdi-format-quote-close</v-icon>
                    </v-row>
                    <div class="comment-box pa-3">
                        <p><i>O melhor feijão que ja comi.</i></p>
                        <span class="text-center">Fernanda Almeida</span>
                    </div> 
                </v-col>
                
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Comentarios"
}
</script>

<style scopped>
    #comentarios {
        min-height:200px;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .comment-box {
        margin: 0 auto;
        margin-top: 20px;
        /* padding: 20px; */
        background-color: #822b07;
        border-radius: 10px;
        text-align: center;
        max-width: 300px;
    }


    .move:first-of-type {
        position: relative;
        top: 1.4rem;
        right: 7.2rem;
    }
    .move:nth-of-type(2) {
        position: relative;
        top: 1.4rem;
        left: 7.2rem;
    }

  

</style>