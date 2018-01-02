// restaurantes en vista principal / Filtro: radio máximo de 5000m;
$(document).ready(function() {
  var input = $('#ask');
  var resto = data.restaurants;
  var limit = 5000;
  var showResto = $('.restaurants');

  function nearbyResto (){
    for (var i = 0; i < resto.length; i++) {
      if(resto[i].radius <= limit) {
        var images = resto[i].image;
        var nick = resto[i].name;
        var photos = [];
        var names = [];
        names.push(nick);
        photos.push(images);
           
        for (var j = 0; j < names.length; j++) {
          var boxName = $('<div></div>');
          var boxImg = $('<div></div>');

          var restoName = $('<p></p>');
          var restoPics =  $('<img></img>');

          boxImg.addClass('box-img');
          restoName.addClass('resto-name');
          restoPics.addClass('img-resto');

          restoName.text(names[j]);
          restoPics.attr('src', photos[j]);
          
          restoName.appendTo(boxName);
          boxName.appendTo(showResto)
          restoPics.appendTo(boxImg);
          boxImg.appendTo(showResto);
          
        }
      }
    }
  };
  nearbyResto();

  // Muestra cover al posicionarse en c/imagen. 
  $('.box-img').mouseover(function() {
    $(this).addClass('cover');
    var msg = $('<p></p>');

    msg.addClass('msg');
    msg.addClass('fa fa-heart');

    msg.appendTo($(this));
  });
  $('.box-img').mouseout(function() {
    $(this).removeClass('cover').css('transition-duration', '2s');
    ($('.msg')).remove();
  });

//  Añade modal al darle click al nombre de c/restaurant
  $('.resto-name').on('click', function() {
    $(this).attr('data-toggle', 'modal');
    $(this).attr('data-target', '#myModal');
    $('.modal-title').text($(this).text());
    $('.modal-title').addClass('resto-name');
    
  })
  

});