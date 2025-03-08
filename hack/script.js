function getMedicine() {
    const disease = document.getElementById("disease").value;
    let medicine;

    switch (disease) {
        case "Cold":
            medicine = "Paracetamol, Antihistamines, Decongestants";
            break;
        case "Flu":
            medicine = "Tamiflu, Ibuprofen, Rest and Hydration";
            break;
        case "Headache":
            medicine = "Ibuprofen, Acetaminophen, Aspirin";
            break;
        case "Diabetes":
            medicine = "Metformin, Insulin, Glipizide";
            break;
        default:
            medicine = "Consult a doctor for the best recommendation.";
    }

    // Open a new window to display the medicine recommendation
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Medicine Recommendation</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                h1 { color: #007BFF; }
            </style>
        </head>
        <body>
            <h1>Medicine Recommendation</h1>
            <p><strong>Disease:</strong> ${disease}</p>
            <p><strong>Recommended Medicine:</strong> ${medicine}</p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);
}
