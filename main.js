function onClickMenu(){
    document.getElementById( "menu" ).classList.toggle("icon");
    document.getElementById( "nav" ).classList.toggle("change");   
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name && email) {

        console.log("Name:", name);
        console.log("Email:", email);

       
        document.getElementById("submitButton").textContent = "Sent";

        
        document.getElementById("myForm").reset();
    } else {

        console.log("Please enter name and email.");
    }
});
