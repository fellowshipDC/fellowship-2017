jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2(
        {
            items:                      [
                                            // album 1
                                            {
                                                src: 'img1.jpg',		  // image url
                                                title: 'the empire (the franchise)',      // element title
                                                ID: 1,
                                                kind: 'album'
                                            },
                                                    { src: 'https://media.starwars.ea.com/content/starwars-ea-com/en_US/starwars/battlefront/_jcr_content/ogimage.img.jpeg', 
                                                            srct: 'https://media.starwars.ea.com/content/starwars-ea-com/en_US/starwars/battlefront/_jcr_content/ogimage.img.jpeg', 
                                                            title: 'Battlefront', ID: 10, albumID: 1}, 
                                                    { src: 'http://www.nexofin.com/archivos/2015/12/lego-star-wars.jpg', 
                                                        srct: 'http://www.nexofin.com/archivos/2015/12/lego-star-wars.jpg', 
                                                        title: 'lego', ID: 11, albumID: 1},
                                                    { src: 'http://wallup.net/wp-content/uploads/2015/12/43775-Star_Wars-Family_Guy.jpg', 
                                                        srct: 'http://wallup.net/wp-content/uploads/2015/12/43775-Star_Wars-Family_Guy.jpg', 
                                                        title: 'family guy', ID: 12, albumID: 1},
                                                    { src: 'https://i.ytimg.com/vi/PTKLmlfVRt4/maxresdefault.jpg', 
                                                        srct: 'https://i.ytimg.com/vi/PTKLmlfVRt4/maxresdefault.jpg', 
                                                        title: 'phineas and ferb', ID: 13, albumID: 1}, 
                                                    { src: 'http://i13a.3djuegos.com/juegos/13202/star_wars_battlefront_2__2017_/fotos/maestras/star_wars_battlefront_2__2017_-3696639.jpg', 
                                                        srct: 'http://i13a.3djuegos.com/juegos/13202/star_wars_battlefront_2__2017_/fotos/maestras/star_wars_battlefront_2__2017_-3696639.jpg', 
                                                        title: 'battlefront ii', ID: 14, albumID: 1}, 
                                                    { src: 'http://www.thestarwarstrilogy.com/StarWars/wallpaper/the-clone-wars/star-wars-the-clone-wars-02.jpg', 
                                                        srct: 'http://www.thestarwarstrilogy.com/StarWars/wallpaper/the-clone-wars/star-wars-the-clone-wars-02.jpg', 
                                                        title: 'the clone wars', ID: 15, albumID: 1}, 
                                                       
                                            //album 2
                                            {
                                                src: 'https://www.unocero.com/wp-content/uploads/2015/12/Star-Wars.jpg',		  // image url
                                                title: 'the history (movies)',      // element title
                                                ID: 2,
                                                kind: 'album'
                                            },
                                                    { src: 'https://s-media-cache-ak0.pinimg.com/736x/77/fb/b0/77fbb0d293fd6770389c9c6b3e87d7a6--star-wars-episode--episode-iv.jpg', 
                                                        srct: 'https://s-media-cache-ak0.pinimg.com/736x/77/fb/b0/77fbb0d293fd6770389c9c6b3e87d7a6--star-wars-episode--episode-iv.jpg',
                                                        title: 'episode iv movie poster', ID: 20, albumID: 2},
                                                    { src: 'https://s-media-cache-ak0.pinimg.com/originals/8a/3d/a5/8a3da578451a78d022c0721d058aa87d.jpg', 
                                                        srct: 'https://s-media-cache-ak0.pinimg.com/originals/8a/3d/a5/8a3da578451a78d022c0721d058aa87d.jpg', 
                                                        title: 'episode v movie poster', ID: 21, albumID: 2},
                                                    { src: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg', 
                                                        srct: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg', 
                                                        title: 'episode vi movie poster', ID: 22, albumID: 2},
                                                    { src: 'http://vignette2.wikia.nocookie.net/motionpicture/images/2/2e/Star_Wars_Episode_I_The_Phantom_Menace_movie_poster.jpg/revision/latest?cb=20140930004438', 
                                                        srct: 'http://vignette2.wikia.nocookie.net/motionpicture/images/2/2e/Star_Wars_Episode_I_The_Phantom_Menace_movie_poster.jpg/revision/latest?cb=20140930004438', 
                                                        title: 'episode i movie poster', ID: 23, albumID: 2},
                                                    { src: 'https://vignette3.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257', 
                                                        srct: 'https://vignette3.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257', 
                                                        title: 'episode ii movie poster', ID: 24, albumID: 2},
                                                    { src: 'https://www.trailers.tube/wp-content/uploads/2016/02/star-wars-revenge-of-the-sith-movie-poster.jpg', 
                                                        srct: 'https://www.trailers.tube/wp-content/uploads/2016/02/star-wars-revenge-of-the-sith-movie-poster.jpg', 
                                                        title: 'episode iii movie poster', ID: 25, albumID: 2},                                
                                                    { src: 'http://www.impawards.com/2015/posters/star_wars_episode_vii__the_force_awakens_ver3_xlg.jpg', 
                                                        srct: 'http://www.impawards.com/2015/posters/star_wars_episode_vii__the_force_awakens_ver3_xlg.jpg', 
                                                        title: 'episode vii movie poster', ID: 26, albumID: 2}, 
                                                    { src: 'http://www.joblo.com/posters/images/full/rogue_one_a_star_wars_story_ver5_xxlg.jpg', 
                                                        srct: 'http://www.joblo.com/posters/images/full/rogue_one_a_star_wars_story_ver5_xxlg.jpg', 
                                                        title: 'rogue one movie poster', ID: 27, albumID: 2}, 
                                                     
                                            //album 3
                                            {
                                                src: 'img2.jpg',		  // image url
                                                title: 'the alliance (fan art)',      // element title
                                                ID: 3,
                                                kind: 'album'
                                            },
                                                    { src: 'http://img06.deviantart.net/3918/i/2015/359/f/f/star_wars_empire_propaganda_wallpaper_by_matheusfrancischini-d9lhpce.jpg', 
                                                        srct: 'http://img06.deviantart.net/3918/i/2015/359/f/f/star_wars_empire_propaganda_wallpaper_by_matheusfrancischini-d9lhpce.jpg',
                                                        title: 'enlist today', ID: 30, albumID: 3},
                                                    { src: 'http://i.imgur.com/0RqW4i0.jpg', 
                                                        srct: 'http://i.imgur.com/0RqW4i0.jpg',
                                                        title: 'epire strikes', ID: 31, albumID: 3}, 
                                                    { src: 'http://4.bp.blogspot.com/-8iU21H-R23U/T170GY0gXLI/AAAAAAAAA6Y/pPM9oCfoAI4/s1600/Hangar.jpg', 
                                                        srct: 'http://4.bp.blogspot.com/-8iU21H-R23U/T170GY0gXLI/AAAAAAAAA6Y/pPM9oCfoAI4/s1600/Hangar.jpg', 
                                                        title: 'at-at', ID: 32, albumID: 3},   
                                                    { src: 'https://wallpaperscraft.com/image/star_wars_battlefront_electronic_arts_105865_3840x2160.jpg', 
                                                        srct: 'https://wallpaperscraft.com/image/star_wars_battlefront_electronic_arts_105865_3840x2160.jpg', 
                                                        title: 'stormtrooper', ID: 33, albumID: 3},   
                                                    { src: 'http://0.media.dorkly.cvcdn.com/14/51/a40af1bbdb666e2691570bcef1451029.jpg', 
                                                        srct: 'http://0.media.dorkly.cvcdn.com/14/51/a40af1bbdb666e2691570bcef1451029.jpg',
                                                        title: 'ewok', ID: 34, albumID: 3},
                                                    { src: 'https://images5.alphacoders.com/641/641571.jpg', 
                                                        srct: 'https://images5.alphacoders.com/641/641571.jpg', 
                                                        title: 'c3po r2d2', ID: 35, albumID: 3},     
                                                    { src: 'http://wallpapercave.com/wp/73RHDo6.jpg', 
                                                        srct: 'http://wallpapercave.com/wp/73RHDo6.jpg', 
                                                        title: 'yoda', ID: 36, albumID: 3},                   
                                                    { src: 'http://cdn.wallpapersafari.com/38/60/ihpyRm.jpg', 
                                                        srct: 'http://cdn.wallpapersafari.com/38/60/ihpyRm.jpg', 
                                                        title: 'millennium falcon', ID: 37, albumID: 3}, 
                                                    { src: 'http://i.imgur.com/nsQwVvh.jpg', 
                                                        srct: 'http://i.imgur.com/nsQwVvh.jpg', 
                                                        title: 'imperial fleet', ID: 38, albumID: 3}, 
                                        ],
            thumbnailWidth:             'auto',
            thumbnailHeight:            300,
            thumbnailAlignment:         'center',
            locationHash:               false,
            thumbnailHoverEffect2 :     '.ngy2info_opacity_0_1|.ngy2info_scale_5_1|scale120',
            //thumbnailBuildInit2:        '.ngy2info_translateY_-70%|.ngy2info_translateX_-70%',
            thumbnailToolbarImage:      { topRight: 'download' },
            galleryDisplayMode:         'rows',
            galleryMaxRows:             '10',
            thumbnailLabel:             { titleMultiLine: 'True', position: 'overImageOnBottom', hideIcons: true },
            /*fnThumbnailInit:            myTnInit,
            fnThumbnailToolCustAction:  myTnTool,*/
            icons:                      { thumbnailCustomTool1 : '<i class="nGY2Icon icon-circle-empty"></i>'}
            
        });

});
/*
    var basket=$('#nanogallery2').nanogallery2('shoppingCartGet');
    $('#your_nanogallery2').nanogallery2('shoppingCartUpdate', imageID, newCounter);
    $('#your_nanogallery2').nanogallery2('shoppingCartRemove', imageID);

El código comentado se relaciona entre sí pero no es necesario
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

