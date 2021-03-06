function numberCheck() {
    
}

function checkField() {
    var username = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var streetname = document.getElementById("streetname");

    if(firstname.value.length == "" || lastname.value.length == "") {
        alert("voer iets >:(");
        return false;
    }

}

