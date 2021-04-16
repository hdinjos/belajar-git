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
    <bagian-btn></bagian-btn>
    </div>`
})

Vue.component('bagian-btn', {
  template: `
  <div style="border: 1px solid red">
    <button>Tambah 2</button>
    <button>Kurang 3</button>
  </div>
  `
})

var vm = new Vue({
  el: '#example',
  data: {
    halo: "okeeee",
    num: 6,
  },
})