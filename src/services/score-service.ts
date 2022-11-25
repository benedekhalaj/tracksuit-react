import MatchScore from "../interfaces/match-score";

async function getScores(): Promise<MatchScore> {
    const response = await fetch("http://localhost:8080/api/v0/scores");
    return await response.json();
}

const methods = {
    getScores: getScores
};

export default methods;
