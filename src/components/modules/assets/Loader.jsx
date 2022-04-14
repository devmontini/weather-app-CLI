import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={150} />
    </div>
  );
}

export default Loader;
