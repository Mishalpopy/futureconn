import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";
import ItandlowDetails from "../components/itandlow";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Future Connect - Saudia Arabia"} />
      <ItandlowDetails />
    </Wrapper>
  );
};

export default index;
