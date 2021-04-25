$(function () {
    menuClick();
    logoClick();
});


var menuClick = function () {
    $(".menu").click(function () {
        onClickHref(this);
    });
}
var logoClick = function () {
    $(".logo").click(function () {
        onClickHref(this);
    });
}

var onClickHref = function (btn) {
    var url = $(btn).data("url");
    url = "" + url + ".html";
    location.href = url;
}

