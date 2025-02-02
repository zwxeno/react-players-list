import Card from "react-bootstrap/Card";


const JerseyNumber = ({jerseyNum}) => {
    return <Card.Text style={{'font-weight': 'bold', 'font-size': 'x-large', 'margin-left': '40%'}}>
        {jerseyNum}
    </Card.Text>
}

export default JerseyNumber;