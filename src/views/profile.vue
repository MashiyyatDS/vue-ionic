<template>
    <DefaultLayout>
        <template v-slot:content>
            <div class="pa-3">
                <div v-if="loading">
                    <div class="d-flex justify-center">
                        <v-progress-circular :size="100" color="blue-darken-1" indeterminate class="align-self-center"></v-progress-circular>
                    </div>
                </div>

                <ProductCard v-for="(product, productIndex) in products" :key="productIndex" :product="product" />
            </div>
        </template>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useQuery } from '@vue/apollo-composable'
import { watch, toRaw } from 'vue'
import { productsPaginate } from '@/graphql/Product'
import ProductCard from '@/components/product/ProductCard.vue'
import { ref } from 'vue'

const products = ref([])

const { result, loading } = useQuery(productsPaginate, {
    first: 25,
    page: 1,
})

watch(
    result,
    (data) => {
        if (data) {
            console.log(toRaw(data))

            products.value = data.productsPaginate.data
        }
    },
    {
        immediate: true,
    }
)
</script>
