const express = require("express");
const app = express();
const path = require("path");
const feedbackRoutes = require("./routes/feedback");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/feedback", feedbackRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Kwerkers server running at http://localhost:${PORT}`);
});
