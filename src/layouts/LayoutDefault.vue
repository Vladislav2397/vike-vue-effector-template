<template>
    <Provider>
        <div class="layout">
            <Sidebar>
                <Logo />
                <Link href="/">Welcome</Link>
                <Link href="/todo">Todo</Link>
                <Link href="/star-wars">Data Fetching</Link>
                <Link href="/hello">Hello</Link>
            </Sidebar>
            <Content><slot /></Content>
        </div>
    </Provider>
</template>

<script lang="ts" setup>
import Content from '@components/Content.vue'
import Link from '@components/Link.vue'
import Logo from '@components/Logo.vue'
import Sidebar from '@components/Sidebar.vue'
import Provider from '@utils/effector/Provider.vue'
</script>

<style>
body {
    margin: 0;
    font-family: sans-serif;
}
* {
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
</style>

<style scoped>
.layout {
    display: flex;
    max-width: 900px;
    margin: auto;
}
.content {
    padding: 20px;
    padding-bottom: 50px;
    min-height: 100vh;
    flex-grow: 1;
}
/* Page Transition Animation */
#page-content {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
}
body.page-is-transitioning #page-content {
    opacity: 0;
}
</style>
