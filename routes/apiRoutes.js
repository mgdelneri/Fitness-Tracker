var db = require("../models");

module.exports = function(app) {

    // GET last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    });

    // POST a new workout
    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({type: "workout"});
            res.json(response);
        }
        catch(err) {
            console.log("There was an error when creating a workout: ", err)
        }
    });

    // PUT, or update, by adding an exercise to a workout
    app.put("/api/workout/:id", ({body, params}, res) => {
        const workoutId = params.id;
        let savedExercises = [];

        db.Workout.find({_id: workoutId})
            .then(dbWorkout => {
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body];
                console.log(allExercises);
                updateWorkouts(allExercises);
            })
            .catch (err => {
                res.json(err);
            });

        function updateWorkouts(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
                if(err) {
                    console.log(err)
                }
            })
        }
    })

    // GET workouts by range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
}