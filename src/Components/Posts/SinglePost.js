import React from 'react';
import { postsService } from '../../services/postsService';
import { Row, Col, Container, Card, Icon } from 'react-materialize';
import style from './Posts.module.css';
import { Link } from 'react-router-dom';
import { Post } from './Post';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { goBack } from '../../shared/utilities';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: [],
            authorPosts: [],
            showAllPosts: false,
            isLoading: true
        }
    }

    componentDidMount() {
        postsService.getSinglePost(this.props.match.params.id)
            .then(data => {
                this.setState({ singlePost: data })
                postsService.getAuthorPosts(this.state.singlePost.userId)
                    .then(data => {
                        this.setState({ authorPosts: data })
                    })
            })
            .finally(() => this.setState({ isLoading: false }))
    }

    readPost = (post) => {
        this.setState({ singlePost: post })
    }

    showPosts = () => {
        this.setState(prevState => ({ showAllPosts: !prevState.showAllPosts }))
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.isLoading
                    ? <Loader />
                    : <Container>
                        <h6 className={style.back} onClick={() => goBack()}><i class="fa fa-arrow-left"></i> Back</h6>
                        <h4 className={style.singlePostTitle}>SINGLE POST</h4>
                        <Link to={`/authors/singleauthor/${this.state.singlePost.userId}`}><h5 className={style.link}><i className="fa fa-user"></i> Author</h5></Link>
                        <Row>
                            <Col
                                m={12}
                                s={12}
                            >
                                <Card
                                    id='po'
                                    className={style.card}
                                    closeIcon={<Icon>close</Icon>}
                                    revealIcon={<Icon>more_vert</Icon>}
                                >
                                    <h4><i className='fa fa-file-text'></i> post {this.state.singlePost.id}</h4>
                                    <h5>"{this.state.singlePost.title}"</h5>
                                    <h6>{this.state.singlePost.body}</h6>
                                </Card>
                            </Col>
                        </Row>
                        {this.state.showAllPosts
                            ? <><h5 className={style.textColor} onClick={this.showPosts}><i className="fa fa-arrow-up"></i> hide posts</h5>
                                {this.state.authorPosts.map(post =>
                                    <Link to={`/posts/singlepost/${post.id}`} key={post.id} onClick={() => this.readPost(post)}><Post
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                    /></Link>
                                )}
                            </>
                            : <><h5 className={style.textColor} onClick={this.showPosts}><i className="fa fa-arrow-down"></i> show more posts from same author</h5>
                            </>
                        }
                    </Container>
                }
            </div>
        )
    }
}

export { SinglePost };