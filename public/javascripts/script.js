/**
 * Created by Sai on 6/27/17.
 */
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

function formvalidate(){
    var a=document.forms["postLayout"]["comment"].value;

    if(a==null||a==""){
        alert("blank comment is not valid")
        return false;
    }
}