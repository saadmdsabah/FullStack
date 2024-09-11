const appEnv = process.env.APP_ENV || "development";

if (process.env.APP_ENV !== "production") {
  console.log("This script should only be run in Production Environment");
  process.exit();
}
