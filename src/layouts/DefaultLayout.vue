<template>
    <v-toolbar title="Minsystem" color="blue-darken-1" />
    <slot name="content" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
