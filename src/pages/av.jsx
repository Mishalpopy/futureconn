import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/itandlow";
import DataDetails from "../components/data";
import AvDetails from "../components/av";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <AvDetails />
    </Wrapper>
  );
};

export default index;
