import { useEffect, useState } from "react";
import Photo from "./component/Photo";
import styles from "./Gallerypage.module.css";

function Gallerypage({연도}) {
  const [photos, setPhotos] = useState([]);
  //백에서 받아오기

    return ( 
      <div>
        <div className={styles.title}>MAP 갤러리</div>
        <hr className={styles.baseline} />
        <hr className={styles.topline} />
        <div className={styles.years}>2025{연도}</div> 
        <div>
          <Photo/>
          </div>
        
      </div>
    );
  }
  
  export default Gallerypage;

