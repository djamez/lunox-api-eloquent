import { Seeder } from "@lunoxjs/eloquent";
import UserSeeder from "./UserSeeder";
import TodoSeeder from "./TodoSeeder";

class DatabaseSeeder extends Seeder {
  public async run() {
    await this.call(UserSeeder);
    await this.call(TodoSeeder)
  }
}

export default DatabaseSeeder;
