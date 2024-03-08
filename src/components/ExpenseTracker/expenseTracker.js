import React, { useState } from 'react'
import Card from './card'


const TotalExpense = [
  { date: "18 june 2002", title: "Car", price: "$400" },
  { date: "14 july 2012", title: "Bike", price: "$600" },
  { date: "12 august 2015", title: "Laptop", price: "$200" },
  { date: "11 march 2024", title: "Fee", price: "$600" },

]
function ExpenseTracker() {

  return (
    <div>
      {TotalExpense.map((data) => (
        <Card totalExpense={data}/>
      )
      )}
    </div>
  )
}

export default ExpenseTracker