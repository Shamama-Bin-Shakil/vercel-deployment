import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (event) => {
        event.preventDefault();
        if (!title || !desc) {
            alert('Title and Description is required');
        }
        props.addTodo(title, desc);
    }
    return (
        <div className='container my-5'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="sno" className="form-label">Sno</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="sno" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="title" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AddTodo
