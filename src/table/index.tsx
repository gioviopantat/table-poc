import BootstrapTable, { ColumnDescription, SelectRowProps } from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import { useTableContext } from './TableContext';
import { Tag } from './type';

interface TableModel<T> {
  keyField: string,
  data: T[],
  columns: ColumnDescription<any, any>[]
}

const Table = (
  { keyField,
    data,
    columns
  }: TableModel<any>) => {
  const { ids, setIds } = useTableContext();

  const selectRow: SelectRowProps<any> = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: ids,
    onSelect: (row: Tag, isSelect: boolean) => {
      if (isSelect) {
        setIds([...ids, row.tokenId]);
      } else {
        setIds(ids.filter((x: string) => x !== row.tokenId));
      }
    },
    onSelectAll: (isSelect: boolean, rows: Tag[]) => {
      if (isSelect) {
        setIds(rows.map((i) => i.tokenId));
      } else {
        setIds([]);
      }
    }
  };

  return (<>
    <BootstrapTable
      bordered={false}
      keyField={keyField}
      data={data}
      columns={columns}
      selectRow={selectRow}
      filter={filterFactory()} />
    <TemplateComponent data={data} />
  </>)
}

export default Table;

const TemplateComponent = ({ data }: {
  data: any
}) => {
  const tableContext = useTableContext();
  return (
    <div>
      <>
        <button
          type="button"
          className="btn btn-lg btn-success"
          onClick={() => {
            const result = data.map((data: any) => data.tokenId)
            tableContext.setIds(result)
          }}
        >
          Click to add all id to ids
        </button>
        <button
          type="button"
          className="btn btn-lg btn-danger"
          onClick={() => tableContext.setIds([])}
        >
          Click to delete all id in ids
        </button>
        <h1>Selected ids:</h1>
        {tableContext.ids.map((id) =>
          <h3>{id}</h3>
        )}
      </>
    </div>
  )
}