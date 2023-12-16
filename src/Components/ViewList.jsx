import { useEffect, useState } from "react";
import "../styles/Viewitem.css"
import axios from "axios"
const ViewList = () => {
    let [data, setdata] = useState([])
//    useEffect(()=>{
// axios.get(" http://localhost:4000/books")
// .then((res)=>{
//     console.log(res.data);
//     setdata(res.data)
// })
// .catch((rej)=>{
//     console.log(rej.dat);
// })
//    },[])

    useEffect(() => {
        let fetchdata = async () => {
            let res = await fetch("   http://localhost:4000/books")
            let result = await res.json()
            setdata(result)
        }
        fetchdata()
    }, [data])
    let deletedata = (id) => {
        fetch(`http://localhost:4000/books/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <div className="ViewList">
            {data.map((x) => {
                return (
                    <div className="viewitems">
                        <div className="booking">
                            <img src={x.thumbnailUrl} alt="" />
                        </div>
                        <div className="bookdescription">
                            <h1>{x.title}</h1>
                            <p>no page : <b>{x.pageCount}</b></p>
                            <h3>shortDescription: {x.shortDescription}</h3>
                            {/* <button onClick={() => { deletedata(x.id) }}>delete</button> */}
                            <img onClick={() => { deletedata(x.id) }} id="dev" src="https://tse3.mm.bing.net/th?id=OIP.7euknoJKJ8tUWJb_BSzycwHaIE&pid=Api&P=0&h=180" alt="" />
                        </div>
                    </div>

                )
            })}

        </div>
    );
}

export default ViewList