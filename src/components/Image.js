import Card from "react-bootstrap/Card";


const Image = ({imageURL}) => {
    return <Card.Img src={imageURL} variant="top" className={"p-1 rounded-4"} style={{height: 280,width: 280}} />
}

export default Image;