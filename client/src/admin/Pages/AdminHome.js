import React from "react";
import ExampleWithLocalizationProvider from "../Component/DataTable/Provider";
import Container from "../../component/Container";

function AdminHome() {
  return (
    <div>
      <Container className={"space-y-5"}>
        <div>
          <h2>Admin DashBoard</h2>
          <p>manage your data here</p>
          <hr className="bg-[#FECE51] w-32 h-1" />
        </div>

        <ExampleWithLocalizationProvider />
      </Container>
    </div>
  );
}

export default AdminHome;
