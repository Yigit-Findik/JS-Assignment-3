function numberCheck() {
    housenmb = parseInt(document.getElementById("housenmb").value);
    //var housenmb = document.getElementById("housenmb");
    if(isNaN(housenmb)){
        alert("fill in a number!");
    }
}

function checkField() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var streetname = document.getElementById("streetname");

    if(firstname.value.length == "" || lastname.value.length == "" || streetname.value.length == "") {
        alert("voer je voor/achter naam in en straatnaam!");
        return false;
    }

}

