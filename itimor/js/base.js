
/* Highlight */
$( document ).ready(function() {
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
});


$('body').scrollspy({
    target: '.bs-sidebar',
});


/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});

// 给markdown图片添加链接
$(document).ready(function() {
    $("p img").each(function() {
        var strA = "<img src='" + this.src + "' data-action='zoom'/>";
        $(this).replaceWith(strA);
    });
});


