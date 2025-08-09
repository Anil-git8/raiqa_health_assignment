"use client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListView({
  list,
  onRemove,
  onReset,
  onSortAsc,
  onSortDesc
}: {
  list: number[];
  onRemove: (index: number) => void;
  onReset: () => void;
  onSortAsc: () => void;
  onSortDesc: () => void;
}) {
  return (
    <div className="card p-3">
      <h3 className="mb-3 text-dark">Numbers List</h3>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button 
          onClick={onReset} 
          className="btn btn-danger btn-sm"
        >
          Reset
        </button>
        <button 
          onClick={onSortAsc} 
          className="btn btn-secondary btn-sm"
        >
          Sort Ascending
        </button>
        <button 
          onClick={onSortDesc} 
          className="btn btn-primary btn-sm"
        >
          Sort Descending
        </button>
      </div>

      {list.length === 0 && (
        <p className="text-muted">No numbers yet</p>
      )}

      {list.map((num, i) => (
        <div 
          key={i} 
          className="d-flex justify-content-between align-items-center border-bottom py-1"
        >
          <span className="text-dark">{num} #{i + 1}</span>
          <button 
            onClick={() => onRemove(i)} 
            className="btn btn-outline-danger btn-sm"
          >
            ×
          </button>
        </div>
      ))}

      <p className="mt-3 fw-bold">Total numbers: {list.length}</p>
    </div>
  );
}
