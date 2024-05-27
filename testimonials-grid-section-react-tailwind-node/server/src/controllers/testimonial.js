const testimonialsJSON = require("../testimonial.json");

const getTestimonials = async (req, res) => {
    console.log(testimonialsJSON)
    try {
        res.status(200).json({ testimonials: testimonialsJSON.testimonials });
    } catch (error) {
        res.status(500).json({error : "Internal server error!"})
    }
}

module.exports = { getTestimonials }