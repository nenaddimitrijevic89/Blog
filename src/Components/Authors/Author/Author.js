import React from 'react';
import { Row, Col } from 'react-materialize';
import { postsService } from '../../../services/postsService';
import style from './Author.module.css';

class Author extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    postsService.getAuthorPosts(this.props.id)
      .then(data => {
        this.setState({ posts: data })
      })
  }

  render() {
    return (
      <Row>
        <Col m={12} s={12} className={style.background}>
          <h5 className={style.margin}>
            <i className={`fa fa-user ${style.white}`}></i> {`${this.props.name} (${this.state.posts.length} posts)`}
          </h5>
        </Col>
      </Row>
    )
  }
}
export { Author };