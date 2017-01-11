/*!
 * sasso
 * 
 * 
 * @author lucadevelo
 * @version 1.0.0
 * Copyright 2017. MIT licensed.
 */
(function($, window, document, undefined) {
    'use strict';
    $(window).load(function() {
        $('.loader').delay(100).fadeOut('slow');
    });

    $(function() {
        $('div.mylist dd').filter(':nth-child(n+4)').hide();
        $('div.mylist dl').on('mouseenter', 'dt', function() {
            $(this).next().slideDown(200)
                .siblings('dd').slideUp(200);
        });
    });
})(jQuery, window, document);
