import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const gotoAbut = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>홈 페이지</h1>
      <button onClick={gotoAbut}>소개페이지로 이동</button>
    </div>
  );
}
export default HomePage;
