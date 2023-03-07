<template>
    <div class="flex flex-wrap w-full relative">
        <div class="absolute w-full" v-for="(slider, index) in sliders" :key="slider">
            <transition name="fade">
                <div
                    v-if="currentSlide == index"
                    style="height: 350px"
                    :class="slider"
                ></div>
            </transition>
        </div>
        <div class="absolute my-10 top-96">
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
        }, 3000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 3s ease-in;
}

.fade-enter-from {
    opacity: 1;
    transform: translateX(-100%);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
