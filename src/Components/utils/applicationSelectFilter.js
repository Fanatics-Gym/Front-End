import React from "react";
import { useRecoilState } from "recoil";
import ApplicationStatus from "../../Recoil/atom/applicationFilterAtom";

const ApplicationSelectFilter = () => {
  const [filter, setFilter] = useRecoilState(ApplicationStatus);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default ApplicationSelectFilter;
