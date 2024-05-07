import moment from "moment";
import styles from "../assets/styles/certificateGenerator.module.scss";
import logo from "../assets/image.png";
import html2canvas from "html2canvas";
import React, { useState } from "react";

const Certificate = ({
  name,
  course,
  dateOfConductStart,
  dateOfConductEnd,
  email,
  signature,
  signatureDetails,
  certificationId,
}) => {
  const [approved, setApproved] = useState(false);

  const takeScreenshot = () => {
    html2canvas(document.body).then(function (canvas) {
      var link = document.createElement("a");
      link.download = "certificate.pdf";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const handleApprove = () => {
    setApproved(true);
  };

  const handleDecline = () => {
    setApproved(false);
  };
  return (
    // style={{backgroundColor: "lightblue"}}
    <>
      {!approved ? (
        <div style={{backgroundColor: "White", paddingLeft: 550 , paddingRight: 550 , paddingTop: 100 , paddingBottom: 350}}>
          <div>
            <p>Name: {name}</p>

            <p>Course: {course}</p>
            
            <p>Email: {email}</p>
          </div>
          <button onClick={handleApprove} >Approve</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      ) : (
        <div className={styles.certificateWrapper}>
          <div className={styles.certificateContainer}>
            <div>Logo Here</div>
            <img src={logo} alt="not found" className={styles.imggg} />{" "}
            {/* Add the image source here */}
            {/* <h1 className={styles.heading}>CERTIFICATE OF APPRECIATION</h1> */}
            {/* <span className={styles.smallText}>This certificate is proudly awarded to</span> */}
            <p className={styles.primaryItalicText}>{name}</p>
            <span className={styles.smallTextF}>
              for successfully completing the course
            </span>
            <h2 className={styles.smallTextS}>{course}</h2>
            <span className={styles.smallTextT}>{`conducted from ${
              dateOfConductStart
                ? moment(dateOfConductStart).format("MMMM YYYY")
                : "-"
            } to ${
              dateOfConductEnd
                ? moment(dateOfConductEnd).format("MMMM YYYY")
                : "-"
            }`}</span>
            {/* 
          <div className={styles.signatureBlock}>
            <img className={styles.signatureImage} src={signature.preview} alt='' />

            <span className={styles.horizontalBar} />

            <span className={styles.smallText}>{signatureDetails}</span>
          </div> */}
            <p className={styles.primaryItalicTextS}>{certificationId}</p>
          </div>
          <button onClick={takeScreenshot}>Download Pdf</button>
          {/* <button style={{ marginTop: ' 3rem' }}>Download PDF</button> */}
        </div>
      )}
    </>
  );
};

export default Certificate;

//           <h2 className={styles.smallTextS}>{course}</h2>

//           <span className={styles.smallTextT}>{`conducted from ${
//             dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'
//           } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`}</span>
// {/*
//           <div className={styles.signatureBlock}>
//             <img className={styles.signatureImage} src={signature.preview} alt='' />

//             <span className={styles.horizontalBar} />

//             <span className={styles.smallText}>{signatureDetails}</span>
//           </div> */}
//           <p className={styles.primaryItalicTextS}>{certificationId}</p>
//         </div>
//         <button onClick={takeScreenshot}>Download Pdf</button>
//         {/* <button style={{ marginTop: ' 3rem' }}>Download PDF</button> */}
//       </div>
//     </>
//   )
// }

// export default Certificate
