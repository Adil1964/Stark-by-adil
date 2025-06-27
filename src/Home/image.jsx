import previewImg from "../images/image.png";
import "./image.css";

const DashboardImage = () => {
  return (
    <section className="dashboard-image">
      <div className="image-wrapper hide-on-mobile">
        <img src={previewImg} alt="Dashboard Preview" className="img-fluid" />
      </div>
    </section>
  );
};

export default DashboardImage;
