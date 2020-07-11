import React from "react";

function Footer() {
  return (

    <footer className="footer mt-auto py-3">
      <div className="container">
      <hr></hr>
            <div className="centered" id="copyright">
                &copy; {new Date().getFullYear()} <a href="https://github.com/johnnyboysydney/BooksSearchGoogle/blob/master/LICENSE" rel="noopener noreferrer" target="_blank">Copyright</a> <span>|</span> All rights reserved <span>|</span> <a href="https://github.com/johnnyboysydney" rel="noopener noreferrer" target="_blank">John Merchan</a>
            </div>
      </div>
    </footer>

  );
}

export default Footer;