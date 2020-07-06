const router = require("express").Router();
const db = require("../models/index.js");
const mongoose = require("mongoose");

router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

router.put("/api/workouts/:id", function (req, res) {
    console.log(req.params)
    const id = req.params.id;
    if (id) {
        db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
    };
});

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

module.exports = router;