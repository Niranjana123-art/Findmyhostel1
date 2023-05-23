import React, {useEffect, useState } from "react";
import styles from "./navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
// import { useRouter } from "next/router";
import { Drawer } from "@mui/material";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { useNavigate } from 'react-router-dom'
// import { useAccordionButton } from "react-bootstrap";
function Navbar() {
  
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();



  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <AddPostModal open={open1} handleClose={handleClose1} /> */}
      <div className={"navbar"}>
        <div className={"navbar__left"}>
          <div
            className={"navbar__menu_container"}
            // onClick={() => {
            //   setOpen(true);
            // }}
          >
            <HiMenuAlt2
              className={"navbar__menu"}
              // onClick={() => {
              //   setOpen(true);
              // }}
            />
          </div>
          <div
            className={"navbar__logo"}
            onClick={() => {
             navigate("/");
            }}
            style={{ cursor: "pointer"
                    }}
            >
        <div className="navbar__title">Find  My</div>
          <div className="navbar__title">Hostel</div>
          </div>
        </div>
        <div className={"navbar__links"}>
          <div
            className={"navbar__link"}
            onClick={() => {
             navigate("/");
            }}
          >
            
            Home
          
          </div>
          <div
            className={"navbar__link"}
            onClick={() => {
             navigate(`/tenantd`);
            }}
          >
           
            Profile
            
          </div>
          <div
            className={"navbar__link"}
            onClick={() => {
             navigate("/login");
            }}
          >
            Login
          </div>
          <div
            className={"navbar__link"}
            onClick={() => {
             navigate("/signup");
            }}
          >
            SignUp
            
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          
          
          <div className={styles.navbar__links}>
            {}
          </div>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className={styles.nav__drawer}>
          <div className={styles.navbar__drawer_header}>
            <div
              className={styles.navbar__logo}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              ConnectHub
            </div>
            <div
              className={styles.navbar__items_mob}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div
                className={styles.navbar__link}
                onClick={() => {
                 navigate("/");
                  handleDrawerClose();
                }}
              >
                About
              </div>
              <div
                className={styles.navbar__link}
                onClick={() => {
                 navigate("/users");
                  handleDrawerClose();
                }}
              >
                Users
              </div>
              <div
                className={styles.navbar__link}
                onClick={() => {
                 navigate("/posts");
                  handleDrawerClose();
                }}
              >
                Posts
              </div>
              <div className={styles.navbar__links_1}>
               
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar
