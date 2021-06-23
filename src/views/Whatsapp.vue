<template>
    <Home />
</template>

<script>
import Home from './Home.vue'
export default {
  components: {
    Home,
  },
  created() {
    const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`;
    window.location = url;
  },
};
</script>