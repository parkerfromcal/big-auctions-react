import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 mr-5 mb-5 mt-2">
            <div className="d-flex">
              <a href="/about" className="mr-5">
                about
              </a>
              <a href="/buy" className="mr-5">
                buy
              </a>
              <a href="/sell" className="mr-5">
                sell
              </a>
              <a href="/login" className="mr-5">
                login
              </a>
              <a role="button" className="btn-orange ml-auto" href="/">
                <i /> sign up for newsletter
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <a href="http://instagram.com/" className="ml-3">
              <i className="fa fa-instagram" />
            </a>{" "}
            <a href="http://www.facebook.com/" className="ml-3">
              <i className="fa fa-facebook" />
            </a>{" "}
            <a href="http://twitter.com/" className="ml-3">
              <i className="fa fa-twitter" />
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
