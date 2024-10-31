// QuillWrapper.js
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const QuillWrapper = ({ value, onChange, placeholder }) => {
  return (
    <ReactQuill
      theme="bubble"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default QuillWrapper;
