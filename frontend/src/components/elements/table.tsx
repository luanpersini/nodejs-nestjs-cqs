interface Props {
  headers: string[]
  lines: string[]
  data: unknown[]
  tablestyle?: string
  headerstyle?: string
}
export const CustomTable = ({ headers, lines, data, tablestyle, headerstyle = '' }: Props) => {
  return (
    <table className={'table ' + tablestyle}>
      <thead className={headerstyle}>
        <tr>          
          {headers.map((header, key) => (
            <th key={key} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data: any, key) => (
          <tr key={key}>
            {lines.map((line, key) => (
              <td key={key}>{data[line]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
