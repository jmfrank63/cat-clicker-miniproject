Ink.requireModules( ['Ink.Dom.Selector_1', 'Ink.UI.ImageQuery_1'], 
    function( Selector, ImageQuery ){
        var queryImages = document.getElementsByClassName('image-query');
        for (var i = 0; i < queryImages.length; i++) {
            var imageQueryObj = new ImageQuery(queryImages[i].getElementsByTagName('img'),{
                src: '/images/{:label}/{:file}',
                queries: [
                    {
                        label: 'tiny',
                        width: 320
                    },
                    {
                        label: 'small',
                        width: 600
                    },
                    {
                        label: 'medium',
                        width: 960
                    },
                    {
                        label: 'large',
                        width: 1260
                    },
                    {
                        label: 'xlarge',
                        width: 126
                    }
                ]
            });
        }
} );
