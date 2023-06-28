//ДОХОДЫ

import React, { useState } from "react";
import { incomeCategories, incomeDetails } from "../shared/database";

const arrOfIncomes = [];

export const Incomes = () => {
  const [isInfoAdded, setIsInfoAdded] = useState(false);

  const [incomeValue, setIncomeValue] = useState("");
  const [incomeCategory, setIncomeCategory] = useState(incomeCategories[0]);
  const [incomeDetail, setIncomeDetail] = useState(incomeDetails[0]);

  const handleIncomeValueChange = (event) => {
    setIncomeValue(event.target.value);
  };
  const [showIncome, setShowIncome] = useState("");

  const handleIncomeShow = () => {
    setIsInfoAdded(true);
    setShowIncome(incomeValue);
    arrOfIncomes.push(incomeValue);
  };
  const handleIncomeCategoryShow = (event) => {
    setIncomeCategory(event.target.value);
  };
  const handleIncomeDetailsShow = (event) => {
    setIncomeDetail(event.target.value);
  };

  return (
    <>
      <h1>Ваши доходы</h1>
      <p>Выберите категорию и детализацию</p>
      <select onChange={handleIncomeCategoryShow}>
        {incomeCategories.map((income) => (
          <option value={income} key={income}>
            {income}
          </option>
        ))}
      </select>
      <select onChange={handleIncomeDetailsShow}>
        {incomeDetails.map((detail) => (
          <option value={detail} key={detail}>
            {detail}
          </option>
        ))}
      </select>
      <input type="number" placeholder="Введите доход" onChange={handleIncomeValueChange} />
      <button onClick={handleIncomeShow}>Добавить доход</button>
      {isInfoAdded ? (
        <p>{incomeCategory + " " + incomeDetail + " " + showIncome}</p>
      ) : null}
    </>
  );
};
