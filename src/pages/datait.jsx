import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/itandlow";
import DataDetails from "../components/data";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <DataDetails />
    </Wrapper>
  );
};

export default index;
