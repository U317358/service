



import { useState } from "react";

const DoApplications = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    desp: "",
    price: "",
  });

  const [userList, setUserList] = useState([]);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const saveData = () => {
    setUserList((prevList) => [...prevList, userInput]);
    setUserInput({ username: "", desp: "", price: "" });
  };

  return (
    <>
      <section className="container mt-4" background-color="blue">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Service
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter service"
                value={userInput.username}
                onChange={inputChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="desp" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="desp"
                className="form-control"
                placeholder="Enter description"
                value={userInput.desp}
                onChange={inputChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="Enter price"
                value={userInput.price}
                onChange={inputChange}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={saveData}
            >
              Add
            </button>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Index</th>
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.desp}</td>
                <td>{user.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default DoApplications;
