ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'impact.debug.debug',
    'plugins.joncom.font-sugar.font'
)
.defines(function(){

MyGame = ig.Game.extend({

    clearColor: '#666666',

    text: '',
    width: 34,
    height: 21,
    columns: 0,
    rows: 0,
    font: new ig.Font('media/04b03.font.png'),

    update: function() {
        this.parent();

        if(this.rows > this.height) {
            return;
        }

        // Add random colored 'A' to text.
        var color = Math.floor(Math.random()*16777215).toString(16);
        var missing = 6 - color.length;
        for(var i=0; i<missing; i++) color = '0' + color;
        this.text += '[#' + color + ' A]';

        this.columns++;
        if(this.columns > this.width) {
            this.columns = 0;
            this.rows++;
            this.text += "\n";
        }
    },

    draw: function() {
        this.parent();
        this.font.draw( this.text, ig.system.width/2, 10, ig.Font.ALIGN.CENTER );
    }

});


ig.main( '#canvas', MyGame, 60, 190, 215, 2 );

});
