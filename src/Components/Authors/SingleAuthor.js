import React from 'react';
import { Container } from 'react-materialize';
import style from './Authors.module.css';
import { AuthorInfo } from './AuthorComponents/AuthorInfo';
import { AuthorAddress } from './AuthorComponents/AuthorAddress';
import { Header } from '../Header/Header';
import { AuthorCompany } from './AuthorComponents/AuthorCompany';
import { authorsService } from '../../services/authorsService';

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleAuthor: null
        }
    }
    componentDidMount() {
        authorsService.getSingleAuthor(this.props.match.params.id)
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
                lat={this.state.singleAuthor.address.lat}
                lng={this.state.singleAuthor.address.lng}
                city={this.state.singleAuthor.address.city}
                zipcode={this.state.singleAuthor.address.zipcode}
            />
            <AuthorCompany
                name={this.state.singleAuthor.company.name}
                activity={this.state.singleAuthor.company.bs}
            />
        </>
    )

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h4 className={style.title}>SINGLE AUTHOR</h4>
                    {this.state.singleAuthor && this.renderInfo()}
                </Container>
            </div>
        )
    }

}

export { SingleAuthor };                                     