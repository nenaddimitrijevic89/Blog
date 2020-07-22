import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import unnamed from '../../../Images/unnamed.png';
import { Link } from "react-router-dom";

const AuthorInfo = ({ name, id, username, email, phone, website }) => {
    return (
        <Row>
            <Col m={8} offset="m2" s={12}>
                <Link className="singleAuthor__back" to="/authors"><i class="fa fa-arrow-left"></i> Back</Link>
                <Card className="singleAuthor__card blue-grey darken-1"
                    textClassName="white-text"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={unnamed} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <h5>{name}</h5>
                    <h6>id: {id} </h6>
                    <h6>username: {username} </h6>
                    <h6>email: {email} </h6>
                    <h6>phone: {phone} </h6>
                    <h6>website: {website} </h6>
                </Card>
            </Col>
        </Row>
    )
}

export { AuthorInfo };