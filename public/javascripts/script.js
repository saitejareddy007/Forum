/**
 * Created by Sai on 6/27/17.
 */
//var db =require('/repo/db');

document.getElementById('createPostForm').style.maxHeight = screen.height/100*79+'px';
$(document).ready(function() {
    $('.postText').each(function () {
        // Get the content
        var str = $(this).html();
        // Set the regex string
        var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        // Replace plain text links by hyperlinks
        var replaced_text = str.replace(regex, "<a href='$1' target='_blank'>$1</a>");
        // Echo link
        $(this).html(replaced_text);
    });
});
function validateForm() {
    var name=document.forms["Form"]["name"].value   ==   "";
    var post=document.forms["Form"]["post"].value   ==   "";

    if (name||post) {
        alert("Please Fill All Required Field");
        return false;
    }

}


function loadnew() {
    var content = document.getElementById("body");
    //alert(content.firstElementChild);
    var length = content.offsetHeight;
    var yoffset = window.pageYOffset;
    var y = yoffset + window.innerHeight;
    if (y >= length) {
        console.log("scrolled");
        for (var i = k; i > k - 5; i--) {
            if (i >= 0) {
                document.getElementById('main').innerHTML = document.getElementById('main').innerHTML +
                    '<div id="main_contentd">' +
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
                    '<h2 style="overflow-wrap: break-word;">' + user[i].Post + '</h2>' +
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
    }
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
