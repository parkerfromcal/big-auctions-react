import React from "react";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="Search">
      <div className="row">
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit">
          <i class="fas fa-search"></i>
        </Button>
      </div>
    </div>
  );
}

export default Search;
