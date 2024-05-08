import moment from "moment";
import styles from "../assets/styles/certificateGenerator.module.scss";
import logo from "../assets/image.png";
import html2canvas from "html2canvas";
import React, { useState } from "react";
import jsPDF from 'jspdf';

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
  const [submissions, setSubmissions] = useState([]);
  const [studentName, setStudentName] = useState(''); // renamed from 'name' to 'studentName'
  const [studentCourse, setCourse] = useState('');
  const [studentEmail, setEmail] = useState('');

  const takeScreenshot = () => {
    html2canvas(document.body, { scale: 0.5 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4'); // A4 size
  
      const leftMargin = -20; // increase to crop more from the left
      const topMargin = 10; // increase to crop more from the top
      const imgWidth = pdf.internal.pageSize.getWidth() - 40; // decrease to crop more from the right
      const imgHeight = ((canvas.height - 40) * imgWidth) / canvas.width; // decrease to crop more from the bottom
  
      pdf.addImage(imgData, 'JPG', leftMargin, topMargin, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };

  const handleApprove = () => {
    setApproved(true);
  };

  const handleDecline = () => {
    setApproved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissions([...submissions, { name: studentName, studentCourse, studentEmail }]);
    setStudentName('');
    setCourse('');
    setEmail('');
  };

  return (
    // style={{backgroundColor: "lightblue"}}
    <>
      {!approved ? (
        <div
          style={{
            backgroundColor: "White",
            paddingLeft: 550,
            paddingRight: 550,
            paddingTop: 100,
            paddingBottom: 350,
          }}
        >

          <div>
            <p>Name: {name}</p>

            <p>Course: {course}</p>

            <p>Email: {email}</p>
          </div> 
          <form onSubmit={handleSubmit}>
            {/* <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={course} onChange={e => setCourse(e.target.value)} placeholder="Course" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /> */}
            <button type="submit">Save</button>
          </form>
          <button onClick={handleApprove}>Approve</button>
          <button onClick={handleDecline}>Decline</button>
          {submissions.map((submission, index) => (


            <div key={index}>
              <p>Name: {name}</p>
              <p>Course: {course}</p>
              <p>Email: {email}</p>
            </div>
          ))}
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
