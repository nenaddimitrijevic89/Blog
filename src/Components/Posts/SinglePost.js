import React from 'react';
import { fetchSinglePost, fetchAuthorPosts } from '../../Data/fetch';
import { Row, Col, Container, Card, Icon } from 'react-materialize';
import style from './Posts.module.css';
import { Link } from 'react-router-dom';
import { Post } from './Post';
import { Header } from '../Header/Header';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: [],
            authorPosts: [],
            showAllPosts: false
        }
    }

    componentDidMount() {
        fetchSinglePost(this.props.match.params.id)
            .then(data => {
                this.setState({ singlePost: data })
                fetchAuthorPosts(this.state.singlePost.userId)
                    .then(data => {
                        this.setState({ authorPosts: data })
                    })
            })

    }

    showPosts = () => {
        this.setState(prevState => ({ showAllPosts: !prevState.showAllPosts }))
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Link to="/posts"><h6 className={style.back}><i class="fa fa-arrow-left"></i> Back</h6></Link>
                    <h4 className={style.singlePostTitle}>SINGLE POST</h4>
                    <Link to={`/authors/singleauthor/${this.state.singlePost.userId}`}><h5 className={style.link}><i className="fa fa-user"></i> Author</h5></Link>
                    <Row>
                        <Col
                            m={12}
                            s={12}
                        >
                            <Card
                                className={style.card}
                                closeIcon={<Icon>close</Icon>}
                                revealIcon={<Icon>more_vert</Icon>}
                            >
                                <h4><i className='fa fa-file-text'></i> {this.state.singlePost.id}</h4>
                                <h5>"{this.state.singlePost.title}"</h5>
                                <h6>{this.state.singlePost.body}</h6>
                            </Card>
                        </Col>
                    </Row>
                    {this.state.showAllPosts
                        ? <><h5 className={style.textColor} onClick={this.showPosts}><i className="fa fa-arrow-up"></i> hide posts</h5>
                            {this.state.authorPosts.map(post =>
                                <Link to={`/posts/singlepost/${post.id}`}><Post
                                    id={post.id}
                                    title={post.title}
                                /></Link>
                            )}
                        </>
                        : <><h5 className={style.textColor} onClick={this.showPosts}><i className="fa fa-arrow-down"></i> more posts from same author</h5>
                            {this.state.authorPosts.slice(0, 3).map(post =>
                                <Link to={`/posts/singlepost/${post.id}`}><Post
                                    id={post.id}
                                    title={post.title}
                                /></Link>
                            )}
                        </>
                    }
                </Container>
            </div>
        )
    }
}

export { SinglePost };