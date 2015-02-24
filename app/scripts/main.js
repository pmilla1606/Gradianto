$('document').ready(function(){

    var jumboOptions = {
        'childSelector': 'div',
        'startColor': '2ecc71',
        'endColor':'f1c40f'
    };
    $('.jumbo-gradianto-wrap').gradianto(jumboOptions);

    var dynamicOptions = {
        'startColor': '2ecc71',
        'endColor':'f1c40f'
    };
    $('.gradianto.dynamic').gradianto(dynamicOptions);

    $('button.inc').on('click', function(){
        $('.gradianto.dynamic').append('<li class="list-group-item">More!</li>');
        $('.gradianto.dynamic').gradianto(dynamicOptions);
    });
    $('button.dec').on('click', function(){
        $('.gradianto.dynamic li:last-child').remove();
        $('.gradianto.dynamic').gradianto(dynamicOptions);
    });    



    // examples
    $('.gradianto.one').gradianto();
    var optionsTwo = {
    	'startColor':'2ecc71',
    	'endColor': 'f1c40f'
    };
    $('.gradianto.two').gradianto(optionsTwo);
    var optionsThree = {
    	'startColor':'2ecc71',
    	'endColor': 'f1c40f',
    	'startOpacity':1,
    	'endOpacity':0.5
    };
    $('.gradianto.three').gradianto(optionsThree);  
    
    var optionsFour = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'startOpacity':1,
        'endOpacity':0.5,
        'direction': 'down'
    };
    $('.gradianto.four').gradianto(optionsFour);

    var optionsFive = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'applyGradientTo':'color'
    };
    $('.gradianto.five').gradianto(optionsFive);  

    var optionsSix = {
        'startColor':'2ecc71',
        'endColor': 'f1c40f',
        'childSelector':'span'
    };
    $('.gradianto.six').gradianto(optionsSix);          
});