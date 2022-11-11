let game = {

    lockmode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id) {
        let card = this.cards.filter(card => card.id === id)[0];
        console.log(card);

        if(card.flipped || this.lockmode){
            return false;
        }
        
        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockmode = true;
            return true;
        }
    },

    checkMatch:function(){
        if(!this.firstCard || !this.secondCard){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
        
    },

    checkGameOver(){
        return this.cards.filter(card=>!card.flipped).length == 0;
    },

    clearCards: function(){
        console.log("-----------------------------");
        console.log(this.firstCard);
        console.log(this.secondCard);        
        console.log(this.lockmode);        
        console.log("-----------------------------");
        this.firstCard = null;
        this.secondCard = null;
        this.lockmode = false;

    },

    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
        ],

        cards: null,

        createCardsFromTechs:function() {
            this.cards =[];
            
            this.techs.forEach((tech) => {
                this.cards.push(this.createPairFromTechs(tech));
            })
            this.cards =  this.cards.flatMap(pair => pair);
            this.shuffleCards();
            return this.cards;
        },
        
        createPairFromTechs:function(tech) {
            return [{
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },{
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            }]
        },
        
        createIdWithTech:function(tech) {
            return tech + parseInt(Math.random()*1000);
        },

         shuffleCards:function(cards) {
        
            let currentIndex = this.cards.length;
            let randomIndex = 0;
    
            while(currentIndex !==0){
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [this.cards[randomIndex],this.cards[currentIndex]] = [this.cards[currentIndex],this.cards[randomIndex]];
            }
        },        
        
    
}
