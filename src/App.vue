<template>
    <!-- this is used to print out simple text -->
    <h1 v-if="isVisible">{{ title }}</h1>
    <!-- v-else-if -->
    <h1 v-else-if="isVisible === null">v-else-if {{ title }}</h1>
    <!-- using v-else -->
    <h1 v-else>if not visible try : {{ title }}</h1>
    <!-- this is used to print html -->
    <em v-html="secondTitle"></em>
    <!-- v-text -->
    <h1 v-text="text"></h1>
    <!-- v-for -->
    <hr />
    <h1>Dc heros</h1>
    <em>for arrays</em>
    <ul>
        <li v-for="hero in heros" v-bind:key="hero">{{ hero }}</li>
    </ul>
    <em>for object</em>
    <ul>
        <li v-for="h in dcheros.names" v-bind:key="h">{{ h }}</li>
    </ul>
    <em>showing key and value</em>
    <ul>
        <li v-for="obj in dcheros2" v-bind:key="obj">{{ obj }} - {{ obj.name }}</li>
    </ul>
    <ul>
        <li v-for="val in dcheros2" v-bind:key="val">
            <ol v-for="(values, key) in val" v-bind:key="key">
                <li>{{ key }}</li>
            </ol>
        </li>
    </ul>
</template>

<script>
export default {
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
                {name: "Supergirl"},
                {name: "Flash"},
                {name: "Arrow"},
                {name: "Batman"},
                {name: "Superman"},
            ],
        };
    },
};
</script>
