import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import unnamed from '../../../Images/unnamed.png';
import { Link } from "react-router-dom";
import style from './AuthorComponents.module.css';
import { goBack } from '../../../shared/utilities';

const AuthorInfo = ({ name, id, username, email, phone, website }) => {

    return (
        <Row>
            <Col m={8} offset="m2" s={12}>
                <i className={`${style.textColor} fa fa-arrow-left`} onClick={() => goBack()}> <span>Back</span></i>
                <Card className={style.background}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={unnamed} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <h5><i className="fa fa-user"></i> {name}</h5>
                    <h6>id: {id} </h6>
                    <h6>username: {username} </h6>
                    <h6><i className='fa fa-envelope'></i> {email} </h6>
                    <h6><i className='fa fa-phone'></i> {phone} </h6>
                    <h6><i className='fa fa-globe'></i> {website} </h6>
                </Card>
            </Col>
        </Row>
    )
}

export { AuthorInfo };