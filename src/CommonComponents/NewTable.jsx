import React from 'react';

const NewTable = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <table style={{ width: '98%', borderCollapse: 'collapse', backgroundColor: 'white' ,color:"gray"}}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Column 1</th>
            <th style={tableHeaderStyle}>Column 2</th>
            <th style={tableHeaderStyle}>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>Data 1</td>
            <td style={tableCellStyle}>Data 2</td>
            <td style={tableCellStyle}>Data 3</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Data 4</td>
            <td style={tableCellStyle}>Data 5</td>
            <td style={tableCellStyle}>Data 6</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Data 7</td>
            <td style={tableCellStyle}>Data 8</td>
            <td style={tableCellStyle}>Data 9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #dddddd',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #dddddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: 'white',
};

export default NewTable;
