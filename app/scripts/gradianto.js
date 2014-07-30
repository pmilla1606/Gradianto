// 2014 Peter Margaritoff

// to the tune of 'Don't Call My Name' by Lady Gaga
// Gradianto
// Gradianto
// Gradi-gradi-anto
// Gradi-gradi-anto (2)

(function ( $ ) {
    $.fn.gradianto = function(options) {
       
        // defaults
        var settings = $.extend({
            direction: 'up',
            startColor: 'EEEEEE',
            endColor: 'CCCCCC',
            startOpacity: 1,
            endOpacity: 1,
            childSelector: 'li',
            applyGradientTo: 'background-color' // css selectors here such as background-color (default), color, border, etc
           
        }, options );
        
        var elems = this.children(settings.childSelector).each(function(){
            return this;
        });
            
        var startRgb = {
            'R': parseInt((settings.startColor).substring(0,2),16),
            'G': parseInt((settings.startColor).substring(2,4),16),
            'B': parseInt((settings.startColor).substring(4,6),16)
        };
        var endRgb = {
            'R': parseInt((settings.endColor).substring(0,2),16),
            'G': parseInt((settings.endColor).substring(2,4),16),
            'B': parseInt((settings.endColor).substring(4,6),16)
        };

        var p = 0;
        var op = settings.startOpacity;

        var diff = Math.abs(settings.startOpacity - settings.endOpacity);
        var incs = Number(diff / (elems.length - 1));
       

        for(var i=0; i<elems.length; i++){

            var currentOpacity;
            var p = p + (1/elems.length);
            
            console.log(op);
            
            // gradient directions setup
            var currentRgb = {
                'R': Math.round(startRgb.R * p + endRgb.R * (1-p)),
                'G': Math.round(startRgb.G * p + endRgb.G * (1-p)),
                'B': Math.round(startRgb.B * p + endRgb.B * (1-p)),            
            };

            if(settings.direction == 'down'){
                currentRgb = {
                    'R': Math.round(endRgb.R * p + startRgb.R * (1-p)),
                    'G': Math.round(endRgb.G * p + startRgb.G * (1-p)),
                    'B': Math.round(endRgb.B * p + startRgb.B * (1-p)),            
                };
            }
            
            //set both opacities to 1 to avoid IE issues
            if(settings.startOpacity == 1 && settings.endOpacity ==1){
                $(elems[i]).css(settings.applyGradientTo, 'rgb('+currentRgb.R+', '+currentRgb.G+', '+currentRgb.B+')');
            }
            else{
                $(elems[i]).css(settings.applyGradientTo, 'rgba('+currentRgb.R+', '+currentRgb.G+', '+currentRgb.B+', '+op+')');

            }
            op = op - incs;
        };
    }
}( jQuery ));
