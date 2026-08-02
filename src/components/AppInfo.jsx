import "../styles/AppInfo.css";
import {
  FaAndroid,
  FaApple,
  FaCheckCircle,
} from "react-icons/fa";

export default function AppInfo({
  badge,
  badgeColor,
  title,
  description,
  features,
}) {
  return (
    <div className="app-info">

      <span className={`app-badge ${badgeColor}`}>
        {badge}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>

      <ul className="app-features">
        {features.map((item) => (
          <li key={item}>
            <FaCheckCircle />
            <span>{item}</span>
          </li>
        ))}
      </ul>

    <div className="app-buttons">

      <button className="download-btn android">

    <div className="icon-box">
        <FaAndroid />
    </div>

    <div className="btn-text">
        <small>Android</small>
        <span>Download APK</span>
    </div>

</button>

<button className="download-btn ios">

    <div className="icon-box">
        <FaApple />
    </div>

    <div className="btn-text">
        <small>iPhone</small>
        <span>Coming Soon</span>
    </div>

</button>

</div>

    </div>
  );
}