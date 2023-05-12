import React, { useState } from "react";
import items from './heliverse.json'

function Search(data) {
    const [searchTerm, setSearchTerm] = useState("");
  
    return (
      <div className="Search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        {items
          .filter((val) => {
            if (searchTerm === "") {
              return 0;
            } else if (
              val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="value" key={items.id}>
                {val.first_name}{" "}
              </div>
            );
          })}
      </div>
    );
  }
  
  export default Search;
