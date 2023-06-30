import React, { useState } from "react";
import { costCategories, costDetails } from "../shared/database";
import "./changerStyles.css";

export const Changer = () => {
  const [isCatNameAdd, setIsCatNameAdd] = useState(false);
  const [isDetNameAdd, setIsDetNameAdd] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");
  const [detailValue, setDetailValue] = useState("");

  const addCategoryName = (event) => {
    setCategoryValue(event.target.value);
    setIsCatNameAdd(true);
  };

  const addCategory = () => {
    costCategories.push(categoryValue);
  };
  const addDetailName = (event) => {
    setDetailValue(event.target.value);
    setIsDetNameAdd(true);
  };

  const addDetail = () => {
    costDetails.push(detailValue);
  };
  return (
    <div className="changer_wrapper">
      <div className="changer_actives">
        <input
          type="text"
          placeholder="Название категории"
          value={categoryValue}
          onChange={addCategoryName}
        />
        {isCatNameAdd ? (
          <button onClick={addCategory}>Добавить категорию</button>
        ) : null}
      </div>
      <div className="changer_actives">
        <input
          type="text"
          placeholder="Название детализации"
          value={detailValue}
          onChange={addDetailName}
        />
        {isDetNameAdd ? (
          <button onClick={addDetail}>Добавить категорию</button>
        ) : null}
      </div>
    </div>
  );
};
