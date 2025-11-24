import "./categories.styles.css";

import { useState } from "react";

import type { Category } from "../../types/category.types";

const Categories = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "01",
      imageUrl: "https://github.com/avatar/Alison-Gabriel",
      name: "calcados",
      displayName: "Calçados",
    },
    {
      id: "02",
      imageUrl: "https://github.com/avatar/Alison-Gabriel",
      name: "camisetas",
      displayName: "Camisetas",
    },
    {
      id: "03",
      imageUrl: "https://github.com/avatar/Alison-Gabriel",
      name: "calcas",
      displayName: "Calças",
    },
  ]);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div>{category.displayName}</div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
