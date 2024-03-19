import { User } from "../models/User"

export interface UserService {
    saveUser(user: User): Promise<User>;
    getUser(id: string): Promise<User>;
    getUsers(): Promise<User[]>;
    removeUser(id: string): Promise<User>;
}