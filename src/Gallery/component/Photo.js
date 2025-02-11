import {Link} from "react-router-dom";
import styles from "./Photo.module.css";
import React from "react";
import HeartImage from "./HeartImage.js";

function Photo( {사진, 제목, 좋아요개수} ) { //받아와야함
 
    return (
      <div>
        <img src={사진} alt={제목} className={styles.photo} />
       <h3 className={styles.title} > 
        <Link to={'/Postpage'} style={{ textDecoration: "none", color: "black"}} >제목</Link>
      </h3>
        <div className={styles.like}>
          <span>
          <HeartImage /> 116{좋아요개수}</span></div>
      </div>
    );
  }
  
  export default Photo;
