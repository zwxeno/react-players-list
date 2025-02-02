import Card from "react-bootstrap/Card";
import "./Team.css";


const Team = ({team}) => {
    return <Card.Text>
        Team: {team}
    </Card.Text>
}

export default Team;