const {createApp} = Vue;

createApp({
  
  data(){
    return{
      message : "ciaone",
      imageList : [
        'assets/img/01.webp',
        'assets/img/02.webp',
        'assets/img/03.webp',
        'assets/img/04.webp',
        'assets/img/05.webp',
      ],
      counter : 0,
      rimuoviOpacity : "show",
      mantieniOpacity : null,
      flag : false,
    }
  },

  methods: {

  increaseDecrase(condition){

    condition ? this.counter++ : this.counter--

    if (this.counter === this.imageList.length) this.counter = 0;
    if (this.counter < 0) this.counter = this.imageList.length -1;
  },

  log(){
    console.log(event)
  },

  mouseOver(){
  }
  }
}).mount('body')
