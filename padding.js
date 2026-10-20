$(document).ready(function() {
    $('h1, p').each(function() {
        var paddingValue = $(this).data('padding');
        if (paddingValue) {
            $(this).css('padding-left', paddingValue + 'px');
        }
    });
});