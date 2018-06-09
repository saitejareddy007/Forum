/**
 * Created by Sai on 6/27/17.
 */

document.getElementById('createPostForm').style.maxHeight = screen.height/100*79+'px';
$(function(){
    $('html').linkify();
    $(".main_content").animate({'margin-top': '0px','opacity':'1'},'slow');
});
window.onresize = function() {
    //alert(document.getElementById('createPostForm').offsetWidth);
    if (document.getElementById('createPostForm').offsetWidth == 150) {
        document.getElementById('main').offsetWidth = window.innerWidth-166;
    }

}
function validateForm() {
    var name=document.forms["Form"]["name"].value   ==   "";
    var post=document.forms["Form"]["post"].value   ==   "";

    if (name||post) {
        alert("Please Fill All Required Field");
        return false;
    }

}

function postAnimation() {
    $(".main_content").animate({'margin-top': '0px','opacity':'1'},'slow');
}

function loadnew() {
    var content = document.getElementById("main");
    //alert(content.firstElementChild);
    var length = content.offsetHeight;
    var yoffset = window.pageYOffset;
    var y = yoffset + window.innerHeight;
    if (y >= length) {
        console.log("scrolled");
        for (var i = k; i > k - 5; i--) {
            if (i >= 0) {
                document.getElementById('main').innerHTML = document.getElementById('main').innerHTML +
                    '<div class="main_content">' +
                    '<form id="com" action="/' + user[i].date + '"   method="post">' +
                    '<table style="table-layout: fixed; width: 100%;">' +
                    '<tr>' +
                    '<td>posted by ' + user[i].Name + ' </td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>on ' + user[i].date + '</td>' +
                    '</tr>' +
                    '</table>' +
                    '<div class=class="post">' +
                    '<h2 style="overflow-wrap: break-word;"><pre class="postText">' + user[i].Post + '</pre></h2>' +
                    '</div>' +
                    //'<span> Comments </span>' +
                    '<a href="/' + user[i].date + '" id="myBtn"  >comments</a>' +
                    '<div id = "comments_page" class="modal" >' +

                    '<div class="commentsa"><span class="close">&times;</span></div>' +
                    //'<p>'+User[i].comments+ '</p>'+
                    '</div>' +
                    '<input style = "width : 91.75%; margin-top:5px; height:20px; "name = "comment" placeholder = "write comment...">' +
                    '<button type ="submit" >submit </button>' +
                    '</form>' +
                    '</div>';
            }
        }
        k = k - 5;
        postAnimation();
    }
    $('html').linkify();
}
/*function Validate()
{
    var msg= "",
        fields = document.getElementById("com").getElementsByTagName("input");

    for (var i=0; i<fields.length; i++){
        if (fields[i].value == "")
            msg += fields[i].title + ' is required. \n';
    }

    if(msg) {
        alert(msg);
        return false;
    }
    else
        return true;
}
*/
