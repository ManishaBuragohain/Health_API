const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;
app.use(cors());

app.get("/api/get-doctors/:city", (req, res) => {
  const { city } = req.params;
  console.log(city);
  const guwahatiDoctors = [
    { name: "Dr. Anjana Gogoi", expertise: "Physiotherapy", city: "Guwahati" },
    {
      name: "Dr. Sushanta Boruah",
      expertise: "Joint Mobilization",
      city: "Guwahati",
    },
    { name: "Dr. Rita Buragohain", expertise: "Massage", city: "Guwahati" },
  ];
  const bengaluruDoctors = [
    { name: "Dr. Manoj Kumar", expertise: "Physiotherapy", city: "Bengaluru" },
    {
      name: "Dr. Subhash Ram",
      expertise: "Joint Mobilization",
      city: "Bengaluru",
    },
    { name: "Dr. Rita Xavier", expertise: "Massage", city: "Bengaluru" },
  ];
  const mumbaiDoctors = [
    { name: "Dr. Smriti Tiwari", expertise: "Physiotherapy", city: "Mumbai" },
    {
      name: "Dr. Ram Gopal",
      expertise: "Joint Mobilization",
      city: "Mumbai",
    },
    { name: "Dr. Manjusha Raut", expertise: "Massage", city: "Mumbai" },
  ];
  const delhiDoctors = [
    { name: "Dr. Rohit Agarwal", expertise: "Physiotherapy", city: "Delhi" },
    {
      name: "Dr. Archana Ram",
      expertise: "Joint Mobilization",
      city: "Delhi",
    },
    { name: "Dr. Arav Malhotra", expertise: "Massage", city: "Delhi" },
  ];
  if (city === "guwahati") {
    res.status(200).json({ doctors: guwahatiDoctors });
  } else if (city === "bengaluru") {
    res.status(200).json({ doctors: bengaluruDoctors });
  } else if (city === "mumbai") {
    res.status(200).json({ doctors: mumbaiDoctors });
  } else if (city === "delhi") {
    res.status(200).json({ doctors: delhiDoctors });
  } else {
    res.status(400).json({ message: "Please provide a valid city" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
