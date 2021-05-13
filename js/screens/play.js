game.PlayScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    checkIfLoss : function (y) {
        this.y = this.player.pos.y;
        if (y >= this.y) {
            me.state.change(me.state.GAME_OVER);
        }
    },

    onResetEvent : function () {

           // viewport width and height
           var w = me.game.viewport.width;
           var h = me.game.viewport.height;

        var playingBackground = new me.Sprite(0,0,{
            image: game.texture_2,
            region: "play",
            repeat: "repeat-x"
        });

        me.game.world.addChild(playingBackground,1);
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);
        this.player = me.pool.pull("player");
        me.game.world.addChild(this.player, 2);

        this.enemyManager = new game.EnemyManager();
        this.enemyManager.createEnemies();
        me.game.world.addChild(this.enemyManager,2);

        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");
        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);
    },

    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function () {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.D);
        me.input.unbindKey(me.input.KEY.SPACE);
    },

  });