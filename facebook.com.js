// crude way to only load on the newsfeed.
if(jQuery('#stream_pagelet').length === 1){
   jQuery('body').append('<div id="wasted_time"></div>').find('#wasted_time').css({'position': 'fixed', 'font-size': '5em', 'top': '1em', 'left': '0.5em', 'background': '#fff', 'padding': '0 0.125em', 'border': '1px #222 solid'});

   var count = 0;
   setInterval(function(){
      count++;
      hours = ("00" + Math.floor(count / 3600 % 3600)).substr(-2, 2);
      mins = ("00" + Math.floor(count / 60 % 60)).substr(-2, 2);
      secs = ("00" + (count % 60)).substr(-2, 2);
      $('#wasted_time').html(hours + ":" + mins + ":" + secs);
   }, 1000);
}