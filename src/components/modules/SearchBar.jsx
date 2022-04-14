import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const name = location.name;
  const [input, setInput] = useState({ name: name });

  useEffect(() => {
    dispatch(getSearch(name));
    setInput({ name: "" });
  }, [dispatch, name]);

  function handleInputChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearch(input.name));
    setInput({ name: "" });
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.code === "NumpadEnter") {
      e.stopPropagation();
      handleSubmit(e);
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={input.name}
          className="rounded-l-xl px-1"
          onChange={(e) => handleInputChange(e)}
          onKeyDown={onKeyDown}
        />
        <button
          type="submit"
          className="bg-orange-600 px-1 rounded-r-xl hover:bg-orange-900 active:scale-95 delay-75"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
