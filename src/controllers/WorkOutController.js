const workoutService = require("../services/workoutService");

//Get all records
const getAllWorkouts = (req, res) => {
  const { mode } = req.query;
  try {
    const allWorkouts = workoutService.getAllWorkouts({ mode });
    res.send({ status: "OK", data: allWorkouts });
    console.log("Get all workouts was acessed");
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// Get one record by id
const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    //const workout = workoutService.getOneWorkout();
    const workout = workoutService.getOneWorkout(workoutId);
    //res.send("Get an existing workout");
    res.send({ status: "OK", data: workout });
    console.log("Get an existing workout was acessed");
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// Create new record
const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
    console.log("Create a new workout was acessed");
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    console.log(
      "Attempt to create a new workout was accessed with failure ... "
    );
  }
};

// Update a record
const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    //return;
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }

  try{

  //const updatedWorkout = workoutService.updateOneWorkout();
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  //res.send("Update an existing workout");
  res.send({ status: "OK", data: updatedWorkout });
  console.log("Update an existing workout was acessed");

  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });

  }
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    //return;
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }

try{
  //workoutService.deleteOneWorkout();
  workoutService.deleteOneWorkout(workoutId);
  //res.send("Delete an existing workout");
  res.status(204).send({ status: "OK" });
  console.log("Delete an existing workout was acessed");
  
} catch (error){
  res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
}
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,

};
