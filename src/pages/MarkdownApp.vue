<template>
    <div class="text-center">
        <h1 class="my-2 text-xl font-semibold">Markdown</h1>
    </div>
    <section class="flex w-full h-screen px-20">
        <article class="w-1/2 border">
            <textarea class="w-full h-screen" v-model="text"></textarea>
        </article>
        <article class="w-1/2 border bg-gray-100">{{ markedText }}</article>
    </section>
</template>
<script>
import { marked } from 'marked';
export default {
    data() {
        return {
            text: "",
        };
    },
    computed: {
        markedText() {
            return marked(this.text)
        }
    }
};
</script>
<style></style>
