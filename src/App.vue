<template>
    <!-- this is used to print out simple text -->
    <h1>{{ title }}</h1>
    <!-- this is used to print html -->
    <em v-html="secondTitle"></em>
</template>

<script>
export default {
    data() {
        return {
            title: "hii to vue3",
            secondTitle: "<h1>title written with html tag</h1>",
        };
    },
};
</script>
