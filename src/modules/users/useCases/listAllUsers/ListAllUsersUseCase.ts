import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const authorizedUser = this.usersRepository.findById(user_id);

    if (!authorizedUser || !authorizedUser.admin) {
      throw new Error("Unauthorized.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
