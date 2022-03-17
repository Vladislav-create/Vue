<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <hr>
    <button @click = "doThat">Счелкни</button>
    <hr>

    <div class="display">
      <input v-model.number ="operand1">
      <input v-model.number ="operand2">
      = {{ result }}
    </div>

    <div class="keyboard">
      <button @click="result = operand1 + operand2" >+</button>
      <button @click="result = operand1 - operand2">-</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="multiply(operand1, operand2)">*</button>
      <button @click="degree(operand1, operand2)">**</button>
      <button @click="integer(operand1, operand2)">//</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message: 'Hello Vue',
      operand1: 0,
      operand2: 0,
      result: 0,
    }
  },
  methods: {
    doThat(){
      console.log('счелк')
    },
    divide (op1, op2){
      this.result = op1 / op2
    },
    multiply (op1, op2) {
      this.result = op1 * op2
    },
    degree (op1, op2) {
      this.result = Math.pow(op1, op2)
      if(this.result < 0){
        this.result = this.result * -1
      }
    },
    integer (op1, op2) {
      if(op1/op2 >= 0){
        this.result = Math.floor(op1/op2)
        if(this.result < 0){
        this.result = this.result * -1
      }
      } else {
        this.result = Math.ceil(op1/op2)
        if(this.result < 0){
        this.result = this.result * -1
      }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
