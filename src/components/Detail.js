import React,{useState} from 'react'
import {Card,Container,CardDeck,Button} from 'react-bootstrap'


class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            content:''
        }
        this.handleBuy = this.handleBuy.bind(this);
    }
    componentWillMount=()=>{
        var content = ''
        if(window.localStorage && window.localStorage.getItem('content')){
            content = JSON.parse(window.localStorage.getItem('content'))
        }
        this.setState({
            content:content
        });
    }
    handleBuy(){
        console.log("bought!")
    }
    render(){
    return (
        <div style={{margin:"20px"}}>
            <Container>
            <CardDeck>
                {Object.keys(this.state.content).map((item,i)=>(
                    <Card>
                        <Card.Img variant="top" src={Buffer(this.state.content[item].image).toString('utf8')} />
                        <Card.Body>
                        <Card.Title>{this.state.content[item].subcat}</Card.Title>
                        <Card.Text>
                            {this.state.content[item].descr}
                        </Card.Text>
                            <Button variant="success" onClick={this.handleBuy}>Buy</Button>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Price: &#8377; {this.state.content[item].price}</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardDeck>
            </Container>
        </div>
    )
    }
}

export default Detail
