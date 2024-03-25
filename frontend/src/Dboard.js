import React, { useState } from 'react';
import './Dashboard/Dash.css';
import {
  faHouseChimney,
  faBook,
  faUsers,
  faChevronDown,
  faChevronRight,
  faTags,
  faMessage,
  faUser,
  faHandHolding,
} from '@fortawesome/free-solid-svg-icons';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';

const Dboard = () => {
  const [navLinks, setNavLinks] = useState([
    { label: 'Dashboard', isOpen: false },
    { label: 'Books', isOpen: false },
    { label: 'Categories', isOpen: false },
    { label: 'Members', isOpen: false },
  ]);

  const toggleNav = (index) => {
    const updatedNavLinks = [...navLinks];
    updatedNavLinks[index].isOpen = !updatedNavLinks[index].isOpen;
    setNavLinks(updatedNavLinks);
  };

  return (
    <>
    <MDBContainer>
      <MDBCard className="rounded mt-5">
        <MDBRow>
          <MDBCol md="3">
            <MDBCardBody className="card-text Dashbar">
              <MDBCardTitle className="text-center mb-3">Admin Panel</MDBCardTitle>

              <MDBNavbar className="flex-column text-left">
                {navLinks.map((link, index) => (
                  <MDBNavbarItem key={index}>
                    <MDBNavbarLink to="#!" onClick={() => toggleNav(index)}>
                      {link.label}
                      {link.isOpen ? ' -' : ' +'}
                    </MDBNavbarLink>
                    {link.isOpen && (
                      <div>
                        <MDBNavbarLink to="#!">Add New {link.label.slice(0, -1)}</MDBNavbarLink>
                        <MDBNavbarLink to="#!">{link.label} List</MDBNavbarLink>
                      </div>
                    )}
                  </MDBNavbarItem>
                ))}

                <MDBNavbarItem>
                  <MDBNavbarLink to="#!">
                    <MDBIcon icon={faMessage} className="icon" />
                    Messages
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink to="#!">
                    <MDBIcon icon={faBook} className="icon" />
                    Book issue
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink to="#!">
                    <MDBIcon icon={faHandHolding} className="icon" />
                    View Requested Books
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink to="#!">
                    <MDBIcon icon={faUser} className="icon" />
                    Profile
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbar>
            </MDBCardBody>
          </MDBCol>

          <MDBCol md="9">
            <MDBCardBody>
              {/* Your content goes here */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  
    </>
    );
};

export default Dboard;
