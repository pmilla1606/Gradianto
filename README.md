Gradianto
=========

###Quickly create gradients across elements.
-
####Default Settings

    direction: 'up',
    startColor: 'EEEEEE',
    endColor: 'CCCCCC',
    startOpacity: 1,
    endOpacity: 1,
    childSelector: 'li',
    applyGradientTo: 'background-color'
-
####Setting Start and End Colors

This will define the starting and end color of the gradient. Use HEX values without the starting hash (#)

    // start and end color set

    var optionsTwo = {
        'startColor':'3498db',
        'endColor': 'c0392b'
    };
    $('.gradianto.two').gradianto(optionsTwo)

-
####Setting Start and End Opacities

Just like the colors above, here you can adjust starting and ending opacities.

    // start and end color set
    // start and end opacity set

    var optionsThree = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'startOpacity':1,
        'endOpacity':0.5
    };
    $('.gradianto.three').gradianto(optionsTwo)

-
####Setting Direction

Self explanatory. use 'up' or 'down' to change the direction..

    // start and end color set
    // start and end opacity set
    // direction set

    var optionsFour = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'startOpacity':1,
        'endOpacity':0.5,
        'direction': 'down'
    };
    $('.gradianto.four').gradianto(optionsFour);

-
####Setting CSS Property
Define the CSS property that will be used to paint the gradient. This defaults to background-color.

    // start and end color set
    // apply gradient to a different CSS property

    var optionsFive = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'applyGradientTo':'color'
    };
    $('.gradianto.five').gradianto(optionsFive);  

-
####Setting Child Selector

Define the child selector. Gradianto is applied to wrapper/parent containers and will default to li elements but you can define alternate ones by using the 'childSelector' setting.

    // start and end color set
    // apply gradient to different child elements

    var optionsSix = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'childSelector':'span'
    };
    $('.gradianto.six').gradianto(optionsSix); 
