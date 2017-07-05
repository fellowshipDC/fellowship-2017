jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2(
        {
            items:                      [
                                            {
                                                src: 'berlin1t.jpg',		  // image url
                                                srct: 'berlin1t.jpg',	  // thumbnail url
                                                title: 'berlin 2',      // element title
                                                customData: { favorite: false }    // custom data -> favorite status
                                            },
                                            { src: 'berlin2t.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2', customData: { favorite: true} },
                                            { src: 'berlin3t.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3', customData: { favorite: false} }
                                        ],
            thumbnailWidth:             'auto',
            thumbnailHeight:            200,
            locationHash:               false,
            thumbnailHoverEffect2 :     'thumbnail_translateZ_0px_100px_easeOutQuad_400 | thumbnail_rotateX_0deg_10deg_easeOutBack_200 | thumbnail_rotateX_10deg_0deg_delay250_keyframe_hoverin_easeOutBack_400',
            thumbnailBuildInit2:        '.ngy2info_translateY_-50%|.ngy2info_translateX_-50%',
            thumbnailToolbarImage:      { topLeft: 'custom1' },
            fnThumbnailInit:            myTnInit,
            fnThumbnailToolCustAction:  myTnTool,
            icons:                      { thumbnailCustomTool1 : '<i class="nGY2Icon icon-star"></i>'}

        });

        jQuery("#nanogallery").nanogallery2(
        {
            items:                      [
                                            {
                                                src: 'http://cdn.playbuzz.com/cdn/255434cc-9951-4d3b-8823-4e2d98dcf877/1f58f1f7-85ca-4578-8f7a-9713b6087f94.jpg',		  // image url
                                                srct: 'http://cdn.playbuzz.com/cdn/255434cc-9951-4d3b-8823-4e2d98dcf877/1f58f1f7-85ca-4578-8f7a-9713b6087f94.jpg',	  // thumbnail url
                                                title: 'Darth Vader',      // element title
                                                customData: { favorite: false }    // custom data -> favorite status
                                            },
                                            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ewok_SWExhibition.jpg/220px-Ewok_SWExhibition.jpg', srct: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ewok_SWExhibition.jpg/220px-Ewok_SWExhibition.jpg', title: 'Ewok', customData: { favorite: true} },
                                            { src: 'https://data3.origin.com/content/dam/originx/web/app/games/star-wars/star-wars-battlefront/star-wars-battlefront-ultimate-edition_pdp_3840x2160_en_WW.jpg', srct: 'https://data3.origin.com/content/dam/originx/web/app/games/star-wars/star-wars-battlefront/star-wars-battlefront-ultimate-edition_pdp_3840x2160_en_WW.jpg', title: 'Battle front', customData: { favorite: false} }
                                        ],
            thumbnailWidth:             'auto',
            thumbnailHeight:            200,
            locationHash:               false,
            thumbnailHoverEffect2 :     'thumbnail_translateZ_0px_100px_easeOutQuad_400 | thumbnail_rotateX_0deg_10deg_easeOutBack_200 | thumbnail_rotateX_10deg_0deg_delay250_keyframe_hoverin_easeOutBack_400',
            thumbnailBuildInit2:        '.ngy2info_translateY_-50%|.ngy2info_translateX_-50%',
            thumbnailToolbarImage:      { topLeft: 'custom1' },
            fnThumbnailInit:            myTnInit,
            fnThumbnailToolCustAction:  myTnTool,
            icons:                      { thumbnailCustomTool1 : '<i class="nGY2Icon icon-star"></i>'}

        });



});

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
    $e.find('.nGY2GThumbnailSub').append('');
    TnSetFavorite( item);
}

// Set the favorite status
function TnSetFavorite(item) {
    var c='#880';
    if( item.customData.favorite ) {
        c='#ff0';
    }
    item.$elt.find('[data-ngy2action="custom1"]').css('color',c);
}

