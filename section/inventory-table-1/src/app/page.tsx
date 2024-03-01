"use client";

import { useReducer } from "react";
import Button from "./(components)/button";

const reducer = (state: Array<stateReducer>, action: actionReducer): Array<stateReducer> => {
  switch (action.type) {
    case "add_item":
      return [...state, { id: action.payload.id, name: action.payload.name, quantity: 0, available: false }];
    case "edit_item":
      return state.map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item));
    case "toggle_item":
      return state.map((item) => (item.id === action.payload.id ? { ...item, available: !item.available } : item));
    case "delete_item":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const UseReducerPage = () => {
  const [inventory, dispatch] = useReducer(reducer, []);

  const addItem = (name: string) => {
    const newId = Date.now();
    dispatch({ type: "add_item", payload: { id: newId, name } });
  };

  const editItem = (id: number, quantity: number) => {
    dispatch({ type: "edit_item", payload: { id, quantity } });
  };

  const toggleItem = (id: number) => {
    dispatch({ type: "toggle_item", payload: { id } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "delete_item", payload: { id } });
  };

  return (
    <section className="py-10 w-full bg-light">
      <div className="container">
        <div className="flex justify-center items-center w-full h-dvh">
          <div className="p-5 w-1/2 h-fit bg-[#e6e6e6] rounded-2xl">
            <div className="flex justify-between items-center py-3 px-5 mb-3 w-full rounded-lg">
              <span className="text-lg font-bold text-dark">Inventory</span>
              <Button name="add" action={() => addItem(prompt("Item name:")!)} />
            </div>
            <span className="text-xs text-gray-400 leading-none inline-block">*To change the availability status, click the status. and the edit button can only edit quantity</span>
            {inventory.length > 0 ? (
              <table className="overflow-auto flex flex-col gap-3 w-full h-72">
                <thead>
                  <tr className="flex items-center w-full bg-table-light text-xs text-dark rounded-lg">
                    <th className="py-2 px-3 w-[15%]">No</th>
                    <th className="py-2 px-3 w-[35%]">Name</th>
                    <th className="py-2 px-3 w-[15%]">Quantity</th>
                    <th className="py-2 px-3 w-[35%]">Available</th>
                    <th className="py-2 px-3 w-[25%]">Actions</th>
                  </tr>
                </thead>
                <tbody className="flex flex-col gap-2">
                  {inventory.map((item, index) => (
                    <tr key={item.id} className="flex items-center w-full bg-[#d9d9d9] text-xs text-dark rounded-lg">
                      <td className="py-2 px-3 w-[15%]">{index + 1}.</td>
                      <td className="py-2 px-3 w-[35%] capitalize">{item.name}</td>
                      <td className="py-2 px-3 w-[15%]">{item.quantity}</td>
                      <td className="flex items-center gap-2 py-2 px-3 w-[35%] rounded-full">
                        <input
                          type="checkbox"
                          id={`available-${item.id}`}
                          checked={item.available}
                          onChange={() => toggleItem(item.id!)}
                          hidden
                          //
                        />
                        {item.available ? (
                          <label htmlFor={`available-${item.id}`} className={`cursor-pointer py-1 px-4 w-fit h-fit ${readyStyle} font-medium rounded-full`}>
                            Ready
                          </label>
                        ) : (
                          <label htmlFor={`available-${item.id}`} className={`cursor-pointer py-1 px-4 w-fit h-fit ${notReadyStyle} font-medium rounded-full`}>
                            Not Ready
                          </label>
                        )}
                      </td>
                      <td className="flex items-center gap-2 py-2 px-3 w-[25%] text-xs text-dark">
                        <Button name="delete" action={() => removeItem(item.id!)} />
                        <Button name="edit" action={() => editItem(item.id!, parseInt(prompt("Item quantity:", item.quantity?.toString())!))} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex justify-center items-center w-full h-72">
                <span className="text-sm font-semibold text-dark">Nothing&apos;s data</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseReducerPage;

interface stateReducer {
  id?: number;
  name?: string;
  quantity?: number;
  available?: boolean;
}

interface actionReducer {
  type: string;
  payload: stateReducer;
}

const readyStyle: string = "bg-ready";
const notReadyStyle: string = "bg-notReady";
