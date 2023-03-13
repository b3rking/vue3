<template>
    <h2 class="text-center text-2xl font-bold capitalize my-4">
        dc heros {{ herosNumber }}
    </h2>
    <div class="flex flex-col-reverse w-1/3 mx-auto items-center">
        <ul v-for="(h, index) in dcheros2" :key="index">
            <div class="my-2">
                {{ h.name }}
                <button
                    @click="removeHero(index)"
                    class="bg-gray-500 text-white rounded-sm py-1 px-3 uppercase">
                    x
                </button>
            </div>
        </ul>
        <form @submit.prevent="addHero" class="mb-6">
            <input
                v-model="newHero"
                placeholder="type your name here"
                class="border-2 border-gray-500 rounded-md py-1 px-3 text-lg" />
            <button
                type="submit"
                class="rounded-md py-2 px-3 ml-1 bg-gray-500 text-white">
                Add hero
            </button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        let newHero = ref("");
        let dcheros2 = ref([
            { name: "Supergirl" },
            { name: "Flash" },
            { name: "Batman" },
            { name: "Arrow" },
            { name: "Superman" },
        ]);

        function addHero() {
            if (newHero.value !== "") {
                dcheros2.value.push({ name: newHero.value });
                newHero.value = "";
            }
        }

        function removeHero(index) {
            dcheros2.value = dcheros2.value.filter((hero, i) => i != index);
        }
        return { dcheros2, newHero, addHero, removeHero };
    },

    computed: {
        herosNumber() {
            return this.dcheros2.length;
        },
    },

    data() {
        return {
            title: "hii to vue3",
            secondTitle: "<h1>title written with html tag</h1>",
            isVisible: null,
            text: "v-text can be used as a replacement to interpolation syntax",
            heros: ["Supergirl", "Flash", "Arrow", "Batman", "Superman"],
            dcheros: {
                names: ["Supergirl", "Flash", "Arrow", "Batman", "Superman"],
            },

            isActive: true,
        };
    },
};
</script>

<style></style>
