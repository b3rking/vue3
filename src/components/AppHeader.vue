<template>
    <nav
        class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 text-xl"
    >
        <router-link class="mx-2" v-for="url in urls" :key="url" :to="url.to">{{
            url.title
        }}</router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            urls: [
                { title: "Dc heros", to: "dc-heros" },
                { title: "Calendar", to: "calendar" },
                { title: "calculatrice", to: "calculatrice" },
                { title: "Markdown", to: "Markdown" },
            ],
        };
    },
};
</script>

<style></style>
