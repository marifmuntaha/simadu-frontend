import React from "react";
import ErrorImage from "../../images/gfx/error-504.svg";
import { Link } from "react-router-dom";
import { Block, BlockContent, Button } from "../../components";

const Error504 = () => {
  return (
    <>
      <Block className="nk-block-middle wide-md mx-auto">
        <BlockContent className="nk-error-ld text-center">
          <img className="nk-error-gfx" src={ErrorImage} alt="error" />
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Oops! Why you’re here?</h3>
            <p className="nk-error-text">
              We are very sorry for inconvenience. It looks like you’re try to access a page that either has been
              deleted or never existed.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="lg" className="mt-2">
                Back To Home
              </Button>
            </Link>
          </div>
        </BlockContent>
      </Block>
    </>
  );
};
export default Error504;
