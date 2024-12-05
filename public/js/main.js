document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, feedback }),
    });

    if (response.ok) {
        alert("Thank you for your feedback!");
        document.getElementById("feedbackForm").reset();
    } else {
        alert("Failed to submit feedback. Please try again.");
    }
});
