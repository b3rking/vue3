<template>
    <div
        @click="$emit('hide-modal')"
        class="absolute top-0 left-0 h-screen w-screen z-2"
        style="background-color: rgba(0, 0, 0, 0.7)"></div>
    <div class="absolute bg-white flex w-1/3 top-2 left-56 translate-x-1/2 translate-y-1/2 my-40 rounded-md p-3 ">
        <div class="text-xl text-center font-semibold w-full">
            <h1 class="text-center capitalize">login</h1>
            <hr class="my-3" />
            <form @submit.prevent="submit">
                <div class="m-3">
                    <input
                        class="border-2 border-gray-600 rounded-md py-2 px-4"
                        v-model="form.email"
                        type="text"
                        placeholder="email" />
                </div>
                <div class="m-3">
                    <input
                        class="border-2 border-gray-600 rounded-md py-2 px-4"
                        v-model="form.password"
                        type="password"
                        placeholder="password" />
                </div>
                <button
                    type="submit"
                    class="bg-slate-900 py-2 px-5 rounded-md text-white">
                    Sign In
                </button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        submit() {
            console.log(this.form);
        },
    },
};
</script>
<style></style>
