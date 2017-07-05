Query('#btn_add').on('click', function() {
  var ngy2data=$("nanogallery2").nanogallery2('data');
  var instance=$("nanogallery2").nanogallery2('instance');

  // create the new item
  var ID=ngy2data.items.length+1;
  var albumID='0';
  var newItem=NGY2Item.New(instance, 'new berlin ' + ID, 'my desc', ID, albumID, 'image', '' );

  // define thumbnail
  newItem.thumbSet('http://nanogallery2.nanostudio.org/samples/berlin1t.jpg', 320, 212); // w,h
// define URL to image
newItem.src='http://nanogallery2.nanostudio.org/samples/berlin1.jpg';

  // refresh the display (only once if you add multiple items)
  $("nanogallery2").nanogallery2('refresh');
});
