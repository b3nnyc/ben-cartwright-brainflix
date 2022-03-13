import image404 from "../../assets/images/image404.png";
import "./NotFound.scss"

export default function NotFound() {
    return (
      <div className="error">
          <img className="error__img" src={image404} alt="404: Page not found"/>
          <h1 className="error__title">404: Page Not Found</h1>
      </div>
    )
  }

