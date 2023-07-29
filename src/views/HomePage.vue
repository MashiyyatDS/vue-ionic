<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>Blank</ion-title>
        </ion-toolbar>
    </ion-header>

    <!-- <ion-card v-for="(post, postIndex) in posts" :key="postIndex">
            <ion-card-header>
                <ion-card-title>{{ post.title }}</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content> Here's a small text description for the card content. Nothing more, nothing less. </ion-card-content>
        </ion-card> -->

    <ion-card>
        <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> Here's a small text description for the card content. Nothing more, nothing less. </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const posts = ref<{ title: string; body: string }[]>([])

onMounted(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    posts.value = response.data
    console.log(response)
})
</script>

<style scoped>
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}
</style>
