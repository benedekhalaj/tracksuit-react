import {FunctionComponent, useEffect, useState} from "react";
import PlayerModel from "../../interfaces/player-model";
import playerService from "../../services/player-service";
import Player from "../player/Player";
import {Button} from "@mui/material";
import player from "../player/Player";

const Players: FunctionComponent = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);

    const getNewPlayerData = () => {
        const playerName: string | null = prompt("Enter Player Name");
        const appUserId: number = 1;
        if (playerName !== null) {
            createPlayer({
                name: playerName,
                appUser: {id: appUserId}
            })
        }
    }

    const createPlayer = (playerModel: PlayerModel) => {
        playerService.createPlayer(playerModel).then(player => setPlayers([player, ...players]))
    }

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
            <Button onClick={() => getNewPlayerData()}>Add new Player</Button>
            {players.map(player => <Player key={player.id} player={player} onDelete={(deletePlayer)}></Player>)}
        </div>
    );
}

export default Players;
