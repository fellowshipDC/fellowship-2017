jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2(
        {
            items:                      [
                                            {
                                                src: 'img2.jpg',		  // image url
                                                srct: 'img2.jpg',	  // thumbnail url
                                                title: 'I',      // element title
                                                customData: { favorite: false }    // custom data -> favorite status
                                            },
                                            { src: 'img3.jpg', srct: 'img3.jpg', title: 'am', customData: { favorite: true} },
                                            { src: 'img1.jpg', srct: 'img1.jpg', title: 'your father', customData: { favorite: false} }
                                        ],
            thumbnailWidth:             'auto',
            thumbnailHeight:            300,
            locationHash:               false,
            thumbnailHoverEffect2 :     '.ngy2info_opacity_0_1|.ngy2info_scale_5_1',
            thumbnailBuildInit2:        '.ngy2info_translateY_-70%|.ngy2info_translateX_-70%',
            thumbnailToolbarImage:      { topRight: 'download' },
            fnThumbnailInit:            myTnInit,
            fnThumbnailToolCustAction:  myTnTool,
            icons:                      { thumbnailCustomTool1 : '<i class="nGY2Icon icon-circle-empty"></i>'}
            
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
    $e.find('.nGY2GThumbnailSub').append('<button style="'+st+'" type="button" class="ngy2info" data-ngy2action="info">luke</button>');
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

/*!
Name: Daily Messages
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: June 19, 2015
Last Updated: June 19, 2015
Licensed under the MIT license
*/

;(function($) {

    $.fn.dailyMessages = function(options) {
    
        //return if no element was bound
        //so chained events can continue
        if(!this.length) { 
            return this; 
        }

        //define default parameters
        var defaults = {
            monday: null,
            tuesday: null,
            wednesday: null,
            thursday: null,
            friday: null,
            saturday: null,
            sunday: null,
            success: function() {}
        }
        
        //define plugin
        var plugin = this;

        //define settings
        plugin.settings = {}
 
        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        var s = plugin.settings,
            el = $(this),
            date = new Date(),
            day = date.getDay(),
            days = [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            today = days[day - 1].toLowerCase();
            
        if(today in s) {
            
            el.text(s[today]);
        
            // run success callback
            s.success.call(this);
            
        } else {
        
            // run error callback
            s.error.call(this, '"'+s[today]+'" is not a valid day.');
            
        }

    }

})(jQuery);


$('.mensaje-diario').dailyMessages({
    monday: "Hoy es el día del Jedi",
    tuesday: "Hoy destruye la Estrella de la muerte ",
    wednesday: "Hoy únete al lado oscuro",
    thursday: "Hoy que la fuerza te acompañe!",
    friday: "Luke, soy tu padre",
    saturday: "No lo intentes. Hazlo, o no lo hagas, pero no lo intentes",
    sunday: "¡Es una trampa!",
    success: function() {
        console.log('Funciona!');
    },
    error: function(message) {
        console.log(message);
        $(this).remove();
    }
});
