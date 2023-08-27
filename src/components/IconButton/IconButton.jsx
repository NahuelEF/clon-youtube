import style from "./IconButton.module.css";

export const IconButton = ({ icon, type = "button", isFill = false, label, onClick }) => (
  <button
    className={`${style.iconButton} ${isFill ? style.fill : ""}`}
    type={type}
    aria-label={label}
    onClick={onClick}
  >
    {icon}
  </button>
);
