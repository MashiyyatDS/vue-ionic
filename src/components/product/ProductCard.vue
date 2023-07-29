<template>
    <v-card class="mb-2" theme="dark" link @click="viewProduct" :disabled="product.status !== 'Active'">
        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-subtitle>{{ product.item_code }}</v-card-subtitle>

        <v-card-text>{{ product.description }}</v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { PropType, toRaw } from 'vue'

type ProductType = {
    id: number
    name: string
    description: string
    item_code: string
    status: string
}

const props = defineProps({
    product: {
        type: Object as PropType<ProductType>,
        default: () => ({}),
    },
})

function viewProduct() {
    console.log(toRaw(props.product))
}
</script>
