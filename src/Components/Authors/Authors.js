import React from 'react';
import { Header } from '../Header/Header';
import { Author } from './Author/Author';
import { Container } from 'react-materialize';
import style from './Authors.module.css';
import { Link } from 'react-router-dom';
import { authorsService } from '../../services/authorsService';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        authorsService.getAuthors()
            .then(data => {
                this.setState({ authors: data })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h4 className={style.title}>AUTHORS</h4>
                    {this.state.authors.map(author =>
                        <Link to={`/authors/singleauthor/${author.id}`}>
                            <Author name={author.name} id={author.id} />
                        </Link>

                    )}
                </Container>
            </div>

        )
    }
}
export { Authors };