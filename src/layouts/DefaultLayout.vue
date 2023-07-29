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

        <div id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="end">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>

            <slot name="content" />
        </div>

        <!-- <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/profile">
                    <ion-icon :icon="personOutline" />
                    <ion-label>Profile</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="radio" href="/settings">
                    <ion-icon :icon="cogOutline" />
                    <ion-label>Settings</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs> -->
    </div>
</template>

<script setup lang="ts">
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
} from '@ionic/vue'

import { personOutline, cogOutline } from 'ionicons/icons'
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
