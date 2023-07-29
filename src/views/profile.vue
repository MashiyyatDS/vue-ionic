<template>
    <DefaultLayout>
        <template v-slot:content>
            <div class="pa-1">
                <v-btn density="compact" color="blue-darken-1">Sample</v-btn>
            </div>

            <div class="pa-3">
                <div v-if="loading">
                    <ion-card v-for="loader in 10" :key="loader">
                        <ion-list class="ion-padding">
                            <p>
                                <ion-skeleton-text :animated="true" style="width: 80px"></ion-skeleton-text>
                            </p>
                            <p>
                                <ion-skeleton-text :animated="true" style="width: 100%" v-for="skeleton in 5" :key="skeleton" />
                            </p>
                        </ion-list>
                    </ion-card>
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
import { IonCard, IonList, IonSkeletonText } from '@ionic/vue'

const products = ref([])

const { result, loading } = useQuery(productsPaginate, {
    first: 5,
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
