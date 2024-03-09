import { Controller, Request } from "@lunoxjs/core";
import { DB } from "@lunoxjs/eloquent";
import Todo from "app/Model/Todo";

class TodoController extends Controller {

  async index(req: Request) {
    console.log("index");
    return await Todo.query();
  }

  async findOne(req: Request){    
    console.log("find");
    const id = req.get("id");
    return await Todo.query().where({id}).first();
  }

  async save(req:Request) {
    console.log("save");
    return '{action: "save"}';
  }

  async update(req:Request) {
    console.log("update");
    return '{action: "update"}';
  }
}

export default TodoController;
