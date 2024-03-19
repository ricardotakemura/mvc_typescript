import UserViewController from "./controllers/UserViewController";
import UserCvsRepository from "./repositories/impl/UserCvsRepository";
import UserBasicService from "./services/impl/UserBasicService";

export default () => {
    UserViewController.init(new UserBasicService(new UserCvsRepository()));
};