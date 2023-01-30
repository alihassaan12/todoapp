import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Trash from "./assets/trash.svg";
import Edit from "./assets/edit.png";

function App() {
  const [input, setInput] = useState("");
  const [editArray, setRequired] = useState([]);
  const [editData, setEditData] = useState();
  const [editTask, seteditTask] = useState();

  const Add = (e) => {
    e.preventDefault();
    if (input !== "") {
      setRequired([...editArray, input]);
      setInput("");
    } else {
      alert("This Feild Is Required");
    }
  };
  const delettask = (index) => {
    editArray.splice(index, 1);
    setRequired([...editArray]);
  };
  const update = (input, index) => {
    setEditData({ key: index, data: input });
    seteditTask(true);
  };
  const edit = (e) => {
    e.preventDefault();
    editArray[editData.key] = editData.data;
    seteditTask(false);
    setEditData("");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-lg-7">
          <div className="card p-4 rounded-0 mt-4">
            <h1>TO DO APP</h1>
            <form className="text-center" onSubmit={editTask ? edit : Add}>
              {editData ? (
                <input
                  className="col-12 input-feild"
                  type="text"
                  value={editData.data}
                  onChange={(e) => {
                    setEditData({ ...editData, data: e.target.value });
                  }}
                />
              ) : (
                <input
                  className="col-12 input-feild"
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              )}
              <button className="btn ms-5 my-3">
                {editTask ? "Edit Task" : "Add Task"}
              </button>
            </form>
            <ul className="p-0 ">
              {editArray.map((data, index) => {
                return (
                  <li className="list-unstyled my-4 p-3">
                    <img
                      src={Edit}
                      className="icons"
                      alt="not-found"
                      onClick={() => update(data, index)}
                    />
                    <img
                      src={Trash}
                      className="icons"
                      alt="not-found"
                      onClick={() => delettask(data, index)}
                    />
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
