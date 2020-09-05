<template>
    <Layout>
        <div >
            <h1>{{ $page.event.title }}</h1>
            <img class="thumb" :src="`http://localhost:1337${$page.event.image}`" alt=""/>
            <p>{{$page.event.description}}</p>
        </div>
    </Layout>
</template>

<page-query>
    query {
        event(id:"4"){
            id
            title
            description
            duration
            price
            date
            image
        }
    }
</page-query>

<script>
export default {
    metaInfo () {
        return {
            title: this.$page.event.title
        }
    }
}
</script>

<style scoped>

    .thumb {
        border-radius: 10px;
        transition: all ease-in-out .25s;
    }

    .thumb:hover{
        /* transform: translateY(-4px); */
    }
</style>