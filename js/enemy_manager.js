game.EnemyManager = me.Container.extend({
    init : function () {
        this._super(me.Container, "init", [0, 32]);
        this.COLS = 9;
        this.ROWS = 4;
        this.vel = 10;
        this.onChildChange = function () {
                this.updateChildBounds();
                if (this.children.length === 0) {
                this.startNewWave();
            }
        };
    },
   startNewWave: function(){
        this.init();
        this.createEnemies();
        me.game.world.addChild(this,2);
        game.data.waveCount++;
        this.vel *= game.data.waveCount;
       },
    createEnemies : function () {
        for (var i = 0; i < this.COLS; i++) {
            for (var j = 0; j < this.ROWS; j++) {
                this.addChild(me.pool.pull("enemy", i * 64, j * 64));
            }
        }
        this.createdEnemies = true;
      },

    onActivateEvent  : function () {
        var _this = this;
        this.timer = me.timer.setInterval(function () {
            var bounds = _this.childBounds;

            if ((_this.vel > 0 && (bounds.right + _this.vel) >= me.game.viewport.width) ||
                (_this.vel < 0 && (bounds.left + _this.vel) <= 0)) {
                _this.vel *= -1;
                _this.pos.y += 16;
                if (_this.vel > 0) {
                  _this.vel += 5;
                }
                else {
                  _this.vel -= 5;
                }
                game.playScreen.checkIfLoss(bounds.bottom);
            }
            else {
                _this.pos.x += _this.vel;
            }
        }, 100);
    },
    onDeactivateEvent : function () {
        me.timer.clearInterval(this.timer);
    },

    update : function (time) {
        this._super(me.Container, "update", [time]);
        this.updateChildBounds();
    }
  });
  
