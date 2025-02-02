import Card from "react-bootstrap/Card";
import JerseyNumber from "./JerseyNumber";
import Age from "./Age";
import Image from "./Image";
import Name from "./Name";
import Team from "./Team";
import Nationality from "./Nationality";
import "./Player.css";

const Player = ({name,imageURL,team,jerseyNumber,age,nationality}) => {
    return (
        <div style={{width: '18rem'}}>
            <Card className={"m-1 bg-body-secondary shadow-none hover-shadow-lg"}>
                <Image imageURL={imageURL}/>
                <Card.Body>
                    <JerseyNumber jerseyNum={jerseyNumber}/>
                    <Name playerName={name}/>
                    <Nationality nationality={nationality}/>
                    <Team team={team}/>
                    <Age age={age}/>
                </Card.Body>
            </Card>
        </div>
    );
}

// TODO: default values won't load :(
Player.defaultProps = {
    name : "N/A",
    imageURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg/v1/fill/w_300,h_300,q_75,strp/default_user_icon_4_by_karmaanddestiny_de7834s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwIiwicGF0aCI6IlwvZlwvMjcxZGVlYTgtZTI4Yy00MWEzLWFhZjUtMjkxM2Y1ZjQ4YmU2XC9kZTc4MzRzLTY1MTViZDQwLThiMmMtNGRjNi1hODQzLTVhYzFhOTVhOGI1NS5qcGciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.W7L0Rf_YqFzX9yxDfKtIMFnnRFdjwCHxi7xeIISAHNM",
    team : "N/A",
    jerseyNumber : "00",
    age : "N/A",
    nationality: "N/A",
}

// TODO: fix weird WEBPACK error
// PlayerList.propTypes = {
//     name : propTypes.string,
//     imageURL: propTypes.string,
//     team : propTypes.string,
//     jerseyNumber : propTypes.string,
//     age : propTypes.number,
//     nationality: propTypes.string,
// }

export default Player;