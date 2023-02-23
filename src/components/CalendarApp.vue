<template>
    <div class="text-center center w-2/5 mx-auto my-6">
        <h1 class="text-2xl font-bold capitalize">calendar</h1>
    
        <section class="flex flex-row items-center justify-between my-3">
            <p v-for="day in days" :key="day" class="w-10 h-10">{{  day }}</p>
        </section>
        <section class="flex">
            <p v-for="num in 30" :key="num" class="text-center p-4">{{  num }}</p>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    }
};
</script>

<style></style>
