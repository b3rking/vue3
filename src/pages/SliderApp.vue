<template>
    <div class="flex flex-wrap w-full">
        <div class="w-full" v-for="(slider, index) in sliders" :key="slider">
            <transition name="fade">
                <div
                    v-if="currentSlide == index"
                    style="height: 350px"
                    :class="slider"
                ></div>
            </transition>
        </div>
        <div class="my-10">
            <transition name="fade">
                <h1 class="text-center" v-if="isTitleShowing">Slider</h1>
            </transition>
            <button
                class="p-2 rounded-md bg-gray-500 text-white ml-2"
                @click="isTitleShowing = !isTitleShowing"
            >
                Toggle text
            </button>
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
            isTitleShowing: false,
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
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
