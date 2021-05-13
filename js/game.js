
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0,
        waveCount: 0
    },


    // Run on page load.
    "onload" : function () {

        // Initialize the video.
        if (!me.video.init(960, 640, {parent : "screen", scale : "auto", scaleMethod : "flex"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
         me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {

        game.texture = new me.video.renderer.Texture(
            me.loader.getJSON("texture"),
            me.loader.getImage("texture"),
            me.loader.getJSON("texture_2"),
            me.loader.getImage("texture_2")
        );
        game.texture_2 = new me.video.renderer.Texture(
            me.loader.getJSON("texture_2"),
            me.loader.getImage("texture_2")
        );
        game.enemy = new me.video.renderer.Texture(
            me.loader.getJSON("enemy"),
            me.loader.getImage("enemy")
        );


        //Setting up the entity pool
        me.pool.register("player",game.Player);
        me.pool.register("enemy",game.Enemy);
        me.pool.register("laser", game.Laser);


            // Setting the menu screen
         this.playScreen = new game.PlayScreen();
         this.menuScreen = new game.MenuScreen();
         this.gameOverScreen = new game.GameOverScreen();

         me.state.set(me.state.PLAY, this.playScreen);
         me.state.set(me.state.MENU,this.menuScreen);
         me.state.set(me.state.GAME_OVER,this.gameOverScreen);

         // goto menu
         me.state.change(me.state.MENU);
    }
};
