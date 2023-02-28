<template>
    <select>
        <option v-for="sign in signs" :value="sign.name" :key="sign.value">
            {{ sign.name }} {{ sign.value }}
        </option>
    </select>
</template>
<script>
export default {
    data() {
        return {
            signs: [
                { name: "addition", value: "+" },
                { name: "soustraction", value: "-" },
                { name: "multiplication", value: "*" },
                { name: "division", value: "/" },
            ],
        };
    },
};
</script>
<style></style>
