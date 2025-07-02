//{
//"userId": 1,
//"id": 1,
//"title": "delectus aut autem",
//"completed": false
//}

const CardList = ({ data }) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item) => {
                const { userId, id, title, completed } = item;

                return (
                    <div key={ id }  className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={"slkadj"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">{title}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{ completed }</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList
