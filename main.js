//this game will have only 1 state
var GameState = {

    //initiate game settings
    init: function() {
        //adapt to screen size, fit all the game
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scalepageAlignHorizontally = true;
        this.scalepageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000;

        this.cursors = this.game.input.keyboard.createCursorKeys();

<<<<<<< HEAD
        this.game.world.setBounds(0,0,360,700);

=======
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        this.RUNNING_SPEED = 180;
        this.JUMPING_SPEED = 550;
    },

    //load the game assets before the game starts
    preload: function() {
        this.load.image('ground', 'images/ground.png');
        this.load.image('platform', 'images/platform.png');
        this.load.image('goal', 'images/gorilla3.png');
        this.load.image('arrowButton', 'images/arrowButton.png');
        this.load.image('actionButton', 'images/actionButton.png');
        this.load.image('barrel', 'images/barrel.png');

        this.load.spritesheet('player', 'images/player_spritesheet.png', 28, 30, 5, 1, 1);
        this.load.spritesheet('fire', 'images/fire_spritesheet.png', 20, 21, 2, 1, 1);
<<<<<<< HEAD

        this.load.text('level', 'assets/data/level.json');
=======
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
    },
    //executed after everything is loaded
    create: function() {

<<<<<<< HEAD
        this.ground = this.add.sprite(0, 638, 'ground');
=======
        this.ground = this.add.sprite(0, 500, 'ground');
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        this.game.physics.arcade.enable(this.ground);
        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;

<<<<<<< HEAD
        //parse the file
        this.levelData = 350N.parse(this.game.cache.getText('level'));

        console.log(this.levelData);
=======
        var platformData = [
            {"x": 0, "y": 430},
            {"x": 45, "y": 560},
            {"x": 90, "y": 290},
            {"x": 0, "y": 140}
        ];
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa

        this.platforms = this.add.group();
        this.platforms.enableBody = true;

<<<<<<< HEAD
        this.levelData.platformData.forEach(function(element){
=======
        platformData.forEach(function(element){
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
            this.platforms.create(element.x, element.y, 'platform');
        }, this);

        this.platforms.setAll('body.immovable', true);
        this.platforms.setAll('body.allowGravity', false);

<<<<<<< HEAD
        //fires
        this.fires = this.add.group();
        this.fires.enableBody = true;

        var fire;
        this.leftData.fireData.forEach(function(element)(
            fire = self.fire.create(element.x, element.y, 'fire');
            fire.animations.add('fire', [0, 1], 4, true);
            fire.play('fire');
        ), this);

        this.fires.setAll('body.allowGravity', false);

        //create player
        this.player = this.add.sprite(this.levelData.playerStart.x, this.levelData.playerStart.y, 'player', 3);
=======
        //create player
        this.player = this.add.sprite(100, 200, 'player', 3);
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        this.player.anchor.setTo(0.5);
        this.player.animations.add('walking', [0, 1, 2, 1], 6, true);
        this.player.customParams = {};
        this.game.physics.arcade.enable(this.player);

<<<<<<< HEAD
        this.game.camera.follow(this.player);

=======
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        this.createOnScreenControls();
    },
    update: function() {
        this.game.physics.arcade.collide(this.player, this.ground, this.landed);
        this.game.physics.arcade.overlap(this.player, this.platform, this.landed);

<<<<<<< HEAD
        this.game.physics.arcade.overlap(this.player, this.fires, this.killPlayer)

        this.game.physics.body.velocity.x = 0;

=======
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        this.player.body.velocity.x = 0;

        if(this.cursors.left.isDown || this.player.customParams.isMovingLeft) {
            this.player.body.velocity.x = -this.RUNNING_SPEED;
<<<<<<< HEAD
            this.player.play('walking');
        }
        else if(this.cursors.right.isDown || this.player.customParams.isMovingRight) {
            this.player.body.velocity.x = this.RUNNING_SPEED;
            this.player.scale.setTo(-1, 1);
            this.plaer.play('walking');
        }
        else {
            this.player.animations.stop();
            this.player.frame = 3;

=======
        }
        else if(this.cursors.right.isDown || this.player.customParams.isMovingRight) {
            this.player.body.velocity.x = this.RUNNING_SPEED;
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        }

        if((this.cursors.up.isDown || this.player.customParams.mustJump) && this.player.body.touching.down) {
            this.player.body.velocity.y = -this.JUMPING_SPEED;
            this.player.customParams.mustJump = false;
        }
    },
    createOnScreenControls: function(){
        this.leftArrow = this.add.button(20, 535, 'arrowButton');
        this.rightArrow = this.add.button(110, 535, 'arrowButton');
        this.actionButton = this.add.button(280, 535, 'actionButton');

        this.leftArrow.alpha = 0.5;
        this.rightArrow.alpha = 0.5;
        this.actionButton.alpha = 0.5;

<<<<<<< HEAD
        this.leftArrow.fixedToCamera = true;
        this.rightArrow.fixedToCamera = true;
        this.actionButton.fixedToCamera = true;

=======
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
        this.actionButton.events.onInputDown.add(function(){
            this.player.customParams.mustJump = true;
        }, this);

        this.actionButton.events.onInputUp.add(function(){
            this.player.customParams.mustJump = false;
        }, this);

        //left
        this.leftArrow.events.onInputDown.add(function(){
            this.player.customParams.isMovingLeft = true;
        }, this);

        this.leftArrow.events.onInputUp.add(function(){
            this.player.customParams.isMovingLeft = false;
        }, this);

        this.leftArrow.events.onInputOver.add(function(){
            this.player.customParams.isMovingLeft = true;
        }, this);

        this.leftArrow.events.onInputOut.add(function(){
            this.player.customParams.isMovingLeft = false;
        }, this);

        //right
        this.rightArrow.events.onInputDown.add(function(){
            this.player.customParams.isMovingRight = true;
        }, this);

        this.rightArrow.events.onInputUp.add(function(){
            this.player.customParams.isMovingRight = false;
        }, this);

        this.rightArrow.events.onInputOver.add(function(){
            this.player.customParams.isMovingRight = true;
        }, this);

        this.rightArrow.events.onInputOut.add(function(){
            this.player.customParams.isMovingRight = false;
        }, this);
<<<<<<< HEAD
    },
    killPlayer: function(player, fire) {
        console.log('auch!');
        game.state.start('GameState');
=======
>>>>>>> 75aa060754f6e7ebe32febf2b8604dc085b9cefa
    }


};

//initiate the Phaser framework
var game = new Phaser.Game(360, 592, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');