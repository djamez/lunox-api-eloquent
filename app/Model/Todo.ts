import { Model } from "@lunoxjs/eloquent";

class Todo extends Model {

  protected static table = "todos";
  protected static primaryKey = "id";
  protected static timestamps = true;
  
}
export default Todo;
