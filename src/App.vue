<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'App',

  data: () => ({
    links: [
      {nome: 'Home', path: "/"},
      {nome: 'Feijões', path: "/"},
      {nome: 'Fale Conosco', path: "/"},
    ]
  }),

  computed: {
    showTemplateTabs() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return false

        default: return true;
      }
    }
  },

  components: {
    Navigation,
    Footer
  }
};
</script>

<style >
  .center-me {
  
    position: absolute  !important;
    margin-left: 50%;
    transform: translate(-50%, 0);
    z-index: 999999 !important;
  }

  
</style>
