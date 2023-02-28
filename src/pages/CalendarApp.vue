<template>
    <div class="text-center center w-2/5 mx-auto my-6">
        <h1 class="text-2xl font-bold capitalize">calendar</h1>
        <h2 class="my-2 capitalize font-semibold">
            {{ currentMonth }} - {{ currentYear }}
        </h2>
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
                v-for="num in startDay()"
                :key="num"
                class="text-center"
                style="width: 14.28%"
            ></p>

            <p
                v-for="num in daysInMonth()"
                :key="num"
                class="text-center"
                style="width: 14.28%"
            >
                {{ num }}
            </p>
        </section>
        <section class="my-3 flex flex-row justify-between px-6">
            <button
                class="bg-black text-white py-1 border font-semibold px-3 rounded-md hover:bg-white hover:border hover:border-black hover:text-black"
                @click="prev"
            >
                Prev
            </button>
            <button
                class="bg-black text-white py-1 border font-semibold px-3 rounded-md hover:bg-white hover:border hover:border-black hover:text-black"
                @click="next"
            >
                Next
            </button>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        daysInMonth() {
            const month = this.month;
            return new Date(this.currentYear, month, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.month - 1, 1).getDay();
        },
        next() {
            if (this.currentMonth === 11) {
                this.month = 1
                this.currentYear ++
            } else {
                this.month++;
            }
        },
        prev() {
            if (this.currentMonth === 0) {
                this.month = 11
                this.currentYear --
            } else {
                this.month--;
            }
        },
    },

    computed: {
        currentMonth() {
            return new Date(this.currentYear, this.month).toLocaleString(
                "default",
                {
                    month: "long",
                }
            );
        },
    },

    data() {
        return {
            month: new Date().getMonth() + 1,
            currentYear: new Date().getFullYear(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        };
    },
};
</script>

<style></style>
