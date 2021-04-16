console.log("halo");

Vue.component('bagian-input', {
  data: () => {
    return {
      input: ''
    }
  },
  template: `<div style="border: 1px solid blue;">
    <input type="number" v-model="input" placeholder="isi nomor apa aja"/>
    <p>{{input}}</p>
    <bagian-btn v-bind:name="input"></bagian-btn>
    </div>`
})

Vue.component('bagian-btn', {
  data: () => {
    return {
      val: ''
    }
  },
  template: `
  <div style="border: 1px solid red">
    <button @click="incrementVal">Tambah berdasarkan nilai input</button>
    <p>{{val}}</p>
  </div>
  `,
  props: ['name'],
  methods: {
    incrementVal() {
      this.val = this.name;
      let num = this.val
      parseInt(num) += 1;


    }
  }
})

var vm = new Vue({
  el: '#example',
  data: {
    halo: "okeeee",
    num: 6,
  },
})