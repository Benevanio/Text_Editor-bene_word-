import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import '../App.scss';
const Editor = ({placeholder}) => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    
    return (
        <div className="editor">
        <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
        />
        </div>
    )
}

export default Editor;