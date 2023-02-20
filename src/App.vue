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
    
</template>

<script>
export default {
    data() {
        return {
            title: "hii to vue3",
            secondTitle: "<h1>title written with html tag</h1>",
            isVisible: null,
            text: "v-text can be used as a replacement to interpolation syntax"
        };
    },
};
</script>
