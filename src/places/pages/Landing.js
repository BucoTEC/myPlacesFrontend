import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import MainImg from "../../assets/Main.svg";
import { motion } from "framer-motion";
function Landing() {
  return (
    <>
      <div className="landing-wraper">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          src={MainImg}
          alt="main img"
          className="main-img"
        />
        <div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="landing-header "
          >
            Share your{" "}
          </motion.h1>
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="landing-header "
            id="higlight"
          >
            favorite
          </motion.h1>
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="landing-header "
          >
            places
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ y: "1000" }}
        animate={{ y: 0 }}
        className="main-upload-wrapper"
      >
        <Link
          to="/places/new"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="main-upload-button">UPLOAD</div>
        </Link>
      </motion.div>
    </>
  );
}

export default Landing;
