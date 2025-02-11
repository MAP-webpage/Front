import { useEffect, useState } from "react";
import Photo from "./component/Photo";
import firststyles from "./Gallerypage.module.css";
import { Link } from "react-router-dom";
import secondstyles from "./PhotoDetail.module.css";

function PhotoDetail  ({제목}) {

    return (
        <div className={secondstyles.PhotoDetailContainer}>
            <div className={secondstyles.PhotoDetailTitleContainer}>
                <div className={secondstyles.DetailGallery}>갤러리</div>
                <div className={secondstyles.DetailTitle}>제목{제목}</div>
            </div>
            <div className={secondstyles.PhotoDetailImageContainer}>
            </div>
        </div>
    )
}

export default PhotoDetail;