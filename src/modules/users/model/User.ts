import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  created_at: Date;
  updated_at: Date;
  admin: boolean;

  constructor(public name: string = "", public email: string = "") {
    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }

  turnAdmin(): void {
    this.admin = true;
    this.updated_at = new Date();
  }
}

export { User };
