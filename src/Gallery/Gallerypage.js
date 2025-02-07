import { useEffect, useState } from "react";
import Photo from "./component/Photo";
import styles from "./Gallerypage.module.css";

function Gallerypage() {
  const [photos, setClickedImage] = useState([]);
  //백에서 받아오기

    return ( 
      <div>
        <div >MAP 갤러리</div>
        <div className={styles.years}>2025</div> 
        <div>
          <Photo/>
          </div>
        
      </div>
    );
  }
  
  export default Gallerypage;

  //2025 변수로 변경 필요