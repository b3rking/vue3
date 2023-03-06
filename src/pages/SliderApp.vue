<template>
    <div class="flex flex-wrap w-full">
        <div
            class="absolute w-full"
            v-for="(slider, index) in sliders"
            :key="slider"
        >
            <div
                v-if="currentSlide == index"
                style="height: 350px"
                :class="slider"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentSlide: 0,
            interval: "",
            sliders: [
                "bg-teal-600",
                "bg-blue-600",
                "bg-yellow-600",
                "bg-green-600",
            ],
        };
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide == 3
                ? (this.currentSlide = 0)
                : this.currentSlide++;
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
};
</script>
<style></style>
