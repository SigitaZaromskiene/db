import { useContext } from "react";
import { useState } from "react";
import { Global } from "./Global";

function Create() {
  const [title, setTitle] = useState("");
  const [height, setHeight] = useState(0);
  const [type, setType] = useState(1);

  const { setCreateTree, types } = useContext(Global);

  const add = (_) => {
    setCreateTree({
      title,
      height: parseInt(height) / 100,
      type: parseInt(type),
    });
    setTitle("");
    setHeight(0);
    setType(1);
  };

  return (
    <div className="card mt-4">
      <h2 className="card-header">Please plant new tree</h2>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Tree</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Slide to height: {height / 100}</label>
          <input
            type="range"
            min="0"
            max="9999"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Slide to height: {height / 100}</label>
          <input
            type="range"
            min="0"
            max="9999"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        {/* 
        <div className="mb-3">
          <label className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => setTypee.target.value)}
          />
        </div> */}
        <button className="btn btn-primary" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
