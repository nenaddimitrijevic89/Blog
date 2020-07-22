import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import style from './AuthorComponents.module.css';

const AuthorAddress = ({ street, city, zipcode, lat, lng }) => {
    return (
        <Row>
            <Col m={8} offset="m2" s={12}>
                <Card className={style.background}>
                    <h5><i class="fa fa-map-marker"></i> ADDRESS</h5>
                    <h6>{`street: ${street}`}</h6>
                    <h6>{`city: ${city}`}</h6>
                    <h6>{`zipcode: ${zipcode}`}</h6>
                    <iframe
                        width="100%"
                        height="100%"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title={street}
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://maps.google.com/maps?q=${lat},${lng}&z=5&output=embed`}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export { AuthorAddress };