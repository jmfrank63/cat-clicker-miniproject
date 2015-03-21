Ink.requireModules( ['Ink.Dom.Selector_1', 'Ink.UI.ImageQuery_1'], 
    function( Selector, ImageQuery ){
        var queryImages = document.getElementsByClassName('image-query');
        for (var i = 0; i < queryImages.length; i++) {
            var imageQueryObj = new ImageQuery(queryImages[i].getElementsByTagName('img'),{
                src: '/images/{:label}/{:file}',
                queries: [
                    {
                        label: 'small',
                        width: 320
                    },
                    {
                        label: 'medium',
                        width: 640
                    },
                    {
                        label: 'large',
                        width: 1280
                    },
                    {
                        label: 'xlarge',
                        width: 1920
                    }
                ]
            });
        }
} );
