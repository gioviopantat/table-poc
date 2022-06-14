import Table from "./table";
import { columns } from "./table/columnsConfig";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { TableUIProvider } from "./table/TableContext";

function App() {
  const keyField = 'tokenId';
  const [data, setData] = useState([]);

  const getData = () =>
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .catch(console.log);

  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, []);
  return (
    <>
      <TableUIProvider>
        <Table columns={columns} keyField={keyField} data={data} />
      </TableUIProvider>
    </>
  );
}

export default App;
