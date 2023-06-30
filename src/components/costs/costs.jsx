//РАСХОДЫ

import React, { useState } from "react";
import { costCategories, costDetails } from "../shared/database";
import "./costStyles.css";
import { Changer } from "../changer/changer";

const arrOfCosts = [];

export const Costs = () => {
  const [isInfoAdded, setIsInfoAdded] = useState(false);
  const [costValue, setCostValue] = useState("");
  const [costСategory, setCostCategory] = useState(costCategories[0]);
  const [costDetail, setCostDetail] = useState(costDetails[0]);
  const [isCategoryPicked, setIsCategoryPicked] = useState(false);
  const [isDetailPicked, setIsDetailPicked] = useState(false);
  const [showCost, setShowCost] = useState("");

  const handleCostValueChange = (event) => {
    setCostValue(event.target.value);
  };

  const handleCostShow = () => {
    if (
      costCategories !== costCategories[0] &&
      costDetails !== costDetails[0] &&
      costValue.length !== 0
    ) {
      setIsInfoAdded(true);
      setIsCategoryPicked(true);
      setIsDetailPicked(true);
      setShowCost(costValue);
      arrOfCosts.push(costValue);
    }
  };

  const handleCostCategoryShow = (event) => {
    setCostCategory(event.target.value);
  };
  const handleCostDetailsShow = (event) => {
    setCostDetail(event.target.value);
  };

  return (
    <div>
      <h1>Ваши расходы</h1>
      <p>Выберите категорию и детализацию</p>
      <div className="cost_container">
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
      </div>
      {isInfoAdded && isCategoryPicked && isDetailPicked ? (
        <p>{costСategory + " " + costDetail + " " + showCost}</p>
      ) : null}
      <button onClick={handleCostShow}>Добавить расход</button>
      <Changer />
    </div>
  );
};
