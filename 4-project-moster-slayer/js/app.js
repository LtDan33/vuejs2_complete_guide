/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
      counter: 0,
      playerHealth: 99,
      monsterHealth: 99,
      gameIsRunning: false,
      turns:0
  },
  computed:{
      output: function() {
          return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
      }
  },

  methods:{
    startGame: function(){
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
    },
    attack: function(){
        this.monsterHealth -= this.calcDamage(3,10);
        this.checkIfWon();
        this.monsterAttack();
    },

    calcDamage : function(min, max){
       return Math.max(Math.floor(Math.random() * max) + 1 , min); 
    },

    checkIfWon : function(){
        if (this.monsterHealth <= 0){
            if(confirm('You won. New Game?')){
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
        } else if (this.playerHealth <= 0){
            if(confirm('You lost. New Game?')){
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
        }
    },

    specialAttack: function(){
        this.monsterHealth -= this.calcDamage(10,20);
        this.checkIfWon();
        this.monsterAttack();
        
    },
    monsterAttack: function(){
        this.playerHealth -= this.calcDamage(4,12);
        this.checkIfWon();
    },
    heal: function(){
        this.playerHealth += this.calcDamage(3,10);
        this.checkIfWon();
        this.monsterAttack();
    },
    giveUp: function(){
        
    }
  }
})