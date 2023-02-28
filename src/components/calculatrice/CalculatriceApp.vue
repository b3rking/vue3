<template>
    <div class="w-2/5 flex flex-col mx-auto text-center">
        <h1 class="text-xl text-center">calculatrice</h1>
        <InputComponent @inputNumber="getNumber1" />
        {{ number1 }}
        <SignComponent />
        <InputComponent @inputNumber="getNumber2"/>
        <ResultComponent />
    </div>
</template>
<script>
import InputComponent from "./InputComponent.vue";
import SignComponent from "./SignComponent.vue";
import ResultComponent from "./ResultComponent.vue";

export default {
    data() {
        return {
            number1: 0,
            number2: 0,
        };
    },
    methods: {
        getNumber1(c) {
            this.number1 = c
        }
    },
    components: {
        InputComponent,
        SignComponent,
        ResultComponent,
    },
};
</script>
<style></style>