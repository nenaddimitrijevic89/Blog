import React from 'react';
import { Header } from '../Header/Header';
import { fetchAuthors } from '../../Data/fetch';
import { Author } from './Author';
import { Container } from 'react-materialize';
import style from './Authors.module.css';
import { Link } from 'react-router-dom';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        fetchAuthors()
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