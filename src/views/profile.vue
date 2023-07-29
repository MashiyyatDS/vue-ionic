<template>
    <DefaultLayout>
        <template v-slot:content>
            <h1>Profile Page</h1>

            <pre>{{ posts }}</pre>
        </template>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const posts = ref<{ title: string; body: string }[]>([])

onMounted(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    posts.value = response.data
    console.log(response)

    console.log('This is the Profile Page')
})
</script>

<style scoped>
.login-card-container {
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.login-card {
    width: 500px;
    padding: 5px;
}
</style>
