import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Numerate = () => {
    return (
        <div className="numerate">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
            <Pagination>
                {/* <Pagination.First /> */}
                {/* <Pagination.Prev /> */}
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                {/* <Pagination.Next /> */}
                {/* <Pagination.Last /> */}
            </Pagination>
            </Col>
            <Col></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Numerate
