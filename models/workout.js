const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create schema for workouts
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },

        exercises: [
            {
                type: {
                    type: String, 
                    trim: true, 
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true, 
                    required: "Enter an exercise name"
                },
                duration: {
                    type: Number, 
                    required: "Enter duration of exercise, in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number 
                },
                distance: {
                    type: Number 
                }
            }
        ]
    },
    {
        toJSON: {
            // Allows for inclusion of any virtual properties added, as seen below
            virtuals: true 
        }
    }
);

// Adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
    // Get the sum of the duration of all exercises
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

