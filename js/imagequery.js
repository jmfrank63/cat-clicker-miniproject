Ink.requireModules( ['Ink.Dom.Selector_1', 'Ink.UI.ImageQuery_1'], 
    function( Selector, ImageQuery ){
        var queryImages = document.getElementsByClassName('image-query');
        for (var i = 0; i < queryImages.length; i++) {
            var imageQueryObj = new ImageQuery(queryImages[i].getElementsByTagName('img'),{
                src: 'images/{:label}/{:prefix}{:file}',
                queries: [
                    {
                        label: 'tiny',
                        prefix: '320x213',
                        width: 320
                    },
                    {
                        label: 'small',
                        prefix: '480x320',
                        width: 480
                    },
                    {
                        label: 'medium',
                        prefix: '640x427',
                        width: 640
                    },
                    {
                        label: 'large',
                        prefix: '1024x683',
                        width: 1024
                    },
                    {
                        label: 'xlarge',
                        prefix: '1600x1066',
                        width: 1600
                    }
                ]
            });
        }
} );
