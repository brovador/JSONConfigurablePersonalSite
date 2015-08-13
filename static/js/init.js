(function($) {
    skel.init({
        reset: 'full',
        grid: {
            gutters: ['2em', 0]
        },
        containers: '100%',
        breakpoints: {
            global: {
                href: '/css/style.css'
            },
            xlarge: {
                media: '(max-width: 1680px)',
                href: '/css/style-xlarge.css'
            },
            small: {
                media: '(max-width: 736px)',
                href: '/css/style-small.css',
                viewport: {
                    scalable: false
                }
            },
            xsmall: {
                media: '(max-width: 480px)',
                href: '/css/style-xsmall.css'
            }
        }
    });
    $(function() {
        var $window = $(window),
            $body = $('body'),
            page = $body.attr('class').split(' ')[0];
        if (skel.vars.isMobile) $body.addClass('is-touch');
    });
})(jQuery);