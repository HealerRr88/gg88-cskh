import three_dots_icon from "../../../assets/images/three-dots.svg";

export default function ComponentLoading() {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <img style={{ width: 100 }} src={three_dots_icon} alt="loading-icon" />
    </div>
  )
}