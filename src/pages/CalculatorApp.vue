<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl capitalize text-center">calculator</h1>
            <p
                class="text-2xl text-right mt-10 mb-4 overflow-x-scroll w-44 h-14"
                style="direction: rtl"
            >
                {{ currentNumber }}
            </p>
            <div class="grid grid-cols-4 gap-1">
                <button
                    @click="pressed(1)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    1
                </button>
                <button
                    @click="pressed(2)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    2
                </button>
                <button
                    @click="pressed(3)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    3
                </button>
                <button
                    @click="pressed('+')"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    +
                </button>
                <button
                    @click="pressed(4)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    4
                </button>
                <button
                    @click="pressed(5)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    5
                </button>
                <button
                    @click="pressed(6)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    6
                </button>
                <button
                    @click="pressed('-')"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    -
                </button>
                <button
                    @click="pressed(7)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    7
                </button>
                <button
                    @click="pressed(8)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    8
                </button>
                <button
                    @click="pressed(9)"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    9
                </button>
                <button
                    @click="pressed('*')"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    x
                </button>
                <button
                    @click="pressed(0)"
                    class="text-xl p-2 h-4border rounded shadow w-10"
                >
                    0
                </button>
                <button
                    @click="pressed('clear')"
                    class="text-xl p-2 h-4border rounded shadow w-10"
                >
                    c
                </button>
                <button
                    @click="pressed('=')"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    =
                </button>
                <button
                    @click="pressed('/')"
                    class="text-xl p-2 w-10 h-4border rounded shadow"
                >
                    /
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        const currentNumber = ref("");
        const prevNumber = ref("");
        const selectedOperation = ref("");
        const operations = ["+", "-", "*", "/"];

        function calculate() {
            switch (selectedOperation.value) {
                case "-":
                    currentNumber.value =
                        parseInt(prevNumber.value) - parseInt(currentNumber.value);
                    break;
                case "*":
                    currentNumber.value =
                        parseInt(prevNumber.value) * parseInt(currentNumber.value);
                    break;
                case "+":
                    currentNumber.value =
                        parseInt(prevNumber.value) + parseInt(currentNumber.value);
                    break;
                case "/":
                    currentNumber.value =
                        parseInt(prevNumber.value) / parseInt(currentNumber.value);
                    break;

                default:
                    break;
            }
        }

        function applyOperation(value) {
            prevNumber.value = currentNumber.value;
            currentNumber.value = "";
            selectedOperation.value = value;
            console.log("previous number : " + prevNumber.value);
            console.log("operation : " + selectedOperation.value);
        }

        function clear() {
            currentNumber.value = "";
        }

        function appendNumber(value) {
            return (currentNumber.value += value);
        }

        function pressed(value) {
            if (value === "=") calculate();
            else if (operations.includes(value)) applyOperation(value);
            else if (value === "clear") clear();
            else appendNumber(value);
        }

        return { currentNumber, pressed };
    },
};
</script>
<style></style>
