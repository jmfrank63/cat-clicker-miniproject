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
