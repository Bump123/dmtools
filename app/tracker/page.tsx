"use client"
import React, { useState } from 'react';

const Page = () => {
  const [units, setUnits] = useState([
    { id: 1, name: "Unit1", ac: 10, roll: 22 },
    { id: 2, name: "Unit2", ac: 12, roll: 30 },
    { id: 3, name: "Unit3", ac: 8, roll: 10 },
  ]);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    const sortedUnits = units.sort((a, b) => b.roll - a.roll);
    setUnits(sortedUnits);
    setSorted(true);
  };

  return (
    <div>
      <table className='flex flex-col justify-center items-center table-auto'>
        <thead>
          <tr>
            <th>Name</th>
            <th>AC</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {units.map(unit => (
            <tr key={unit.id}>
              <td>{unit.name}</td>
              <td>{unit.ac}</td>
              <td>{unit.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="flex flex-col items-center btn btn-primary" onClick={handleSort}>
          Sort {sorted}
        </button>
      </div>
    </div>
  );
};

export default Page;
