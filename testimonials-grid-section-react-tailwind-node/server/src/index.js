const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { getTestimonials } = require("./controllers/testimonial");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", getTestimonials);

app.listen(PORT, () => {
    console.log('server connected to port', PORT)
});
