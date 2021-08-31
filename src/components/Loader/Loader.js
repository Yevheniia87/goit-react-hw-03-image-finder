import { useState } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: flex;
  margin: 0 auto;
  border-color: red;
`;
function Loader() {
  return (
    <RingLoader
      color="#3f51b5"
      loading={useState(true)}
      css={override}
      size={220}
    />
  );
}
export default Loader;
