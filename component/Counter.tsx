"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Counter({ onAdd }: { onAdd: (num: number) => void }) {
  const [val, setVal] = useState(0);

  return (
   <div className="card p-3 mb-3" style={{ background: "white", border: "1px solid #ccc" }}>
  <h3 className="text-center text-dark mb-3">Counter</h3>

  <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
    <button
      className="btn btn-outline-primary"
      onClick={() => setVal(v => Math.max(0, v - 1))}
    >
      -
    </button>

    <span className="fs-4 text-dark">{val}</span>

    <button
      className="btn btn-outline-primary"
      onClick={() => setVal(v => v + 1)}
    >
      +
    </button>
  </div>

  <div className="text-center">
    <button
      className="btn btn-primary"
      onClick={() => {
        if (val !== 0) {
          onAdd(val);
        }
      }}
    >
      Add to List
    </button>
  </div>
</div>

  );
}
