const mongoose = require("mongoose");
// -------------------------------------------------------------------------
// Sample User Model:
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// -------------------------------------------------------------------------
// Export:
module.exports = User = mongoose.model("user", UserSchema);
