<template>
    <div class="text-center center w-2/5 mx-auto my-6">
        <h1 class="text-2xl font-bold capitalize">calendar</h1>
        <h2 class="my-2 capitalize font-semibold">{{ currentMonth }} - {{ currentYear }}</h2>
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
                v-for="num in daysInMonth()"
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
    methods: {
        daysInMonth() {
            const month = new Date().getMonth() + 1
            return new Date(this.currentYear, month, 0).getDate()
        }
    },
    data() {
        return {
            currentMonth: new Date().toLocaleString(
                "default",
                { month: "long" }
            ),
            currentYear: new Date().getFullYear(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        };
    },
};
</script>

<style></style>
