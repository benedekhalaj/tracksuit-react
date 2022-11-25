import AppUser from "./app-user";

interface PlayerModel {
    id?: number,
    name: string,
    appUser: AppUser
}

export default PlayerModel;
