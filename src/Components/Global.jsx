import { createContext, useEffect } from "react";
import { useReadTrees } from "../Use/useReadTrees";

const types = [
  {
    type: 1,
    typeTitle: "Leaf tree",
  },
  {
    type: 2,
    typeTitle: "Spike tree",
  },
  {
    type: 3,
    typeTitle: "Palm Tree",
  },
];
export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [trees, updateTrees] = useReadTrees();
  const [treeResponse, setCreateTree, setEditTree, setDeleteTree] =
    useReadTrees();

  useEffect(() => {
    updateTrees(Date.now());
  }, [updateTrees, treeResponse]);

  return (
    <Global.Provider
      value={{
        trees,
        types,
        setCreateTree,
        setEditTree,
        setDeleteTree,
      }}
    >
      {children}
    </Global.Provider>
  );
};
