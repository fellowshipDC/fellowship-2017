jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2(
        {
            items:                      [
                                            // album 1
                                            {
                                                src: 'img1.jpg',		  // image url
                                                title: 'the empire',      // element title
                                                ID: 1,
                                                kind: 'album'
                                            },
                                                    { src: 'http://img06.deviantart.net/3918/i/2015/359/f/f/star_wars_empire_propaganda_wallpaper_by_matheusfrancischini-d9lhpce.jpg', 
                                                        srct: 'http://img06.deviantart.net/3918/i/2015/359/f/f/star_wars_empire_propaganda_wallpaper_by_matheusfrancischini-d9lhpce.jpg',
                                                        title: 'enlist today', ID: 10, albumID: 1},
                                                    { src: 'http://i.imgur.com/0RqW4i0.jpg', 
                                                        srct: 'http://i.imgur.com/0RqW4i0.jpg',
                                                        title: 'epire strikes', ID: 11, albumID: 1}, 
                                                    { src: 'http://4.bp.blogspot.com/-8iU21H-R23U/T170GY0gXLI/AAAAAAAAA6Y/pPM9oCfoAI4/s1600/Hangar.jpg', 
                                                        srct: 'http://4.bp.blogspot.com/-8iU21H-R23U/T170GY0gXLI/AAAAAAAAA6Y/pPM9oCfoAI4/s1600/Hangar.jpg', 
                                                        title: 'at-at', ID: 12, albumID: 1},   
                                                    
                                            
                                            //album 2
                                            {
                                                src: 'https://www.unocero.com/wp-content/uploads/2015/12/Star-Wars.jpg',		  // image url
                                                title: 'the history',      // element title
                                                ID: 2,
                                                kind: 'album'
                                            },
                                                    { src: 'https://s-media-cache-ak0.pinimg.com/736x/77/fb/b0/77fbb0d293fd6770389c9c6b3e87d7a6--star-wars-episode--episode-iv.jpg', 
                                                        srct: 'https://s-media-cache-ak0.pinimg.com/736x/77/fb/b0/77fbb0d293fd6770389c9c6b3e87d7a6--star-wars-episode--episode-iv.jpg',
                                                        title: 'episode iv', ID: 20, albumID: 2},
                                                    { src: 'https://s-media-cache-ak0.pinimg.com/originals/8a/3d/a5/8a3da578451a78d022c0721d058aa87d.jpg', 
                                                        srct: 'https://s-media-cache-ak0.pinimg.com/originals/8a/3d/a5/8a3da578451a78d022c0721d058aa87d.jpg', 
                                                        title: 'episode v', ID: 21, albumID: 2},
                                                    { src: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg', 
                                                        srct: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg', 
                                                        title: 'episode vi', ID: 22, albumID: 2},
                                                    { src: 'http://vignette2.wikia.nocookie.net/motionpicture/images/2/2e/Star_Wars_Episode_I_The_Phantom_Menace_movie_poster.jpg/revision/latest?cb=20140930004438', 
                                                        srct: 'http://vignette2.wikia.nocookie.net/motionpicture/images/2/2e/Star_Wars_Episode_I_The_Phantom_Menace_movie_poster.jpg/revision/latest?cb=20140930004438', 
                                                        title: 'episode i', ID: 23, albumID: 2},
                                                    { src: 'https://vignette3.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257', 
                                                        srct: 'https://vignette3.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257', 
                                                        title: 'episode ii', ID: 24, albumID: 2},
                                                    { src: 'https://www.trailers.tube/wp-content/uploads/2016/02/star-wars-revenge-of-the-sith-movie-poster.jpg', 
                                                        srct: 'https://www.trailers.tube/wp-content/uploads/2016/02/star-wars-revenge-of-the-sith-movie-poster.jpg', 
                                                        title: 'episode iii', ID: 25, albumID: 2},                                
                                            
                                            //album 3
                                            {
                                                src: 'img2.jpg',		  // image url
                                                title: 'the rebellion',      // element title
                                                ID: 3,
                                                kind: 'album'
                                            },
                                                    { src: 'http://0.media.dorkly.cvcdn.com/14/51/a40af1bbdb666e2691570bcef1451029.jpg', 
                                                        srct: 'http://0.media.dorkly.cvcdn.com/14/51/a40af1bbdb666e2691570bcef1451029.jpg',
                                                        title: 'ewok', ID: 30, albumID: 3},
                                                    { src: 'https://images5.alphacoders.com/641/641571.jpg', 
                                                        srct: 'https://images5.alphacoders.com/641/641571.jpg', 
                                                        title: 'c3po r2d2', ID: 31, albumID: 3},     
                                                    { src: 'https://s-media-cache-ak0.pinimg.com/originals/8f/54/02/8f5402cd0814416639d147bce393fe1f.jpg', 
                                                        srct: 'https://s-media-cache-ak0.pinimg.com/originals/8f/54/02/8f5402cd0814416639d147bce393fe1f.jpg', 
                                                        title: 'yoda', ID: 32, albumID: 3},                      
                                        ],
            thumbnailWidth:             'auto',
            thumbnailHeight:            300,
            thumbnailAlignment:         'center',
            locationHash:               false,
            thumbnailHoverEffect2 :     '.ngy2info_opacity_0_1|.ngy2info_scale_5_1|scale120',
            thumbnailBuildInit2:        '.ngy2info_translateY_-70%|.ngy2info_translateX_-70%',
            thumbnailToolbarImage:      { topRight: 'download' },
            galleryDisplayMode:         'rows',
            galleryMaxRows:             '10',
            /*fnThumbnailInit:            myTnInit,
            fnThumbnailToolCustAction:  myTnTool,*/
            icons:                      { thumbnailCustomTool1 : '<i class="nGY2Icon icon-circle-empty"></i>'}
            
        });

});
/*
// click/touch on custom tool/button
function myTnTool( action, item ) {
    console.dir(item);
    
    switch( action ) {
        case 'info':
        alert('Photo title: '+item.title);
        
        break;
        case 'custom1':
        // switch favorite status
        item.customData.favorite=!item.customData.favorite;
        TnSetFavorite(item);
        break;
    }
}

// Add custom elements after one thumbnail is build
function myTnInit( $e, item, GOMidx ) {
    var st='position:absolute;top:50%;left:50%;padding:10px;'
    $e.find('.nGY2GThumbnailSub').append('<button style="'+st+'" type="button" class="ngy2info" data-ngy2action="info">luke</button>');
    TnSetFavorite( item);
}

 Set the favorite status
function TnSetFavorite(item) {
    var c='#880';
    if( item.customData.favorite ) {
        c='#ff0';
    }
    item.$elt.find('[data-ngy2action="custom1"]').css('color',c);
}
*/
