<template>
    <AppHeader @show-modal="showModal = true" />
    <router-view></router-view>
    <div v-if="showModal">
        <!-- <LoginModal @hide-modal="showModal = false" /> -->
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
    methods: {
        addHero() {
            if (this.newHero !== "") {
                this.dcheros2.push({ name: this.newHero });
                this.newHero = "";
            }
        },
        removeHero(index) {
            this.dcheros2 = this.dcheros2.filter((hero, i) => i != index);
        },
    },

    computed: {
        herosNumber() {
            return this.dcheros2.length;
        },
    },

    components: {
        AppHeader,
    },

    data() {
        return {
            showModal: true,
            title: "hii to vue3",
            secondTitle: "<h1>title written with html tag</h1>",
            isVisible: null,
            text: "v-text can be used as a replacement to interpolation syntax",
            heros: ["Supergirl", "Flash", "Arrow", "Batman", "Superman"],
            dcheros: {
                names: ["Supergirl", "Flash", "Arrow", "Batman", "Superman"],
            },
            dcheros2: [
                { name: "Supergirl" },
                { name: "Flash" },
                { name: "Arrow" },
                { name: "Batman" },
                { name: "Superman" },
            ],
            newHero: "",
            isActive: true,
        };
    },
};
</script>