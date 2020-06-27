const router = require("express").Router();
const db = require("../models/index.js");

router.post("/api/workout", ({ body }, res) => {
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

router.post("/api/exercise", ({ body }, res) => {
  db.Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// router.post("/api/transaction/bulk", ({ body }, res) => {
//     Transaction.insertMany(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   router.get("/api/transaction", (req, res) => {
//     Transaction.find({})
//       .sort({ date: -1 })
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
  module.exports = router;