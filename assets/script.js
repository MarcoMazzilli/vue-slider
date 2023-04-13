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
      index : 0
    }
  },

  methods : {
  increaseDecrase (){
    this.index++;

  },
  }
}).mount('#app')
