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
                    class="bg-gray-500 text-white rounded-sm py-1 px-3 uppercase"
                >
                    x
                </button>
            </div>
        </ul>
        <form @submit.prevent="addHero" class="mb-6">
            <input
                v-model="newHero"
                placeholder="type your name here"
                class="border-2 border-gray-500 rounded-md py-1 px-3 text-lg"
            />
            <button
                type="submit"
                class="rounded-md py-2 px-3 ml-1 bg-gray-500 text-white"
            >
                Add hero
            </button>
        </form>
    </div>
</template>

<script>
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

<style></style>
