<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <hr />

    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" />
      = {{ result }}
    </div>

    <div class="keyboard">
      <button
        v-for="operand in operands"
        :key="operand"
        :title="operand"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>

    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div>

    <div v-show="checked">
      <button v-for="btn in btns" :key="btn" @click="pushBtn(btn)">
        {{ btn }}
      </button>
      <button @click="sliceOperand()">&#10229;</button>
    </div>

    <div>
      
        <input
          type="radio"
          id="one"
          name="operand"
          v-model="picked"
          value="operand1"
        />
        <label for="one">Операнд 1</label>

        <input
          type="radio"
          id="two"
          name="operand"
          v-model="picked"
          value="operand2"
        />
        <label for="two">Операнд 2</label>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Hello Vue",
      operands: ["+", "-", "*", "/", "**", "//"],
      btns: [0, "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      operand1: "",
      operand2: "",
      result: 0,
      checked: "",
      picked:''
    };
  },
  methods: {
    sliceOperand(){
      if(this.picked === 'operand1'){
        this.operand1 = Number(String(this.operand1).slice(0,-1))
      }else if(this.picked === 'operand2'){
        this.operand2 = Number(String(this.operand2).slice(0,-1))
      }
    },
    pushBtn(btn) {
      if(this.picked === 'operand1'){
        this.operand1 = +(this.operand1 + btn)
      }else if(this.picked === 'operand2'){
        this.operand2 = +(this.operand2 + btn)
      }
       
    },
    doThat() {
      console.log("счелк");
    },
    calculate(operand) {
      switch (operand) {
        case "+":
          this.summ();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.degree();
          break;
        case "//":
          this.integer();
          break;
      }
    },
    summ() {
      this.result = this.operand1 + this.operand2;
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    degree() {
      this.result = Math.pow(this.operand1, this.operand2);
      if (this.result < 0) {
        this.result = this.result * -1;
      }
    },
    integer() {
      if (this.operand1 / this.operand2 >= 0) {
        this.result = Math.floor(this.operand1 / this.operand2);
        if (this.result < 0) {
          this.result = this.result * -1;
        }
      } else {
        this.result = Math.ceil(this.operand1 / this.operand2);
        if (this.result < 0) {
          this.result = this.result * -1;
        }
      }
    },
  },
};
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
