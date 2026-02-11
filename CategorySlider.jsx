import { useNavigate } from "react-router-dom";
import "./CategorySlider.css";

const categories = [
  { name: "Marathon", image: "/images/marathon-symwebp.webp", route: "marathon" },
  { name: "Walkathon", image: "/images/walk-sym.png", route: "walkathon" },
  { name: "Football", image: "/images/football-sym.jpg", route: "football" },
  { name: "Cricket", image: "/images/cricket-sym.png", route: "cricket" },
  { name: "Tennis", image: "/images/tennis-sym.jpg", route: "tennis" },
  { name: "Hockey", image: "/images/hockey-sym.avif", route: "hockey" },
  { name: "Swimming", image: "/images/swim-sym.jpg", route: "swimming" },
   { name: "Trekking", image: "/images/trek-sym.avif", route: "trekking" },
];

const CategorySlider = () => {
  const navigate = useNavigate();

  return (
    <section className="category-slider-section">
      <h2>Explore by Category</h2>

      <div className="category-slider">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/category/${cat.route}`)}
          >
            <img src={cat.image} alt={cat.name} />

            <div className="category-overlay">
              <span>{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
