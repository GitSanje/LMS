import React, { useState } from "react";
import "./Dash.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {

  faBook,
  faUsers,

  faTags,
 
  faRocket,
  faRedoAlt,
  faBookAtlas,
  faDollar,

  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Booklist from "../Book/Booklist";
import MemberList from "../Members/MemberList";
import NotReturnedBooks from "../IssueBook/NotReturnedBooks";
import IssueBooks from "../IssueBook/IssueBooks";
import ViewRequestedbook from "../Book/ViewRequestedbook";
import CategoryList from "../Category/CategoryList";
import Report from "../Report/Report";
import Fine from "../Fine/Fine";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { Link } from "@mui/material";

const Dasboard = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setSelectedBox(boxId);
  };

  const renderComponent = () => {
    switch (selectedBox) {
      case "memberslist":
        return <MemberList />;
      case "books":
        return <Booklist />;
      case "issuedBooks":
        return <IssueBooks />;
      case "notReturned":
        return <NotReturnedBooks />;
        case "categorylist":
          return <CategoryList />;
          case "report":
            return <Report />;
      case "viewRequestedbooks":
        return <ViewRequestedbook />;
      case 'fine':
        return <Fine />;
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
                  onClick={() => handleBoxClick("memberslist")}
                 >
                  <div className=" d-flex flex-row D_Cards c_d1  ">
                    <span>
                      <FontAwesomeIcon icon={faUsers} className="I_dash" />
                    </span>
                    <span className="I_name">Members</span>

                    <div className="I_num">1</div>
                  </div>
                </Link>

                <Link to="/booklist" onClick={() => handleBoxClick("books")}>
                  <div className="d-flex flex-row D_Cards ms-4 c_d2  ">
                    <span>
                      <FontAwesomeIcon icon={faBook} className="I_dash" />
                    </span>
                    <span className="I_name">Books</span>

                    <div className="I_num">1</div>
                  </div>
                </Link>

                <Link
                  to="issuedBooks"
                  onClick={() => handleBoxClick("issuedBooks")}
                >
                  <div className="d-flex flex-row D_Cards  ms-4 c_d3 ">
                    <span>
                      <FontAwesomeIcon icon={faRocket} className="I_dash" />
                    </span>
                    <span className="I_name">Issued Books</span>
                    <div className="I_num">1</div>
                  </div>
                </Link>

                <Link to='notreturned'
               
                 onClick={() => handleBoxClick("notReturned")}>

                <div
                className="d-flex flex-row D_Cards  ms-4 c_d4 NF "
                >
                  <span>
                    <FontAwesomeIcon icon={faRedoAlt} className="I_dash" />
                  </span>
                  <span className="I_name">Not Returned</span>
                  <div className="I_num">1</div>
                </div>

               </Link>

              </div>



              <div className="d-flex flex-row D_cards_2 ">

                 <Link to='category lists'   onClick={() => handleBoxClick("categorylist")}>

                <div className=" d-flex flex-row D_Cards c_d3 CT ">
                  <span>
                    <FontAwesomeIcon icon={faTags} className="I_dash" />
                  </span>
                  <span className="I_name">Categories</span>

                  <div className="I_num">1</div>
                   </div>
                </Link>
              <Link onClick={() => handleBoxClick("report")}>
                <div className="d-flex flex-row D_Cards ms-4 c_d4">
                  <span>
                    <FontAwesomeIcon icon={faFileAlt} className="I_dash" />
                  </span>
                  <span className="I_name">Report</span>

                  <div className="I_num">1</div>
                </div>
                </Link>
               <Link   onClick={() => handleBoxClick("viewRequestedbooks")}>
                <div className="d-flex flex-row D_Cards  ms-4 c_d1">
                  <span>
                    <FontAwesomeIcon icon={faBookAtlas} className="I_dash" />
                  </span>
                  <span className="I_name">Requested Books</span>
                  <div className="I_num">1</div>
                </div>
                </Link>

                <Link onClick={() => handleBoxClick("fine")}>
                <div className="d-flex flex-row D_Cards  ms-4 c_d2 TF">
                  <span>
                    <FontAwesomeIcon icon={faDollar} className="I_dash" />
                  </span>
                  <span className="I_name">Total Fine </span>
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

  return <>
  {renderComponent()}
  {selectedBox && (
      <button className="back-button" onClick={goBack}>
        Back to Dashboard
      </button>)
}
  </>;
};

export default Dasboard;
