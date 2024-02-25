import React from 'react'

const BooksSection = ({Booksdata}) => {

    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {Booksdata && 
                Booksdata.map((item, index) => (
                <div className='m-3' style={{ width: "200px" , height: "350px", border: "1px solid white", borderRadius: "20px" }}>
                    <div>
                        <img 
                            style={{ width: "200px", height: "210px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                            className='image-fluid' 
                            src={item.image} 
                            alt='/' 
                        />
                    </div>
                    <h6 
                        className='px-2 my-1 text-white' 
                        style={{fontSize: "15px"}}
                    >
                        {item.bookname.slice(0, 20)}...
                    </h6>
                    <b style={{ fontSize: "20px", color: "red" }} className='px-2'>Rs. {item.price}</b>
                    <div className='d-flex justify-content-around align-items-center my-2'>
                        <button className='btn btn-primary'>UPDATE</button>
                        <button className='btn btn-danger'>DELETE</button>{" "}
                    </div>
                </div>
            ))}        
        </div>
    )
}

export default BooksSection
