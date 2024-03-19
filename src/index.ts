import { Server } from "./rest-api";
import {default as user} from "./modules/user";

function __main__() {
    Server.start([user]);
}

__main__();
