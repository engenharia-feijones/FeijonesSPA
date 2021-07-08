<template>
    <section id="footer" class="container__footer">
        <div class="wrapper__one">
            <img src="../../assets/Svg/logo_white.svg" />
            <div class="container__social">
                <h1 class="text-white">Siga nossas redes sociais</h1>
                <SocialIcons />
            </div>
        </div>
    </section>
</template>

<script>
import SocialIcons from '../SocialIcons.vue'
    export default {
        components: {
            SocialIcons
        }
    }
</script>

<style lang="postcss" scoped>
    @layer components {
        .container__footer {
            @apply w-screen h-auto lg:h-28 flex flex-col justify-center bg-neutral py-3 ;  
        }

        .container__social {
            @apply space-y-2;
        }

        .wrapper__one {
            @apply flex justify-around;
        }
    }
</style>