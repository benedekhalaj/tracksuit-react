import MatchModel from "../interfaces/match-model";
import generalService from "./general-service";

const getMatches = async (appUserId: number): Promise<MatchModel[]> => {
    const url: string = `http://localhost:8080/api/v0/matches/app-user/${appUserId}`;
    return await generalService.getFetch(url);
}

const methods = {
    getMatches: getMatches
}

export default methods;
