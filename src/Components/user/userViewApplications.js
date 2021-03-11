import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ApplicationStatus from "../../Recoil/atom/applicationFilterAtom";
import ApplicationAtom from "../../Recoil/atom/applicationsAtom";
import ApplicationFilter from "../../Recoil/selector/applicationfilterSelector";
import ApplicationSelector from "../../Recoil/selector/applicationSelector";
import ApplicationView from "../application/application-view";
import { BaseUrl } from "../Auth/axios";
import ApplicationSelectFilter from "../utils/applicationSelectFilter";

const ViewApplications = () => {
  const { totalAppl, pendingAppl, approvedAppl, rejectedAppl } = useRecoilValue(
    ApplicationSelector
  );
  const [ApplicationList, setApplicationList] = useRecoilState(ApplicationAtom);
  const filter = useRecoilValue(ApplicationFilter);
  useEffect(() => {
    BaseUrl()
      .get("applications/")
      .then((res) => {
        setApplicationList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="applicationViewCont">
      <h2>Applications</h2>
      <div className="applNumCount">
        <h3>Total: {totalAppl} </h3>
        <div className="statusNums">
          <h4>Approved: {approvedAppl}</h4>
          <h4>Pending: {pendingAppl}</h4>
          <h4>Rejected: {rejectedAppl}</h4>
        </div>
        <ApplicationSelectFilter />
      </div>
      <div className="applicationsCont">
        {filter.map((app) => (
          <ApplicationView key={app.id} application={app} />
        ))}
      </div>
    </div>
  );
};

export default ViewApplications;
