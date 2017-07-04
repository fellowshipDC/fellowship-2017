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
            thumbnailHoverEffect2 :     '.ngy2info_opacity_0_1|.ngy2info_scale_5_1',
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
    $e.find('.nGY2GThumbnailSub').append('<button style="'+st+'" type="button" class="ngy2info" data-ngy2action="info">photo info</button>');
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

