$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    //"zoom",
    //"share",
    //"slideShow",
    //"fullScreen",
    //"download",
    //"thumbs",
    "close"
  ],
  thumbs: {
    autoStart : false
  },
  // Open/close animation type
  // Possible values:
  //   false            - disable
  //   "zoom"           - zoom images from/to thumbnail
  //   "fade"
  //   "zoom-in-out"
  //
  animationEffect: "zoom",
});
