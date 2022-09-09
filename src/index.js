/** Variables */

const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");

// const v1Router = require("./v1/routes");
const v1WorkoutRouter = require("./v1/routes/WorkOutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/routes/swagger");

const app = express();

const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

/* API ROUTES */

// app.get("/", (req, res) => {
//     res.send("<h2>It's Working!</h2>");
// });

app.use(bodyParser.json());
// app.use("/api/v1", v1Router);

// app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter); /* /api/v1/workouts/ */

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
