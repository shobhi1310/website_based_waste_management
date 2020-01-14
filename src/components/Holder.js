import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Holder = () => {
    return (
        <div id="holder">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/99/The_Rangoli_of_Lights.jpg" />
            <Card.Body>
                <Card.Title>Diwali</Card.Title>
                <Card.Text>
                Do we need it?
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>some property</ListGroupItem>
                    <ListGroupItem>some property</ListGroupItem>
                </ListGroup>     
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Holder