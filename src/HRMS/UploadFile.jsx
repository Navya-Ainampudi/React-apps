import axios from 'axios';
import React, { useState } from 'react'

const UploadFile = () => {
    const [file,setFile]=useState(null);
    console.log(file)
    const handleUploads=(e)=>{
      e.preventDefault();
      const reader = new FileReader();
      console.log(reader)
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/gif"];

      if(!file){
        alert('choose file');
            return;
        }
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF and image files (JPEG, PNG, GIF) are allowed.");
        return;
      }
    //   axios.post("http://localhost:3001/files", file)
    reader.onloadend = async () => {
        const base64Content = reader.result;
  
        const fileData = {
          id: Date.now(), // Unique identifier for the file
          name: file.name,
          type: file.type,
          size: file.size,
          content: base64Content, // Base64 encoded file content
        };
  
        try {
          const response = await axios.post("http://localhost:3001/files", fileData);
          if (response.status === 201) {
            alert("File uploaded successfully!");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
          alert("Failed to upload the file.");
        }
      };
  
      reader.readAsDataURL(file); // Converts file to Base64
      
    }
    const checkEvent=(event)=>{console.log(event)}
  return (
    <div>
      <form onSubmit={handleUploads}>
        <input type='file' onChange={(e)=>{setFile(e.target.files[0])}}></input>
        <button>Upload File</button>
      </form>
      <button onClick={checkEvent}>check event</button>
    </div>
  )
}

export default UploadFile
