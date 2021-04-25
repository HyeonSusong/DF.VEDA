$(function(){
    $('.serchBtn').click(function(){
        serchSubmit();
    });
    enterKeyDown();
});

var serchSubmit = function(){
    var serch = $(".serchForm");
    serch.attr("action", "chara.html");
    serch.attr("method", "GET");
    serch.submit();
}

var enterKeyDown = function(){
    $(".serchBar").keydown(function(key){
        if(key.keyCode == 13){
            serchSubmit();
        }
    })
}

