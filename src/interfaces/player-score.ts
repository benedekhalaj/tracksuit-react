import CategoryScore from "./category-score";

interface PlayerScore {
    playerName: string,
    categoryScores: CategoryScore[],
    totalScore: number
}

export default PlayerScore;
