import React from 'react';
import { Header } from '../Header/Header';
import { TextInput, Textarea, Container, Icon, Button } from 'react-materialize';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            post: ''
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.post
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
        this.props.history.push('/posts')
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    clearState = () => {
        this.setState({ title: "", post: "" })
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h4 className="home__title">NEW POST</h4>
                    <form>
                        <h6>Title</h6>
                        <TextInput
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.changeHandler}
                            id="TextInput-4"
                            label="Post title"
                        />
                        <h6 className='home__content'>Content</h6>
                        <Textarea
                            type="text"
                            name="post"
                            value={this.state.post}
                            onChange={this.changeHandler}
                            icon={<Icon>mode_edit</Icon>}
                            id="Textarea-12"
                        />
                        <Button
                            onClick={this.clearState}
                            large
                            node="a"
                            style={{ marginRight: '5px' }}
                            waves="light"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={this.submitHandler}
                            type="submit"
                            large
                            node="Save"
                            style={{ marginRight: '5px' }}
                            waves="light"
                        >
                            Save
                    </Button>
                    </form>
                </Container>
            </div >
        )
    }
}

export { Home };