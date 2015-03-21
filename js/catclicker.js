var numberOfClicks0 = 0;
var numberOfClicks1 = 0;

// Add an event handler to the image
$('#cat-image-0').click(function(e) {
  //the element has been clicked... do stuff here
  numberOfClicks0++;
  $('#cat-clicked-0').text('Cat clicked: ' + numberOfClicks0);
});

// add an event handler to the second image
$('#cat-image-1').click(function(e) {
  //the element has been clicked... do stuff here
  numberOfClicks1++;
  $('#cat-clicked-1').text('Cat clicked: ' + numberOfClicks1);
});

// show a hand when moving over the cat picture 
$('.image-query img').hover(function() {
        $(this).css('cursor','pointer');
    });


