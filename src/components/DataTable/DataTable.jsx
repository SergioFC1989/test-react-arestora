import React, { useState } from "react";

import "./DataTable.scss";

/**
 * DataTable component to display a table with data and a button to show more or less rows.
 *
 * @param {Object[]} data - Array of objects representing the table data.
 * @param {number} [initialRows=1] - Initial number of rows to display.
 * @param {string} titleTable - Title of the table.
 *
 * @returns {JSX.Element} The rendered DataTable component.
 */
export const DataTable = ({ data, initialRows = 1, titleTable }) => {
  const [visibleRows, setVisibleRows] = useState(initialRows);

  const hasData = data && data.length;
  const columns = hasData ? Object.keys(data[0]) : [];
  const textButton =
    visibleRows === data.length ? "Mostrar Menos" : "Mostrar Más";

  const handleShowMoreOrLess = () => {
    visibleRows === data.length
      ? setVisibleRows(initialRows)
      : setVisibleRows(data.length);
  };

  return (
    hasData && (
      <div className="data-table">
        <h3>{titleTable}</h3>
        <button className="data-table__button" onClick={handleShowMoreOrLess}>
          {textButton}
        </button>
        <table>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, visibleRows).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};
