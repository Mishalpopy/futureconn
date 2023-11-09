import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/itandlow";
import SafetyDetails from "../components/safety";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <SafetyDetails />
    </Wrapper>
  );
};

export default index;
