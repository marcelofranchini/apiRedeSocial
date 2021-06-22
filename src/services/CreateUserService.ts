import { getCustomRepository, getRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;

}
class CreateUserService{
    async execute({ ...data }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories);

        if (!data.email) throw new Error('Email incorreto');

        const userExist = await userRepository.findOne({ email: data.email });


        if (userExist) throw new Error('Usuário já existe');

        const user = userRepository.create(data);

        await userRepository.save(user);

        return user;
    }

}

export { CreateUserService };