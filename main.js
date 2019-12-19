//this game will have only 1 state
var GameState = {

    //initiate game settings
    init: function() {
        //adapt to screen size, fit all the game
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scalepageAlignHorizontally = true;
        this.scalepageAlignVertically = true;
    },

    //load the game assets before the game starts
    preload: function() {
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('goal', 'assets/images/gorilla3.png');
        this.load.image('arrowButton', 'assets/images/arrowButton.png');
        this.load.image('actionButton', 'assets/images/actionButton.png');
        this.load.image('barrel', 'assets/images/barrel.png');
    }
}