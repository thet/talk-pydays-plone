/* global Reveal, hljs, $ */

(function (Reveal, $) {
  "use strict";

  // Full list of configuration options available here:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    
    width: '100%',
    height: '100%',

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none
    backgroundTransition: Reveal.getQueryHash().backgroundTransition || 'slide',

    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: './bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: './bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: './bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    ]
  });

  Reveal.addEventListener('slidechanged', function( event ) {
      // event.previousSlide, event.currentSlide, event.indexh, event.indexv
      //
      if ($(event.currentSlide).hasClass('fullscreen')) {
        $('.slides').hide();
      } else {
        if ($('.slides').is(':hidden')) {
          $('.slides').show();
          Reveal.layout();
        }
      }
  } );

}) (Reveal, $);
