<template>
  <section id="about-menu" class="container-menu">
    <div class="wrapper">
      <div class="wrapper__main">Nosso Sabores</div>
      <div class="cards__container">
        <div class="card card__1">
          <h1 class="card__title">Marrom</h1>
          <div class="card__cta">Peça agora</div>
          <h1 class="card__info">Saiba mais</h1>
        </div>

        <div class="card card__2">
          <h1 class="card__title">Preto</h1>
          <div class="card__cta">Peça agora</div>
          <h1 class="card__info">Saiba mais</h1>
        </div>

        <div class="card card__3">
          <h1 class="card__title">Feijonada</h1>
          <div class="card__cta">Peça agora</div>
          <h1 class="card__info">Saiba mais</h1>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@layer components {
  .container-menu {
    @apply w-screen h-auto lg:h-screen pb-4 relative flex justify-center items-center z-0 bg-secundary_intense;
    background-image: url("../../assets/background_2.png");
    background-position: center;
    background-size: cover;
  }

  .wrapper {
    @apply items-center;
  }

  .wrapper__main {
    @apply text-white text-center mt-10;
  }

  .cards__container {
    @apply flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8;
  }

  .card {
    @apply rounded-xl w-72 h-80 flex flex-col justify-center items-center lg:w-60 lg:h-80 ;
  }

  .card__1 {
    background-image: url("../../assets/Home/bacon.png");
    background-color: #6b3a0b;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

  .card__2 {
    background-image: url("../../assets/Home/charque.png");
    background-color: #6b3a0b;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

  .card__3 {
    background-image: url("../../assets/Home/vegetariano.png");
    background-color: #6b3a0b;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

  .card__1::before,
  .card__2::before,
  .card__3::before {
    @apply rounded-xl;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -10;
    opacity: 0.4;
    content: "";
  }

  .card__title,
  .card__cta,
  .card__info {
    @apply font-roboto text-white font-black;
  }

  .card__title {
    @apply my-20 text-3xl;
  }

  .card__cta {
    @apply rounded-xl py-2 px-10 mb-2 cursor-pointer bg-primary_dark;
  }

  .card-info {
    @apply text-xs cursor-pointer;
  }
}
</style>