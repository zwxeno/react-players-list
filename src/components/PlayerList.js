import Player from "./Player";
import propTypes from "prop-types";
import players from "../Players";


const PlayerList = () => {
    return (
        <div className={'flex-row d-flex'}>
            {players.map(
                (player, index) => (
                    <Player key={index} {...player}/>
                )
            )}
        </div>
    );
}

export default PlayerList;