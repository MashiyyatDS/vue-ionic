<template>
    <div class="login-card-container">
        <ion-card class="login-card">
            <h4 class="ion-text-center ion-margin-bottom">Login</h4>

            <div class="ion-padding">
                <ion-input
                    label="Email"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Enter your email here..."
                    :clear-input="true"
                    class="ion-margin-bottom" />

                <ion-input
                    label="Password"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Enter your password here..."
                    :clear-input="true"
                    class="ion-margin-bottom" />

                <ion-button expand="block" class="ion-margin-bottom" shape="round" @click="login()">Login</ion-button>

                <div class="ion-text-center ion-margin-top">
                    <a href="#">Signup to your Account</a>
                </div>
            </div>
        </ion-card>
    </div>
</template>

<script setup lang="ts">
import { IonCard, IonButton, IonInput } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
    router.push('/profile')
}
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
