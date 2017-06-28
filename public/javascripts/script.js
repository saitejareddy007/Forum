/**
 * Created by Sai on 6/27/17.
 */
/*$(document).ready(function(){
    var readMoreHtml = $(".comments_page").html();
    var invisible = readMoreHtml.substr(0,0);

    $(".comments_page").html(invisible).append("<a href='' class='view' > view comments</a>");

    $("body").on("click",".view",function (event) {
        event.preventDefault();
        $(this).parent(".comments_page").html(readMoreHtml).append("<a href='' class='hide_view' > hide comments</a>");
    });

    $("body").on("click",".hide_view",function (event) {
        event.preventDefault();
        $(this).parent(".comments_page").html(invisible).append("<a href='' class='view' > hide comments</a>");
    });
})*/

function validateForm() {
    var a=document.forms["Form"]["Name"].value;
    var b=document.forms["Form"]["post"].value;

    if (a==null || a=="",b==null || b=="") {
        alert("Please Fill All Required Field");
        return false;
    }

    if (b==null || b=="",a==null || a=="") {
        alert("Please Fill All Required Field");
        return false;
    }
}

/*function formvalidate(){
    var a=document.forms["postLayout"]["comment"].value;

    if(a==null||a==""){
        alert("Blank comment is not valid")
        return false;
    }
}*/
