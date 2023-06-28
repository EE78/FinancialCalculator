//РАСХОДЫ

import React, { useState } from "react";
import { costCategories, costDetails } from "../shared/database";

const arrOfCosts = [];

export const Costs = () => {
  const [isInfoAdded, setIsInfoAdded] = useState(false);

  const [costValue, setCostValue] = useState("");
  const [costСategory, setCostCategory] = useState(costCategories[0]);
  const [costDetail, setCostDetail] = useState(costDetails[0]);

  const handleCostValueChange = (event) => {
    setCostValue(event.target.value);
  };
  const [showCost, setShowCost] = useState("");

  const handleCostShow = () => {
    setIsInfoAdded(true);
    setShowCost(costValue);
    arrOfCosts.push(costValue);
  };
  const handleCostCategoryShow = (event) => {
    setCostCategory(event.target.value);
  };
  const handleCostDetailsShow = (event) => {
    setCostDetail(event.target.value);
  };

  return (
    <>
      <h1>Ваши расходы</h1>
      <p>Выберите категорию и детализацию</p>
      <select onChange={handleCostCategoryShow}>
        {costCategories.map((cost) => (
          <option value={cost} key={cost}>
            {cost}
          </option>
        ))}
      </select>
      <select onChange={handleCostDetailsShow}>
        {costDetails.map((detail) => (
          <option value={detail} key={detail}>
            {detail}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Введите расход"
        onChange={handleCostValueChange}
      />
      <button onClick={handleCostShow}>Добавить расход</button>
      {isInfoAdded ? (
        <p>{costСategory + " " + costDetail + " " + showCost}</p>
      ) : null}
    </>
  );
};
