import React, { Component } from 'react'
import {Container,Button,ButtonToolbar,Table,Jumbotron,Row,Col} from 'react-bootstrap'

class Feedback extends Component {
    render() {
        return (
            <div>
            <Container className="body">
                <div className="body2">
                    Its time for feedback
                </div>
                <h4>Your opinion is important to us. This way we can keep improving our website.</h4>
                <Table>
                    <tbody>
                    <tr>
                        <td>
                Your overall satisfaction of the site.<br/>
                <ButtonToolbar style={{justifyContent:"center"}}>
                    <Button className="btn-circle btn-md" variant="outline-info">1</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">2</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">3</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">4</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">5</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">6</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">7</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">8</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">9</Button>
                    <Button className="btn-circle btn-md" variant="outline-info">10</Button>
                </ButtonToolbar>
                <div>
                <div style={{float:"left"}}>not satisfied</div><div style={{float:"right"}}>really satisfied</div>
                </div>
                </td>
                </tr>
                <tr>
                <td>
                Choose a subject and give us your opininon:<br/>
                <Row>
                    <Col><i class="material-icons">help_outline</i>Question</Col>
                    <Col><i class="material-icons">web</i>Website</Col>
                    <Col><i class="material-icons">shopping_cart</i>Products</Col>
                </Row>
                <Row>
                    <Col><i class="material-icons">record_voice_over</i>Suggestions</Col>
                    <Col><i class="material-icons">done</i>Compliments</Col>
                    <Col><i class="material-icons">add</i>Other</Col>
                </Row>
                </td>
                </tr>
                </tbody>
                <Button>Submit</Button>
                </Table>
            </Container>
            <h2>
                    Page is under construction, Please bear some patience.......
                </h2>
            </div>
        )
    }
}

export default Feedback