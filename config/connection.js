const mongoose = require("mongoose");

// Wrap mongoose around local connection to MongoDB

mongoose.conenct("mongodb://localhost:27017/userThoughtDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
