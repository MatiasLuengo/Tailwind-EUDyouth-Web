/* Slides */
var splide = new Splide( '.splide', {
    perPage: 3,
    perMove: 1,
    gap    : '1rem',
    padding: '2rem',
    type: 'loop',
    focus  : 'center',
    /* drag: 'free', */ /* la imagen queda a la mitad, no pasa completa */
    snap: false,
    arrows: true,
    pagination: true,
    autoplay: true,
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        height : '6rem',
      },
      600: {
        perPage: 2,
        gap: '.1rem',     
      },
    },
  } );
  
  splide.mount();