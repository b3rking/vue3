<template>
    <div class="">
        <input type="number" class="border-2 border-gray-600" v-model="inputNumber" @keyup="$emit('inputNumber', inputNumber)"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputNumber: ""
        }
    }
}
</script>