<template>
    <div>
        <Home />
        <SectionHistoria />
        <!-- <SectionComentarios /> -->
        <SectionForm />
    </div>
</template>
<script>
import Home from '@/components/Home'
// import SectionComentarios from '@/components/SectionComentarios'
import SectionHistoria from '@/components/SectionHistoria'
import SectionForm from '@/components/SectionForm'

export default {
    name: "Index",
    components: {
        Home,
        // SectionComentarios,
        SectionHistoria,
        SectionForm
    }
}
</script>