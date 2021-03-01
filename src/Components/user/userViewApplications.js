import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import ApplicationAtom from "../../Recoil/atom/applicationsAtom";
import { BaseUrl } from "../Auth/axios";

const ViewApplications = () => {
  const [applicationList, setApplicationList] = useRecoilState(ApplicationAtom);
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

  console.log(applicationList);

  return (
    <div>
      <h2>Applications</h2>
    </div>
  );
};

export default ViewApplications;
