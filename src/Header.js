import React from "react";

const Header = (props) => {
  console.log(props);
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header className="app-header">
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          type="text"
          className="search"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;
