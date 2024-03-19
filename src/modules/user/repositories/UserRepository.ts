import { User } from "../models/User";

export interface UserRepository {
    save(user: User): Promise<User>;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    deleteById(id: string): Promise<User>;
}

