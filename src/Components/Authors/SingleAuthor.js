import React from 'react';
import { fetchSingleAuthor } from '../../Data/fetch';
import { Container } from 'react-materialize';
import './Authors.css'
import { AuthorInfo } from './AuthorComponents/AuthorInfo';
import { AuthorAddress } from './AuthorComponents/AuthorAddress';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleAuthor: null
        }
    }
    componentDidMount() {
        fetchSingleAuthor(this.props.match.params.id)
            .then(data => {
                this.setState({ singleAuthor: data })
            })

    }

    renderInfo = () => (

        <>
            <AuthorInfo
                name={this.state.singleAuthor.name}
                id={this.state.singleAuthor.id}
                username={this.state.singleAuthor.username}
                website={this.state.singleAuthor.website}
                phone={this.state.singleAuthor.phone}
                email={this.state.singleAuthor.email}
            />
            <AuthorAddress
                street={this.state.singleAuthor.address.street}
                lat={this.state.singleAuthor.address.geo.lat}
                lng={this.state.singleAuthor.address.geo.lng}
                city={this.state.singleAuthor.address.city}
                zipcode={this.state.singleAuthor.address.zipcode}
            />
        </>


    )

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h4 className="singleAuthor__title">SINGLE AUTHOR</h4>
                    {this.state.singleAuthor && this.renderInfo()}
                </Container>
            </div>
        )
    }

}

export { SingleAuthor };                                     