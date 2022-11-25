import {FunctionComponent, useEffect, useState} from "react";
import PlayerModel from "../../interfaces/player-model";
import playerService from "../../services/player-service";
import Player from "../player/Player";

const Players: FunctionComponent = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);

    const deletePlayer = (id: number): void => {
        const newPlayers: PlayerModel[] = players.filter(player => player.id !== id);
        playerService.deletePlayer(id);
        setPlayers(newPlayers);
    }

    useEffect(() => {
        playerService.getPlayers().then(players => setPlayers(players));
    }, [setPlayers])

    return (
        <div>
            <h1>PLAYERS</h1>
            {players.map(player => <Player key={player.id} player={player} onDelete={(deletePlayer)}></Player>)}
        </div>
    );
}

export default Players;
