import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';

const Post = ({ title, id }) => {
    return (
        <Row>
            <Col m={12} s={12}>
                <Card
                    className="blue-grey darken-1"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title={`Post ${id}`}
                >
                    <p>{title}</p>
                </Card>
            </Col>
        </Row>
    )
}

export { Post };