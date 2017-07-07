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
