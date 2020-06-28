const router = require("express").Router();
const db = require("../models/index.js");
const mongoose = require("mongoose");

router.post("/api/workouts", ({ body }, res) => {
    // console.log("testing...")
    // console.log(body)
  db.Workout.create(body)
    .then(dbWorkout => {
        // console.log('created')
        // console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
        console.log('errr')
        console.log(err)
      res.status(400).json(err);
    });
});

router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .populate("workouts")
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

/*======NO LONGER USING EXERCISE MODEL*/
// router.post("/api/exercise", ({ body }, res) => {
//   db.Exercise.create(body)
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
  
  module.exports = router;