<template>
  <div class="mobile__container">
    <div class="wrapper__mobile">
      <h1
        class="absolute text-right font-bold w-24 h-24 cursor-pointer right-10"
        @click="close()"
      >
        X
      </h1>
      <img src="../../assets/Svg/logo.svg" />
      <HeaderLinks @close-mobile="close()" class="flex flex-col" />
    </div>
  </div>
</template>

<script>
import HeaderLinks from "./HeaderLinks.vue";
export default {
  components: {
    HeaderLinks,
  },

  setup(props, { emit }) {
    const close = () => emit("close");

    return {
      close,
    };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .mobile__container {
    @apply fixed w-screen h-screen flex items-center justify-center  inset-0 bg-gray-500 bg-opacity-60;
  }

  .wrapper__mobile {
    @apply bg-white h-auto w-96 rounded-xl shadow p-2 mx-2 flex flex-col items-center relative;
  }
}
</style>