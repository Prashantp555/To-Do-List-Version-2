import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [listItem, setListItem] = React.useState([]);

  function handleClick() {
    setListItem((prevItem) => {
      return [...prevItem, item];
    });
    setItem(" ");
  }
  function handleList(event) {
    const Item = event.target.value;
    setItem(Item);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleList} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((listitem) => {
            return <li> {listitem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
