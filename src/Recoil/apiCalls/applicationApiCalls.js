import { BaseUrl } from "../../Components/Auth/axios";

export const SubmitApplication = (info, push) => async () => {
  await BaseUrl()
    .post("/applications/add", info)
    .then((res) => {
      push("/confirmation");
    })
    .catch((err) => {
      console.log(err);
    });
};
