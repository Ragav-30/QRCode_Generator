import { useState } from 'react';
import html from './assets/html.jpg';
import './QRCode.css'

function QRCode(){


const[img,setimg]= useState("");
const [url,setUrl]= useState("");
const[size,setSize]= useState("");
const[loading,setLoading] = useState(false);

const generateQR = () => {
    
    setLoading (true);
    try{
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=${size}x${size}`;
    setimg(qrUrl);
    }
    catch(error){
        console.error("Error generating QR code:", error);
    }finally{
         setLoading(false);
    }
   
  
};
const  downloadQR =async () => {
    if (!img) return;

  try {
    const response = await fetch(img);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'qr_code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href); // cleanup
  } catch (error) {
    console.error("Error downloading QR code:", error);
  }
}



    return(
        <div className="app-container">
            <h1>QR CODE GENERATOR</h1>
            {img && <img src= {img}  className='qr-code-image' />}
            <div>
            <label htmlFor="dataInput" className="input-label">URL:</label>
            <input type="text" id="dataInput" placeholder="Enter URL here"  onChange={(e)=> setUrl(e.target.value)}  />
            <label htmlFor="sizeInput" className="input-label">Enter the Size of the QR Code needed:</label>
            <input type="text" id="sizeInput" placeholder="Enter the Size: 100" onChange={(e)=>setSize(e.target.value)} />
            <button className="generateBtn" disabled ={loading} onClick={ generateQR}>Generate QR</button>
            <button className="downloadBtn" disabled= {!img} onClick={downloadQR}>Download QR</button>
            </div>
        </div>
    )
}
export default QRCode;