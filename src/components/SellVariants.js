import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Holder from './Holder'
import Holder2 from './Holder2'
import Badge from 'react-bootstrap/Badge'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'

const SellVariants = () => {
    const handleClick=()=>{
        console.log("hi!")
    }
    return (
        <div>
            <h2>
                <Badge variant="success"> What waste are you buying? </Badge>
            </h2>
            <div className="style">
                <Container style={{maxWidth:"960px"}}>
                    <CardDeck>
                        <Holder2 name="liquid"/>
                        <Holder2 name="organic"/>
                        <Holder2 name="recyclable"/>
                        <Holder2 name="electronic"/>
                        <Holder2 name="pharmaceutical"/>
                        <Holder2 name="clothing"/>
                        <Holder2 name="inert"/>
                        <Holder2 name="solid"/>
                        <Holder2 name="hazardous"/>
                    </CardDeck>
                </Container>
            </div>
        </div>
    )
}

export default SellVariants
