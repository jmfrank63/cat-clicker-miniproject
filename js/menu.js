// Create an array for number of clicks of each cat in the list
var numberOfClicks = [];
var numlength = 7;

for (var i = 0; i < numlength; i++) {
    numberOfClicks.push(0);
}

var activeCat = 0;

// add event handler to show picture of cat for each menu item clicked
$('.menu li').each(function(key, value) {
    // add the event handler
    $('#cat-menu-' + key).on('click', function(){
        
        $('#cat-image').attr('src','images/cat0' + key + '.jpg');
        $('#cat-clicked').text('Cat ' + (key + 1) + ' clicked: ' + numberOfClicks[key]);
        activeCat = key;
    });
});

$('#cat-image').on('click', function() {
    numberOfClicks[activeCat]++;
    $('#cat-clicked').text('Cat ' + (activeCat + 1) + ' clicked: ' + numberOfClicks[activeCat]);
    
});
// show a hand when moving over the cat picture 
$('.image-query img').hover(function() {
        $(this).css('cursor','pointer');
    });


// change image source
/*        $('#cat-image').attr('src','images/cat0' + key + '.jpg');
        $('#cat-clicked').text('Cat ' + (key + 1) + ' clicked: ' + numberOfClicks[key]);
        $('#cat-image').click( (function(keyCopy) {
            return function() {
                console.log(keyCopy);
                // increase number of clicks by one
                numberOfClicks[keyCopy]++;
                // display result in text under image
                $('#cat-clicked').text('Cat ' + (keyCopy + 1) + ' clicked: ' + numberOfClicks[keyCopy]);
            };
        })(key));
*/
