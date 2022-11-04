const { Schema, model } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      requried: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Your email was Wrong,please enter a valid email address",
      ],
    },
    // pupulate the thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // pupulate the friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// create a `friendCount` function to get the lkength of the friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the user model with userSchema
const User = model("User", userSchema);
module.exports = User;
