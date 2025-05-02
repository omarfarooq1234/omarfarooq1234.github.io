document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const blob = new Blob([data], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "user-inquiry.txt";
    link.click();

    this.reset();
    alert("Thank you! Your message has been saved.");
});