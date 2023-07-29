<template>
    <div>
        <ion-menu content-id="main-content" side="end">
            <ion-content>
                <ion-list lines="none">
                    <ion-item>
                        <ion-label router-link="/profile">Profile</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label router-link="/settings">Settings</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-page id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="end">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
        </ion-page>
    </div>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/vue'
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
