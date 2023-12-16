import "../styles/Updatebooks.css"
const Updatebooks = () => {
    return (
        <div className="UpdateBooks">
            <form action="">
                <label htmlFor="">
                    title: <input type="text" placeholder="enter the books title" />
                </label>
                <br />
                <label htmlFor="">
                    pagecount: <input type="number" placeholder="enter the number of pages" name="" id="" />
                </label>
                <br />
                <label htmlFor="">
                    shortDescription: <input type="text" placeholder="enter the short description" />
                </label>
                <br />
                <label htmlFor="">
                    longDescription: <textarea placeholder="enter the description" name="" id="" cols="30" rows="10"></textarea>
                </label>
                <br />
                <label htmlFor="">
                    Image url: <input type="text" placeholder="enter the Image url" />
                </label>
                <br />
                <button > Update </button>
            </form>

        </div>
    );
}

export default Updatebooks;