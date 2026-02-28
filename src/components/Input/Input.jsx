import "./Input.css";

export default function Input({ textarea, label, ...props }) {
  return <div id="input-container">
    {label && <label htmlFor={props.id}>{label}</label>}
    {textarea ? <textarea {...props}></textarea> : <input {...props} />}
  </div>
}