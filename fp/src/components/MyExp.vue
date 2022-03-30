<template>
    <div>
        <button @click="addCounter">Пробная кнопка - {{ counter }} </button>
    </div>
</template>

<script>
export default {
    name: "MyExp",
    props: {

    },
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        addCounter(){
            this.counter++;
        }
    }
}
</script>