import { useState } from "react";
import "../styles/AddBooks.css"
const AddBooks = () => {
    let [title, settitle] = useState("");
    let [pagecount, setpagecount] = useState("");
    let [shortDescription, setshortDescription] = useState("");
    let [longDescription, setlongDescription] = useState("");
    let [thumbnailUrl, setthumbnailUrl] = useState("");
    let data = {title, pagecount, shortDescription, longDescription, thumbnailUrl}
    let addbooks = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/books", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        alert(`Data Added Successfully`);
    }
    return (
        <div className="AddBooks">
            <form action="">
                <label htmlFor="">
                    title: <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" placeholder="enter the books title" />
                </label>
                <br />
                <label htmlFor="">
                    pagecount: <input value={pagecount} onChange={(e) => { setpagecount(e.target.value) }} type="number" placeholder="enter the number of pages" name="" id="" />
                </label>
                <br />
                <label htmlFor="">
                    shortDescription: <input value={shortDescription} onChange={(e) => { setshortDescription(e.target.value) }} type="text" placeholder="enter the short description" />
                </label>
                <br />
                <label htmlFor="">
                    longDescription: <textarea value={longDescription} onChange={(e) => { setlongDescription(e.target.value) }} placeholder="enter the description" name="" id="" cols="30" rows="10"></textarea>
                </label>
                <br />
                <label htmlFor="">
                    Image url: <input value={thumbnailUrl} onChange={(e) => { setthumbnailUrl(e.target.value) }} type="text" placeholder="enter the Image url" />
                </label>
                <br />
                <button onClick={addbooks}> Add </button>
            </form>

        </div>

    );
}

export default AddBooks;