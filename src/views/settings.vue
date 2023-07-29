<template>
    <DefaultLayout>
        <template v-slot:content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid natus voluptatibus, ex possimus aperiam iusto vero ipsam tempora!
            Molestiae cumque voluptatum quibusdam itaque enim, minus in reprehenderit. Ipsa, minus.
        </template>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
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
