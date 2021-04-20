import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-1">
            <a href="/about">about</a>
            <a href="/buy">buy</a>
            <a href="/sell">sell</a>
            <a href="/login">login</a>
          </div>
          <div className="col-md-6">
            <a role="button" className="btn orange" href="/">
              <i /> sign up for newsletter
            </a>
            <br />
            <a href="http://instagram.com/">
              <i className="fa fa-instagram" />
            </a>{" "}
            <a href="http://www.facebook.com/">
              <i className="fa fa-facebook" />
            </a>{" "}
            <a href="http://twitter.com/">
              <i className="fa fa-twitter" />
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
