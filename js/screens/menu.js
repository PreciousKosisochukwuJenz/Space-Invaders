var MenuStartButton = me.GUI_Object.extend({
    "onClick" : function () {
        // Change to the PLAY state when the button is clicked
        me.state.change(me.state.PLAY);
        return true;
    }
});

game.MenuScreen = me.Stage.extend({

     /**
     *  action to perform on state change
     */
    onResetEvent : function(){

           // viewport width and height
           var w = me.game.viewport.width;
           var h = me.game.viewport.height;

           //  adding the menu contents
        var background = new me.Sprite(w/2,h/2,{
            image: game.texture_2,
            region:"back",
        });
        var ship = new me.Sprite(w/2,h/6,{ image : game.texture,region:"boss1"});
        var text = new me.Text(w / 2,h / 4,{
            font: "Forte",
            size: 45,
            textAlign: "center",
            text: "SPACE INVADERS",
        });
        var playBtn = new MenuStartButton( w / 2,h / 2,{
            image:game.texture,
            region:"play",
        });
        var bgColor = new me.ColorLayer("background","#dddddd");

        // add to the scene
        me.game.world.addChild(background,1);
        me.game.world.addChild(bgColor,0);
        me.game.world.addChild(playBtn,2);
        me.game.world.addChild(ship, 2);
        me.game.world.addChild(text,2);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestoryEvent: function(){

    }
})