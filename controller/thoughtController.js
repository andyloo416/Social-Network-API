const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find().then((thought) =>
      res.json(thought).catch((err) => res.status(500).json(err))
    );
  },

  // get one thought by id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .then(dbThoughtData)
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "no thought with that id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create thought to a user
  createThougght(req, res) {
    Thought.create(req.body).then((thought) =>
      res.json(thought).catch((err) => res.status(500).json(err))
    );
  },

  // update thought by id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    ).then((Thought) =>
      !Thought
        ? res.status(404).json({ message: "no thought with this id" })
        : res.json(Thought)
    );
  },

  // deelete thought
  deleteThought(req,res){
    Thought.findOneAndRemove(
        {_id: req.params.id},
        
    )
  }

  // add reaction
  // delete reaction
  //
};
