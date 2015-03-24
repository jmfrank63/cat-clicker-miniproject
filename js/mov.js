// cat clicker separation of concerns

$(function() {
    
    // data model
    var model = {
        activeCat : 0,
        cats : [],
        incActiveCat: function() {
            this.cats[this.activeCat].clicks += 1;
        },
        init : function() {
            for (var i = 0; i < 7; i++) {
                this.cats.push({image : 'images/cat0' + i + '.jpg', clicks: 0});
            }
        }
    };

    // the connection class called octopus 
    var octopus = {
        getActiveCat: function() {
            return model.cats[model.activeCat];
        },
        getActiveCatNumber : function() {
            return model.activeCat;
        },
        setActiveCat: function(catNumber) {
            model.activeCat = catNumber;
            view.renderCat(this.getActiveCat());
        },
        clickCat : function() {
            model.incActiveCat();
            view.renderClicks(this.getActiveCat());
        },  
        init : function() {
            model.init();
            view.init();
        }
    };

    // the view using jquery and ink
    var view = {
        init : function(){
            $('.menu li').each(function(key, value) {
                $('#cat-menu-' + key).on('click', function() {
                    octopus.setActiveCat(key);
                    view.renderClicks(octopus.getActiveCat());
                });
            });
            $('#cat-image').on('click', function() {
                octopus.clickCat();
            });
        },
        renderClicks : function(cat){
            console.log(cat.clicks);
            $('#cat-clicked').text('Cat ' + (octopus.getActiveCatNumber() + 1) + ' clicked: ' + cat.clicks);
        },
        renderCat : function(cat){
            console.log(cat.image);
            $('#cat-image').attr('src',cat.image);
        }
    };
    
    octopus.init();
});

// Ink javascript for scaling images automagicly
Ink.requireModules( ['Ink.Dom.Selector_1', 'Ink.UI.ImageQuery_1'], 
    function( Selector, ImageQuery ){
        var queryImages = document.getElementsByClassName('image-query');
        for (var i = 0; i < queryImages.length; i++) {
            var imageQueryObj = new ImageQuery(queryImages[i].getElementsByTagName('img'),{
                src: '/images/{:label}/{:file}',
                queries: [
                    {
                        label: 'tiny',
                        width: 160
                    },
                    {
                        label: 'small',
                        width: 321
                    },
                    {
                        label: 'medium',
                        width: 601
                    },
                    {
                        label: 'large',
                        width: 961
                    },
                    {
                        label: 'xlarge',
                        width: 1261
                    }
                ]
            });
        }
} );
