<template>
    <div
        class="absolute top-0 left-0 h-screen w-screen z-2"
        style="background-color: rgba(0, 0, 0, 0.7)"
        @click="$emit('hide-modal')"
    >
        <div class="bg-white flex m-auto w-1/3 my-40 rounded-md p-3">
            <div class="">login</div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style></style>
