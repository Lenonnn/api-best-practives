const express = require("express");
const apicache = require("apicache");

// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

const router = express.Router();
const cache = apicache.middleware;

const workoutController = require("../../controllers/WorkOutController");
const recordController = require("../../controllers/recordController");

// router.get("/", (req, res) => {
//   res.send("Get all workouts");
// });

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     summary:
 *         Get all Workouts
 *     description:
 *         Get all Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The model of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Erros! Pleas contact the System Administrator"
 */
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

// router.get("/:workoutId", (req, res) => {
//   res.send("Get an existing workout");
// });

/**
 * @openapi
 * /api/v1/workouts/{id}:
 *   get:
 *     tags:
 *       - Workouts
 *     summary:
 *         Find Workout by ID
 *     description:
 *         Find Workout by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         description: The model of a workout passing some ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/WorkoutId"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "ID does not exist or could'nt be find"
 */
router.get("/:workoutId", workoutController.getOneWorkout);

/**
 * @openapi
 * /api/v1/workouts/{id}/records:
 *   get:
 *     tags:
 *       - Records
 *     summary:
 *         Find Recordos for Workout
 *     description:
 *         Find Workout Records by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         description: The records of a workout passing some ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Records2"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "ID does not exist or could'nt be find"
 */
router.get("/:workoutId/records", recordController.getRecordForWorkout);

// router.post("/", (req, res) => {
//   res.send("Create a new workout");
// });

/**
 * @openapi
 * /api/v1/workouts:
 *   post:
 *     tags:
 *       - Workouts
 *     summary:
 *         Create New Workout
 *     description:
 *         Create New Workout
 *     requestBody:
 *         description: Exampple to create a new workout
 *         content:
 *           application/json:
 *              schema: 
 *                  $ref: "#/components/schemas/CreateWorkout"
 *   responses:
 *       200:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Errors! Please contact the System Administrator"
 */
router.post("/", workoutController.createNewWorkout);

// router.patch("/:workoutId", (req, res) => {
//   res.send("Update an existing workout");
// });

/**
 * @openapi
 * /api/v1/workouts/{id}:
 *   patch:
 *     tags:
 *       - Workouts
 *     summary:
 *         Update a workout by ID
 *     description:
 *         Update a workout by ID
 *     requestBody:
 *         description: Choose a field to send an update
 *         content:
 *           application/json:
 *              schema: 
 *                  $ref: "#/components/schemas/UpdateWorkout"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/UpdateWorkout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Errors! Pleas contact the System Administrator"
 */
router.patch("/:workoutId", workoutController.updateOneWorkout);

// router.delete("/:workoutId", (req, res) => {
//   res.send("Delete an existing workout");
// });
/**
 * @openapi
 * /api/v1/workouts/{id}:
 *   delete:
 *     tags:
 *       - Workouts
 *     summary:
 *         Delete a workout by ID
 *     description:
 *         Delete a workout by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Delete a workout passing some ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
*         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Sucess
 *                 data:
 *                   type: object
 *                   properties:
 *                     info:
 *                       type: string
 *                       example: "Record was deleted"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Erros! Pleas contact the System Administrator"
 */
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
