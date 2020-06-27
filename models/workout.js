const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        duration:{
            type: Number,
            required: true
        },
        weight:{
            type: Number,
            required: true
        },
        reps:{
            type: Number,
            required: true
        },
        sets:{
            type: Number,
            required: true
        }
        }
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: "Exercise"
    // }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
