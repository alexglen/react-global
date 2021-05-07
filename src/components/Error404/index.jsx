import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../stories/Button";
import "./Error404.scss";

function Error404() {
  const { push } = useHistory();
  return (
    <main className="error-main">
      <p className="title">Can't you find?</p>
      <p className="text">
        We couldn't find this page. But there are still a lot of interesting things on the main page
      </p>
      <div className="error-button">
        <Button color="primary" onClick={() => push("/")}>
          To main page
        </Button>
      </div>
      <div className="error-code">
        <p>Error code: 404</p>
      </div>
    </main>
  );
}

export default Error404;
