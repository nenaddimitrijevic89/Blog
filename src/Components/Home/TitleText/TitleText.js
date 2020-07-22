import React from 'react';
import { TextInput } from 'react-materialize';

const TitleText = ({ title, changeHandler }) => {
    const change = (event) => {
        let text = event.target.value;
        changeHandler(text)
    }
    return (
        <TextInput
            type="text"
            name="title"
            value={title}
            onChange={change}
            id="TextInput-4"
            label="Post title"
        />
    )
}

export { TitleText };