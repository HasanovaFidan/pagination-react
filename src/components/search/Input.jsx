import React from 'react';
import "./input.css";

function Input({ data, setData, original }) {
  const handleChange = (e) => {
    let search = e.target.value.trim().toLowerCase();
    if (search === "") {
      setData(original);
    } else {
      let searched = data.filter((item) => item.name.trim().toLowerCase().includes(search));
      setData([...searched]);
    }
  };


  return (
    <div>
      <form className='axtar' action="">
        <input type="text" placeholder='search' onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
}

export default Input;
