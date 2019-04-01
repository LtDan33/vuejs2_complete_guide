/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
      counter: 0,
      playerHealth: 99,
      monsterHealth: 99,
      gameIsRunning: false,
      turns: []
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
        this.turns = [];
    },
    attack: function(){
        damage = this.calcDamage(3,10);
        this.monsterHealth -= damage;
        this.turns.unshift({
            isPlayer : true,
            text: 'Player hits monster for ' + damage
        });

        if(this.checkIfGameOver()){
            return;
        }
        this.monsterAttack();
        
    },
    monsterAttack: function(){
        damage = this.calcDamage(4,12);
        this.playerHealth -= damage;

        this.turns.unshift({
            isPlayer : false,
            text: 'Monster hits player for ' + damage
        });

        this.checkIfGameOver();
    },

    calcDamage : function(min, max){
       return Math.max(Math.floor(Math.random() * max) + 1 , min); 
    },

    checkIfGameOver : function(){
        if (this.monsterHealth <= 0){
            if(confirm('You won. New Game?')){
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
        } else if (this.playerHealth <= 0){
            if(confirm('You lost. New Game?')){
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
        }
        return false;
    },

    specialAttack: function(){
        damage = this.calcDamage(10,20);
        this.monsterHealth -= damage;
        this.turns.unshift({
            isPlayer : true,
            text: 'Player hits monster hard for ' + damage
        });

        if(this.checkIfGameOver()){
            return;
        }
        this.monsterAttack();
        
    },

    heal: function(){
        heal;
        console.log(typeof this.playerHelth);
        console.log(this.playerHelth < 50);
        console.log(this.playerHelth > 50);
        console.log(this.playerHelth = 50);
        if(this.playerHelth<=93){
            heal = this.calcDamage(7,10);
            this.playerHealth += heal;
        }
        else{
            heal = "full health";
            this.playerHealth = 100;
        }

        this.turns.unshift({
            isPlayer : true,
            text: 'Player heals for ' + heal
        });

        if(this.checkIfGameOver()){
            return;
        }
        this.monsterAttack();
    },
    giveUp: function(){
        this.gameIsRunning = false;
    }
  }
})