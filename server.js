const express = require("express");
// const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/apiRoutes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api", routes);

//Connect to MongoDb
// mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds031618.mlab.com:31618/heroku_rc5l1st2", {useUnifiedTopology: true});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./built/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
