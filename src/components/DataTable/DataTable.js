import React from 'react';

// import { Container } from './styles';

function DataTable(props) {
  const TableHead = () => {
    const { columns } = props

    return (
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={`${index}${column.name}`}>{column.display}</th>
          }
          )}
        </tr>
      </thead>
    )
  }
  const TableBody = () => {
    const { dataRow, columns } = props

    return (
      <tbody>

        {dataRow.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                return <td key={index}>{row[column.name]}</td>
              })}
            </tr>
          )
        }
        )}
      </tbody>
    )
  }

  return (
    <table className="centered highlight">
      <TableHead />
      <TableBody />
    </table >
  );
}

export default DataTable;