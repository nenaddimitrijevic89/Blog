import React from 'react';
import { Textarea, Icon } from 'react-materialize';

const ContentText = ({ post, changeHandler }) => {
    const change = (event) => {
        let text = event.target.value;
        changeHandler(text)
    }
    return (
        <Textarea
            type="text"
            name="post"
            value={post}
            onChange={change}
            icon={<Icon>mode_edit</Icon>}
            id="Textarea-12"
        />
    )
}

export { ContentText }