document.addEventListener("DOMContentLoaded", function() {
let loginBtn = document.getElementById("loginBtn");
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");


//click on user icon button
let user= document.getElementById("user");
user.addEventListener('click',function(){
    document.querySelector(".loginPage").classList.toggle("active1");
    
})

// fill input field of user icon
loginBtn.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please fill Detail")
    }else{
        alert("You Logged In");
        document.querySelector(".loginPage").style.display="none"
    }
})

// tour booking button
submit.addEventListener('click',function(){
    if(placeName.value==""){
        alert("Fill Form")
    }else{
        alert(placeName.value + " Tour Booked")
    }

})

//contact us
let con = document.getElementById("con");
con.addEventListener("click",function(){
    let name = document.getElementById("name");
    let emaill = document.getElementById("emaill");

    if(name.value == "" || emaill.value == ""){
        alert("Fill Details")
    }else{
        alert("We noticed your details");
        document.querySelector(".contact").style.display="none"
    }
})
submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form from refreshing

    let go = document.getElementById("placeName").value;
    let members = document.querySelector("input[name='members']").value;
    let start = document.querySelector("input[name='start']").value;
    let end = document.querySelector("input[name='end']").value;

    if (go === "" || members === "" || start === "" || end === "") {
        alert("Please fill all booking details.");
    } else {
        alert(`${go} Tour Booked Successfully!`);

        // Create the receipt content
        let receiptContent = `
        🧾 Travel Booking Receipt
        ------------------------------
        Destination: ${go}
        Members: ${members}
        Start Date: ${start}
        End Date: ${end}
        ------------------------------
        Thank you for booking with us!
        `;

        // Create and download a text file
        let blob = new Blob([receiptContent], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${go}_booking_receipt.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});


})


