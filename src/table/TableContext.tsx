import { createContext, useContext, useState, Dispatch, useEffect } from 'react';

interface TableContextModel {
  ids: string[],
  setIds: Dispatch<React.SetStateAction<string[]>>,
}

const defaultValue: TableContextModel = {
  ids: [],
  setIds: () => console.log(''),
};

const TableContext = createContext(defaultValue);
export const useTableContext = () => useContext(TableContext);

export const TableUIProvider = ({ children }: {
  children: JSX.Element | JSX.Element[]
}) => {
  const [ids, setIds] = useState([] as string[]);
  useEffect(() => {
    console.log(ids);
  }, [ids]);
  return (
    <TableContext.Provider
      value={{
        ids,
        setIds
      }}>
      {children}
    </TableContext.Provider>
  );
};
