import React from "react";
import ExampleWithLocalizationProvider from "../Component/DataTable/Provider";
import Container from "../../component/Container";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";

function AdminHome() {
  const getProperty = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/list`);
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error("Internal Error");
    }
  };
  console.log(process.env.REACT_APP_URL, "url");
  const { isLoading, data } = useQuery({
    queryKey: ["propertylist"],
    queryFn: getProperty,
  });

  if (isLoading) return "Loading...";
  console.log(data, "list");
  return (
    <div>
      <Container className={"space-y-5"}>
        <div>
          <h2>Admin DashBoard</h2>
          <p>manage your data here</p>
          <hr className="bg-[#FECE51] w-32 h-1" />
        </div>

        <ExampleWithLocalizationProvider data={data} />
      </Container>
    </div>
  );
}

export default AdminHome;
