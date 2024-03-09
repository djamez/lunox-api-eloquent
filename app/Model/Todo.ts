import { Model } from "@lunoxjs/eloquent";

class Todo extends Model {

  protected static table = "todos";
  protected static primaryKey = "id";
  protected static timestamps = true;

  static rules = {
    "title":"required|string|minLength:5",
    "description": "string",
    //"due_date": "datetime",
    "is_starred": "boolean",
    "is_completed": "boolean",
}
  
}
export default Todo;
