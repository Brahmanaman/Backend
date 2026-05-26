import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      // formData.append("image", file);
      // const res = await axios.post("http://localhost:3000/api/file/image-upload", formData);
      formData.append("images", files);
      const res = await axios.post("http://localhost:3000/api/file/multiple-image-upload", formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Upload Single File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <h2>Upload Multiple Files</h2>
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />

      <button style={{ marginTop: "20px" }} onClick={handleSubmit}>
        Upload
      </button>
    </>
  );
};

export default App;
