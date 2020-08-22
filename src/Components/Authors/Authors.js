import React from 'react';
import { Header } from '../Header/Header';
import { Author } from './Author/Author';
import { Container } from 'react-materialize';
import style from './Authors.module.css';
import { Link } from 'react-router-dom';
import { authorsService } from '../../services/authorsService';
import { Loader } from '../Loader/Loader';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            isLoading: true
        }
    }

    componentDidMount() {
        authorsService.getAuthors()
            .then(data => {
                this.setState({ authors: data })
            })
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.isLoading
                    ? <Loader />
                    : <Container>
                        <h4 className={style.title}><i className='fa fa-user'></i> Authors</h4>
                        {this.state.authors.map(author =>
                            <Link to={`/authors/singleauthor/${author.id}`}>
                                <Author name={author.name} id={author.id} />
                            </Link>

                        )}
                    </Container>
                }
            </div>
        )
    }
}
export { Authors };