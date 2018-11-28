import React from 'react';

export default class Table extends React.Component {
  render() {
    const { data } = this.props;
    const daysElapsed = (isoDate) => {
      const now = Date.now();
      const elapsed = now - Date.parse(isoDate);
      return Math.floor(elapsed / 86400000);
    }
    return (
      <table>
        <tbody>
          <tr id='table-header'>
            <th>Name</th>
            <th>Language</th>
            <th>Size</th>
            <th>Stars</th>
            <th>Created</th>
            <th>Updated</th>
            <th>API Link</th>
          </tr>
          {
            data.map((row, rowIndex) =>
              <tr
                className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}
                key={row.node_id}
              >
                <td><a href={row.html_url}>{row.name}</a></td>
                <td>{row.language || 'n/a'}</td>
                <td>{row.size}kb</td>
                <td>{row.stargazers_count}</td>
                <td>{daysElapsed(row.created_at)} days ago</td>
                <td>{daysElapsed(row.updated_at)} days ago</td>
                <td><a href={row.url}>See API Response</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
