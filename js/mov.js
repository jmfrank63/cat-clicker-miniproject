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
                this.cats.push({ number : i,
                                 name : 'Cat ' + (i + 1),
                                 image : 'images/cat0' + i + '.jpg', 
                                 clicks: 0 });
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
        setActiveCatName: function(name) {
            model.cats[model.activeCat].name = name;
            view.renderClicks(this.getActiveCat());
            view.updateMenu();
        },
        setActiveCatClicks: function(clicks) {
            model.cats[model.activeCat].clicks = parseInt(clicks, 10);
            view.renderClicks(this.getActiveCat());
        },
        clickCat : function() {
            model.incActiveCat();
            view.renderClicks(this.getActiveCat());
        },  
        init : function() {
            model.init();
            view.init(this.getActiveCat());
        }
    };

    // the view using jquery and ink
    var view = {
        init : function(cat){
            // Add event handler to menu for changing cats
            $('.menu li').each(function(key, value) {
                $('#cat-menu-' + key).on('click', function() {
                    octopus.setActiveCat(key);
                    var _cat = octopus.getActiveCat();
                    view.renderClicks(_cat);
                    $('#inline-name').val(_cat.name);
                    $('#inline-clicks').val(_cat.clicks);
                });
            });
            // Add event handler to cat for clicking
            $('#cat-image').on('click', function() {
                octopus.clickCat();
                $('#inline-clicks').val(octopus.getActiveCat().clicks);
            });
            // Add event handler to admin button
            $('#admin-button').on('click', function() {
                $('#admin-fields').show();
            });
            // Add event hander to change button
            $('#admin-form').submit( function(event) {
                console.log($('#inline-name').val(), $('#inline-clicks').val());
                octopus.setActiveCatName($('#inline-name').val());
                octopus.setActiveCatClicks($('#inline-clicks').val());
                $('#admin-fields').hide();
                return false;
            });
            // Add event handler to cancel button
            $('#cancel-button').on('click', function() {
                $('#admin-fields').hide();
            });
            // init starting values
            $('#inline-name').val(cat.name);
            $('#inline-clicks').val(cat.clicks);
        },
        updateMenu : function() {
            $('#cat-menu-' + octopus.getActiveCatNumber()).children('a').text(octopus.getActiveCat().name);
        },
        renderClicks : function(cat){
            // console.log(cat.clicks);
            $('#cat-clicked').text(cat.name + ' clicked: ' + cat.clicks);
        },
        renderCat : function(cat){
            // console.log(cat.image);
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
