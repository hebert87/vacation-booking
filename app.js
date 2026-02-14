import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Creates an express application
const app = express();
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));

//Enable static file
app.use(express.static("public"));

// Temporary storage for bookings
const bookings = [];

// Home page route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Handle form submissions
app.post("/submit-order", (req, res) => {
    const booking = {
        destination: req.body.destination,
        date: req.body.date,
        travelers: req.body.travelers,
        timestamp: new Date(),
    };

bookings.push(booking);

});

// Admin route to see all bookings
app.get("/admin", (req, res) => {
    res.send(bookings);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
