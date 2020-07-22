import React from 'react';
import { Row, Col, Card } from 'react-materialize';

const AuthorCompany = ({ name, activity }) => {
    return (
        <Row>
            <Col m={8} offset="m2" s={12}>
                <Card className="blue-grey darken-1"
                    textClassName="white-text">
                    <h5><i className='fa fa-industry'></i> Company</h5>
                    <h6>{`name: ${name}`}</h6>
                    <h6>{`activities: ${activity}`}</h6>
                </Card>
            </Col>
        </Row>
    )
}

export { AuthorCompany };