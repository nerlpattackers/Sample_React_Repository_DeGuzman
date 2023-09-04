import {Button, Card} from 'react-bootstrap';

const Griditems = (props) => {
    return ( 
        <>
        <div className="col-4">
            <Card className="h-100">
              <Card.Img variant="top" src={props.imageFile} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                      {props.desc}
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </>
     );
}
 
export default Griditems;