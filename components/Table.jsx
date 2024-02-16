import React from 'react'

const Table = ({ data }) => {
    return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr className='bg-gray-800  border-gray-800'>
        <th>Name</th>
        <th>AC</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ac}</td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Table
