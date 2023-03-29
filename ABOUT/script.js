
$(function(){

    $(".photo").click(function(){

        $("#detail_back").fadeIn();
        $("#detail_window").fadeIn();

        $("#detail_back").click(function(){
            $("#detail_back").fadeOut();
            $("#detail_window").fadeOut();
        });
        
    });

    
    $("#art2").click(function(){
        $(".detail_photo").attr("src","images/object_2.jpg")
    });

    

});
