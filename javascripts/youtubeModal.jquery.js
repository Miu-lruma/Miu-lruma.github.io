(function() {
   var $, log;

   $ = jQuery;

   log = function(m) {
      return console.log(m);
   };

   $.fn.youtubeModal = function(options) {
      var addModal, closeModal, createModal, defaults, setPosition, start;
      defaults = {
         vid: '',
         youtubeModalWrapper: '.youtube-modal-wrapper',
         youtubeInner: '.youtube-modal-inner',
         cover: '#coverItUp',
         width: '80%',
         autoplay: true,
         closeBtn: '.youtube-modal__close-btn'
      };
      options = $.extend(defaults, options);
      createModal = function() {
         var autoplay, iframe_dom;
         if (options.autoplay) {
            autoplay = 1;
         } else {
            autoplay = 0;
         }
         iframe_dom = "<iframe frameborder='0' allowfullscreen='' src='http://www.youtube.com/embed/" + options.vid + "?rel=0&autoplay=" + autoplay + "&wmode=opaque' marginwidth='0' marginheight='0'></iframe>";
         return " <div class='youtube-modal-wrapper'> \n	<img class='youtube-modal__close-btn' src=\"resources/close.png\">\n	<div class='youtube-modal-inner'>\n		" + iframe_dom + "\n	</div>\n</div>";
      };
      start = function(item) {
         var modal;
         modal = createModal();
         addModal(modal);
         return setPosition();
      };
      setPosition = function() {
         var height, marginLeft, marginTop, vpHeight, vpWidth, width;
         vpHeight = $(window).height();
         vpWidth = $(window).width();
         height = $(options.youtubeModalWrapper).outerHeight();
         width = $(options.youtubeModalWrapper).outerWidth();
         marginTop = '-' + height / 2 + 'px';
         marginLeft = '-' + width / 2 + 'px';
         return $(options.youtubeModalWrapper).css({
            'margin-top': marginTop,
            'margin-left': marginLeft
         });
      };
      addModal = function(modal) {
         var cover;
         cover = "<div id='coverItUp'></div>";
         $('body').append(cover + modal);
         return $(options.youtubeModalWrapper).css('width', options.width);
      };
      closeModal = function() {
         if ($(options.cover).length) {
            $(options.cover).remove();
         }
         return $(options.youtubeModalWrapper).remove();
      };
      return this.each(function() {
         var thisVid;
         thisVid = '#' + $(this).attr('id');
         options.vid = $(this).data('id');
         $('body').on('click', thisVid, function() {
            return start(this);
         });
         $('body').on('click', options.cover, function() {
            return closeModal();
         });
         $('body').on('click', options.closeBtn, function() {
            return closeModal();
         });
         return $(window).resize(function() {
            return setPosition();
         });
      });
   };

}).call(this);
