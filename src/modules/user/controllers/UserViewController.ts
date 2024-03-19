import { DELETE, GET, POST } from "../../../rest-api";
import { UserService } from "../services/UserService";

export default class UserViewController {
    private static service: UserService;

    public static init(service: UserService) {
        UserViewController.service = service;
    }

    @POST("/user")
    public static async post(request, response): Promise<void> {
        const { service = null } = UserViewController;
        const newUser = request.body;
        const user = await service.saveUser(newUser);
        response.status(201);
        response.send({statusCode: 201, data: user});
    }

    @GET("/user/:id")
    public static async getOne(request, response): Promise<void> {
        const { service = null } = UserViewController;
        const { id = "" } = request.params;
        const user = await service.getUser(id);
        response.status(200);
        response.send({statusCode: 200, data: user});
    }

    @GET("/user")
    public static async get(request, response): Promise<void> {
        const { service = null } = UserViewController;
        const users = await service.getUsers();
        response.status(200);
        response.send({statusCode: 200, data: users});
    }

    @DELETE("/user/:id")
    public static async delete(request, response): Promise<void> {
        const { service = null } = UserViewController;
        const { id = "" } = request.params;
        await service.removeUser(id);
        response.status(200);
    }
}