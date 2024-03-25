import React, { useState } from "react";
import "../Dashboard_Admin/Dash.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBook,
  faTags,
  faRocket,
  faRedoAlt,
  faBookAtlas,
  faDollar,
  faFileAlt,
  faRotate,
  faMessage,
  faBookTanakh,
} from "@fortawesome/free-solid-svg-icons";

import UserBooklist from "../Book/Userbooklist";
import FineDetails from "../Fine/FineDetails";
import Borrowbook from "../Book/BorrowedBook";

import ViewRequestedbook from "../Book/ViewRequestedbook";
import UserCategoryList from "../Category/UserCategory";
import EmailForm from "../Message/EmailForm";

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { Link } from "@mui/material";
import Renewals from "../Renew/Renewal";

const DashUser = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setSelectedBox(boxId);
  };

  const renderComponent = () => {
    switch (selectedBox) {
      case "Borrowbook":
        return <Borrowbook />;
      case "FineDetails":
        return <FineDetails />;
      case "UserBooklist":
        return <UserBooklist />;

      case "categorylist":
        return <UserCategoryList />;
      case "message":
        return <EmailForm />;
      case "renewal":
        return <Renewals />;

      default:
        return (
          <>
            {/* {showForm && <AddBook onAddBook={handleAddBook} />} */}

            <MDBCardBody className="d-flex flex-column  ">
              <div className="Welcome">Welcome to Dashboard</div>
              <div className="D_bord">
                <span className="Das_index"> Dashboard</span>/
                <span className="index">Index</span>
              </div>

              <div className="d-flex flex-row D_Cards_1 ">
                <Link
                  to="/memberslist"
                  onClick={() => handleBoxClick("Borrowbook")}
                >
                  <div className=" d-flex flex-row D_Cards c_d1  ">
                    <span>
                      <FontAwesomeIcon icon={faBookAtlas} className="I_dash" />
                    </span>
                    <span className="I_name">Borrow Books</span>

                    <div className="I_num">1</div>
                  </div>
                </Link>

                <Link
                  to="/booklist"
                  onClick={() => handleBoxClick("FineDetails")}
                >
                  <div className="d-flex flex-row D_Cards ms-4 c_d2  ">
                    <span>
                      <FontAwesomeIcon icon={faDollar} className="I_dash" />
                    </span>
                    <span className="I_name">Fine Details</span>

                    <div className="I_num">1</div>
                  </div>
                </Link>

                <Link
                  to="issuedBooks"
                  onClick={() => handleBoxClick("UserBooklist")}
                >
                  <div className="d-flex flex-row D_Cards  ms-4 c_d3 ">
                    <span>
                      <FontAwesomeIcon icon={faBook} className="I_dash" />
                    </span>
                    <span className="I_name">Book list</span>
                    <div className="I_num">1</div>
                  </div>
                </Link>
              </div>

              <div className="d-flex flex-row D_cards_2 ">
                <Link
                  to="category lists"
                  onClick={() => handleBoxClick("categorylist")}
                >
                  <div className=" d-flex flex-row D_Cards c_d3 CT ">
                    <span>
                      <FontAwesomeIcon icon={faTags} className="I_dash" />
                    </span>
                    <span className="I_name">Categories</span>

                    <div className="I_num">1</div>
                  </div>
                </Link>
                <Link onClick={() => handleBoxClick("message")}>
                  <div className="d-flex flex-row D_Cards ms-4 c_d4">
                    <span>
                      <FontAwesomeIcon icon={faMessage} className="I_dash" />
                    </span>
                    <span className="I_name">Message</span>

                    <div className="I_num">1</div>
                  </div>
                </Link>
                <Link onClick={() => handleBoxClick("Renewal")}>
                  <div className="d-flex flex-row D_Cards  ms-4 c_d1">
                    <span>
                      <FontAwesomeIcon icon={faRotate} className="I_dash" />
                    </span>
                    <span className="I_name">Renewals</span>
                    <div className="I_num">1</div>
                  </div>
                </Link>
              </div>
            </MDBCardBody>
          </>
        );
    }
  };

  const goBack = () => {
    setSelectedBox(null);
  };

  return (
    <>
      {renderComponent()}
      {selectedBox && (
        <button className="back-button" onClick={goBack}>
          Back to Dashboard
        </button>
      )}
    </>
  );
};

export default DashUser;
