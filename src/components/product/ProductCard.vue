<template>
    <v-card class="mb-1" theme="dark">
        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-text>{{ product.description }}</v-card-text>

        <v-divider />

        <v-card-actions>
            <v-btn density="compact" color="blue-darken-1" variant="flat">View product</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { PropType, toRaw } from 'vue'

type ProductType = {
    id: number
    name: string
    description: string
    item_code: string
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
