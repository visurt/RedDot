var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/player.png' );
        this.directionX = 0;
        this.directionY = 0;

    },

    update: function( dt ) {

        var pos = this.getPosition();

        if(pos.x < screenWidth && pos.y < screenHeight){
            this.setPosition( new cc.Point( pos.x + this.directionX, pos.y + this.directionY) );
        }

    },
    
    moveUp: function(){
        this.directionY = 5;
    },
    moveRight: function(){
        this.directionX = 5;
    },
    moveLeft: function(){
        this.directionX = -5;
    },
    moveDown: function(){
        this.directionY = -5;
        
    },

    STOP: function(){
        this.directionX = 0;
        this.directionY = 0;
    }


});