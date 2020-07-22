import React from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import { fetchAuthorPosts } from '../../Data/fetch';

class Author extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetchAuthorPosts(this.props.id)
      .then(data => {
        this.setState({ posts: data })
      })
  }
  render() {
    return (
      <Row>
        <Col m={12} s={12}>
          <Collection>
            <CollectionItem >
              {`${this.props.name} (${this.state.posts.length})`}
            </CollectionItem>
          </Collection>
        </Col>
      </Row>
    )
  }
}
export { Author };