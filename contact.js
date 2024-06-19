const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullnamename.value} <br> Email Address: ${email.value} <br>Phone Number: ${phone.value} <br> Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ab1929860@gmail.com",
        Password: "BD5DA51B51184D57C1B714BA615D85994370",
        To: 'ab1929860@gmail.com',
        From: "ab1929860@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "ok") {
                Swal.fire({
                    title: "success",
                    text: "message send succesfully",
                    icon: "success"
                });
            }
        }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })

    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    // sendEmail();
});