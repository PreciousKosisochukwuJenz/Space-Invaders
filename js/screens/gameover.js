game.GameOverScreen = me.Stage.extend({

    onResetEvent: function(){
        var w = me.game.viewport.width;
        var h = me.game.viewport.height;

        var background = new me.Sprite(w/2,h/2,{
            image: game.texture,
            region:"gameover",
        })
        var bgColor = new me.ColorLayer("background","#000000");
        me.game.world.addChild(background,1);
        me.game.world.addChild(bgColor,0);
    }
})