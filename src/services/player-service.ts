import PlayerModel from "../interfaces/player-model";
import generalService from "./general-service";

const getPlayers = async (): Promise<PlayerModel[]> => {
    const url: string = "http://localhost:8080/api/v0/players";
    return await generalService.getFetch(url);
}

const createPlayer = async (playerModel: PlayerModel): Promise<PlayerModel> => {
    const url: string = "http://localhost:8080/api/v0/players";
    return await generalService.postFetch(url, {
        name: playerModel.name,
        appUserId: playerModel.appUser.id
    });
}

const deletePlayer = async (id: number) => {
    const url: string = `http://localhost:8080/api/v0/players/${id}`
    await generalService.deleteFetch(url);
}

const methods = {
    getPlayers: getPlayers,
    createPlayer: createPlayer,
    deletePlayer: deletePlayer
};

export default methods;
