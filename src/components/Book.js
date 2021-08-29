import React from 'react'

function Book(props){
    const {address,BookName,AuthorName}=props
    return (<div>
        <img src={address} alt=""/>
        <h1>{BookName}</h1>
        <h4>{AuthorName}</h4>
    </div>)
}

export default Book
