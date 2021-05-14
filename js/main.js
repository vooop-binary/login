import anime from 'animejs';

anime({
    targets: '.container',
    translateY: [100, 0],
    easing: 'linear'
});

anime({
    targets: '.container',
    opacity: [0, 1],
    duration: 1500,
    easing: 'linear'
})
