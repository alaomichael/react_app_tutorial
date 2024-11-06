import { useState } from "react";

interface Props {
  items: object[];
  heading: string;
  // onSelectItem: (item: string) => void;
  onDeleteItem: (items: object[]) => void;
}

function ListGroup({ items, heading, onDeleteItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <select className="form-control">
        <option value="all_categories" selected={true}>
          All categories
        </option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>

      {items.length === 0 && <p>No item found </p>}
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        <ul className="list-group">
          {items.map((item, index) => (
            // console.log(item),
            // <li
            //   className={
            //     selectedIndex === index
            //       ? "list-group-item active"
            //       : "list-group-item"
            //   }
            //   key={item}
            //   onClick={() => {
            //     setSelectedindex(index);
            //     onSelectItem(item);
            //   }}
            // >
            //   {index} | {item} | <button className="btn btn-danger" onClick={() => console.log("Button Clicked")}> Delete</button>
            // </li>
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={String(item)}
              onClick={() => {
                setSelectedIndex(index);
                onDeleteItem(
                  items.map((item) => String(item)) as unknown[] as object[]
                ); // Convert items array to object[]
              }}
            >
              {item.description} | {String(item?.amount)} | {item.category} |{" "}
              {/* Convert item to string */}
              <button
                className="btn btn-danger"
                onClick={() => console.log("Button Clicked")}
              >
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </table>
    </>
  );
}

export default ListGroup;
