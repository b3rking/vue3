<template>
    <div class="text-center center w-2/5 mx-auto my-6">
        <h1 class="text-2xl font-bold capitalize">calendar</h1>
        <h2 class="my-2 capitalize font-semibold">{{ currentMonth }}</h2>
        <section class="flex flex-row items-center justify-between my-3 mt-6">
            <p
                v-for="day in days"
                :key="day"
                class="font-bold"
                style="width: 14.28%"
            >
                {{ day }}
            </p>
        </section>
        <section class="flex flex-wrap">
            <p
                v-for="num in 30"
                :key="num"
                class="text-center"
                style="width: 14.28%"
            >
                {{ num }}
            </p>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMonth: new Date().toLocaleString(
                "default",
                { month: "long" }
            ),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        };
    },
};
</script>

<style></style>
