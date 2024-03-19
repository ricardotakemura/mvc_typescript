import { User } from "../../models/User";
import { UserRepository } from "../../repositories/UserRepository";
import { UserService } from "../UserService";

export default class UserBasicService implements UserService {

    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async saveUser(user: User): Promise<User> {
        return await this.repository.save(user);
    }

    async getUser(id: string): Promise<User> {
        return await this.repository.findById(id);
    }

    async getUsers(): Promise<User[]> {
        return await this.repository.findAll();
    }

    async removeUser(id: string): Promise<User> {
        return await this.repository.deleteById(id);
    }
}