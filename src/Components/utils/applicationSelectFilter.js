import React from "react";
import { useRecoilState } from "recoil";
import applicationFilter from "../../Recoil/selector/applicationfilterSelector";

const ApplicationSelectFilter = () => {
  const [filter, setFilter] = useRecoilState(applicationFilter);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default ApplicationSelectFilter;
