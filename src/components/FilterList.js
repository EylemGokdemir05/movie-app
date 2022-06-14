import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  setTitleFilter,
  setPeriodFilter,
} from "../context/actions/filterAction";
import periods from "../data/periods";

const FilterList = ({ setTitleFilter, setPeriodFilter }) => {
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState("All");
  const [error, setError] = useState("");

  const onTitleChange = (e) => {
    const inputTitle = e.target.value;
    if (inputTitle.match(/^[a-zA-Z0-9\s]{0,30}$/g)) {
      setTitle(inputTitle);
      setError("");
    } else {
      setError("Title should be provided less than 30 characters.");
    }
  };

  const onPeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    if (!title) {
      setError("Keyword to search title should be provided.");
    } else {
      setError("");
      setTitleFilter(title.trim().toLowerCase());
      setPeriodFilter(period);
    }
  };

  const onReset = () => {
    setTitle("");
    setPeriod("All");
    setError("");
    setTitleFilter("");
    setPeriodFilter("All");
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search by Title"
          value={title}
          onChange={onTitleChange}
          name="title"
          className="filters__input"
        />
        <select
          name="period"
          value={period}
          onChange={onPeriodChange}
          className="filters__select"
        >
          {periods.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
        <button type="submit" className="filters__button btn">
          Search
        </button>
        <button type="button" className="btn grey" onClick={onReset}>
          Clear
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  setPeriodFilter: (period) => dispatch(setPeriodFilter(period)),
});

FilterList.propTypes = {
  setTitleFilter: PropTypes.func,
  setPeriodFilter: PropTypes.func,
};

FilterList.defaultProps = {
  setTitleFilter: null,
  setPeriodFilter: null,
};

export default connect(undefined, mapDispatchToProps)(FilterList);
