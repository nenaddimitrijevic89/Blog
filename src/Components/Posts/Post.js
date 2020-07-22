import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';
import style from './Posts.module.css';

const Post = ({ title, id }) => {
    return (
        <Row>
            <Col m={12} s={12}>
                <Card
                    className={style.background}
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <h5><i className='fa fa-file-text'></i> {id}</h5>
                    <h5>"{title}"</h5>
                </Card>
            </Col>
        </Row >
    )
}

export { Post };