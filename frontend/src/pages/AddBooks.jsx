import React, { useState } from 'react';
import axios from 'axios';

const AddBooks = () => {
    const [data, setData] = useState({
        bookname:"",
        author:"", 
        description: "", 
        price: "", 
        image: "",
    })

    const change = (e) => {      
        const { name, value } = e.target;
        setData({...data, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:1000/api/v1/add", data)
            .then((res) => alert(res.data.message))
            setData({
                bookname:"",
                author:"", 
                description: "", 
                price: "", 
                image: "",
            })

    }

    console.log(data);

    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight: "91.5vh"}}>
            <div className='container p-4'>
                <div className="mb-3">
                    <label 
                        for="exampleFormControlInput1" 
                        className="form-label text-white"
                    >
                        Book Name
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Enter Book Name" 
                        name="bookname"
                        value={data.bookname}
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        for="exampleFormControlInput1" 
                        className="form-label text-white"
                    >
                        Author
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Enter The Name Of Author" 
                        name="author"
                        value={data.author}
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        for="exampleFormControlInput1" 
                        className="form-label text-white"
                    >
                        Description
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Enter Description Of The Book" 
                        name="description"
                        value={data.description}
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        for="exampleFormControlInput1" 
                        className="form-label text-white"
                    >
                        Image
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Enter The URL Of The Image" 
                        name="image"
                        value={data.image}
                        onChange={change}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        for="exampleFormControlInput1" 
                        className="form-label text-white"
                    >
                        Price
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Enter The Price" 
                        name="price"
                        value={data.price}
                        onChange={change}
                    />
                </div>
                <button className='btn btn-success ' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default AddBooks
