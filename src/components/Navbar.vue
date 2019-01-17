<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
    </div>

    <div class="navbar-menu">
            <div class="navbar-start">
                <a v-for="link in links" :key="link.title" class="navbar-item" @click="$router.push(link.url)">
                    {{link.title}}
                </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Made with love</strong>
                </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    props:['links'],
    created(){
        console.log(this.links)
    }
}   

</script>
<style scoped>
a.navbar-item {
    text-transform:capitalize;
    }
</style>
