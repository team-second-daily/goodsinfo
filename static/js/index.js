$(function () {
    let banner= new Swiper('.boximg',{
        autoplay:{
            delay:1500,
            disableOnInteraction: false
        },
        loop:true
    });
    let iscroll = new IScroll('.maininfo', {
        probeType: 3,
        // scrollbars: true,
        click: true,
        fadeScrollbars: true
    });
});
