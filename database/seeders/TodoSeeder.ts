import { DB } from "@lunoxjs/eloquent";
import { Seeder } from "@lunoxjs/eloquent";

class TodoSeeder extends Seeder {
  public async run() {
    await DB.table("todos").truncate();
    await DB.table("todos").insert([
        {title: "Create a migration"},
        {title: "Create a model"},
        {title: "Create a controller"},
        {title: "Add controller actions to the router"},
    ]);
  }
}
export default TodoSeeder;
