import { Controller, Request } from "@lunoxjs/core";
import Todo from "app/Model/Todo";

class TodoController extends Controller {

  async index(req: Request) {
    console.log("index");
    return await Todo.query();
  }

  async findOne(req: Request, id:number){    
    return await Todo.query().where({id}).first();
  }

  async save(req:Request) {    
    /* const _input = req.all();
    delete _input["id"]; */
    const validated = await req.validate(Todo.rules);
    return await Todo.query().insertAndFetch(validated);
  }

  async update(req:Request, id:number) {
    const validated = await req.validate(Todo.rules);
    return await Todo.query().patchAndFetchById(id, validated).where({id})
  }

  async delete(req:Request, id:number) {
    return await Todo.query().delete().where({id})
  }

  async markCompleted(req:Request, id:number, isCompleted = true){
    return await Todo.query().patchAndFetchById(id, {is_completed: isCompleted}).where({id})
  }

  async toggleCompleted(req:Request, id:number){
    return await Todo.query().patchAndFetchById(id, {is_completed: Todo.raw("not is_completed")}).where({id})
  }

  async toggleStarred(req:Request, id:number){
    return await Todo.query().patchAndFetchById(id, {is_starred: Todo.raw("not is_starred")}).where({id})
  }
}

export default TodoController;
