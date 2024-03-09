import { Route, Response } from "@lunoxjs/core/facades";
import TodoController from "app/Http/Controllers/TodoController";
import WelcomeController from "app/Http/Controllers/WelcomeController";
import User from "app/Model/User";

Route.get("/", [WelcomeController, "home"]);

Route.prefix("/api").group(() => {
  Route.get("/", () => {
    return Response.make({
      success: true,
      message: "OK",
    });
  });

  Route.get("/todo/:id", [TodoController, "findOne"]);
  Route.get("/todo", [TodoController, "index"]);
  Route.post("/todo", [TodoController, "save"]);
  Route.patch("/todo/:id", [TodoController, "update"]);
  Route.delete("/todo/:id", [TodoController, "delete"]);

  Route.post("/todo/:id/completed", [TodoController, "markCompleted"]);
  Route.post("/todo/:id/completed/toggle", [TodoController, "toggleCompleted"]);
  Route.post("/todo/:id/starred/toggle", [TodoController, "toggleStarred"]);

  Route.get("/users", async () => {
    const users = await User.query();
    return Response.make({
      success: true,
      message: "User List",
      data: { users },
    });
  });
});
