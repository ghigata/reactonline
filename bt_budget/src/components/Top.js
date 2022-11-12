import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import TotalAmount from './TotalAmount';
import TotalIncome from './TotalIncome';
import TotalExpense from './TotalExpense';

function Top() {
  const [currentDate, setCurrentDate] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [percentExp, setPercentExp] = useState(0);

  const items = useSelector(state => state.items);

  useEffect(() => {
      // set current month & year
      const d = new Date();
      const date = (d.getMonth() + 1) + "/" + d.getFullYear();
      setCurrentDate(date);

      // set TotalIncome, TotalExpense, TotalAmount
      let totalIncomeTemp = 0;
      let totalExpenseTemp = 0;
      let totalAmountTemp = 0;

      items.map((item,index) => {
        if(item.type === 'inc') {
          totalIncomeTemp += parseInt(item.value);
        }

        if(item.type === 'exp') {
          totalExpenseTemp += parseInt(item.value);
        }
      });

      totalAmountTemp = totalIncomeTemp - totalExpenseTemp;

      const percentExpTemp = (totalExpenseTemp*100/totalIncomeTemp).toFixed(0);

      setTotalIncome(totalIncomeTemp);
      setTotalExpense(totalExpenseTemp);
      setTotalAmount(totalAmountTemp);
      setPercentExp(percentExpTemp);
  })

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">{currentDate}</span>:
        </div>
        {totalAmount > 0 && 
          <TotalAmount>+{totalAmount.toLocaleString("vi-VN")}</TotalAmount>
        }
        {totalAmount < 0 && 
          <TotalAmount>-{totalAmount.toLocaleString("vi-VN")}</TotalAmount>
        }
        <TotalIncome>{totalIncome.toLocaleString("vi-VN")}</TotalIncome>
        <TotalExpense percent={percentExp}>{totalExpense.toLocaleString("vi-VN")}</TotalExpense>
      </div>
    </div>
  );
}

export default Top;
