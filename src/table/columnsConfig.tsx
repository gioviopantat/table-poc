/* eslint-disable jsx-a11y/anchor-is-valid */
import { customFilter } from "react-bootstrap-table2-filter";
import { BlockChainStatus } from "./type";

export const columns = [{
  dataField: 'batchSerialNumber',
  text: 'SN',
  sort: true,
}, {
  dataField: 'tokenId',
  text: 'token id'
}, {
  dataField: 'batchId',
  text: 'batch id',
}, {
  dataField: 'goldenTicketId',
  text: 'golden ticket id',
}, {
  dataField: 'isScanningAllow',
  text: 'scanning status',
}, {
  dataField: 'blockchainStatus',
  text: '',
  style: (cell: any, row: any, rowIndex: number, colIndex: number) => {
    if (rowIndex % 2 === 0) {
      return {
        backgroundColor: 'yellow'
      };
    }
    return {
      backgroundColor: 'red'
    };
  },
  filterRenderer: (onFilter: any, column: any) =>
    <th scope="col" className="col h5 border-end p-2">
      <button
        title="blockchain"
        type="button"
        className="btn text-nowrap d-flex justify-content-between w-100 my-auto p-0"
      >
        <div className="btn-group">
          <button
            type="button"
            className="border-0 fw-bold dropdown-toggle bg-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Blockchain
          </button>

          <ul className="dropdown-menu">
            {BlockChainStatus.map((status, index) => (
              <li key={index}>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    if (status === BlockChainStatus[0]) {
                      onFilter()
                    } else {
                      onFilter(status)
                    }
                  }}>
                  {status}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </th>,
  filter: customFilter({}),
}];