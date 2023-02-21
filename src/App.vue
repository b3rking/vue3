<template>
    <!-- this is used to print out simple text -->
    <!-- <h1 v-if="isVisible">{{ title }}</h1> -->
    <!-- v-else-if -->
    <!-- <h1 v-else-if="isVisible === null">v-else-if {{ title }}</h1> -->
    <!-- using v-else -->
    <!-- <h1 v-else>if not visible try : {{ title }}</h1> -->
    <!-- this is used to print html -->
    <!-- <em v-html="secondTitle"></em> -->
    <!-- v-text -->
    <!-- <h1 v-text="text"></h1> -->
    <!-- v-for -->
    <!-- <hr />
    <h1>Dc heros</h1>
    <em>for arrays</em>
    <ul>
        <li v-for="hero in heros" v-bind:key="hero">{{ hero }}</li>
    </ul> -->
    <!-- <em>for object</em>
    <ul>
        <li v-for="h in dcheros.names" v-bind:key="h">{{ h }}</li>
    </ul>
    <em>showing key and value</em>
    <ul>
        <li v-for="obj in dcheros2" v-bind:key="obj">
            {{ obj }} - {{ obj.name }}
        </li>
    </ul>
    <ul>
        <li v-for="val in dcheros2" v-bind:key="val">
            <ol v-for="(values, key) in val" v-bind:key="key">
                <li>{{ key }}</li>
            </ol>
        </li>
    </ul> -->
    <!-- <hr />
    <h1>v-bind</h1> -->
    <!-- <small>you can remove v-bind and use : </small>
    <input v-bind:value="newHero" />
    <button :disabled="isActive">Add hero</button> -->
    <!-- <button v-bind:disabled="isActive">Add hero</button> -->
    <!-- <hr />
    <h1>v-model</h1> -->
    <!-- <input v-model.lazy="newHero" />
    <button>Add hero</button> -->
    <!-- <hr />
    <h1>v-on</h1> -->
    <!-- <form @submit.prevent="newHero = 'b3rkg'">
        <input v-model="newHero" />
        <button type="submit">Add hero</button>
    </form>
    <p>can be replaced by @ => v-on:click = @click</p> -->
    <!-- <hr />
    <h1>methods</h1> -->
    <!-- <ul v-for="h in dcheros2" :key="h">
        <li>{{ h.name }}</li>
    </ul>
    <form @submit.prevent="addHero">
        <input v-model="newHero" placeholder="type your name here" />
        <button type="submit">Add hero</button>
    </form> -->
    <!-- <hr />
    <h1>computed propreties</h1> -->

    <h2 class="text-center text-2xl font-bold capitalize my-4">
        dc heros {{ herosNumber }}
    </h2>
    <div class="flex flex-col-reverse w-1/3 mx-auto items-center">
        <ul v-for="(h, index) in dcheros2" :key="index">
            <div class="my-2">
                {{ h.name }} <button @click="removeHero(index)" class="bg-gray-500 text-white rounded-sm py-1 px-3 uppercase">x</button>
            </div>
        </ul>
        <form @submit.prevent="addHero" class="mb-6">
            <input v-model="newHero" placeholder="type your name here" class="border-2 border-gray-500 rounded-md py-1 px-3 text-lg"/>
            <button type="submit" class="rounded-md py-2 px-3 ml-1 bg-gray-500 text-white">Add hero</button>
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
