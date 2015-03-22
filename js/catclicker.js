var numberOfClicks0 = 0;

// Add an event handler to the image
$('#cat-image').click(function(e) {
  //the element has been clicked... do stuff here
  numberOfClicks0++;
  $('#cat-clicked').text('Cat clicked: ' + numberOfClicks0);
});

// show a hand when moving over the cat picture 
$('.image-query img').hover(function() {
        $(this).css('cursor','pointer');
    });


