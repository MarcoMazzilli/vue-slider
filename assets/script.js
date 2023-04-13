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
      index : 0,
      showButton : true,
    }
  },

  methods: {

  increaseDecrase(condition){

    condition ? this.index++ : this.index--
    
    if (this.index === this.imageList.length) this.index = 0
    if (this.index < 0) this.index = this.imageList.length -1
  },

  }
}).mount('body')
