import React from "react";

export default function FormattedDate() {
let now = new Date();

let date= now.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day= days[now.getDay()];
  let months =["Jan", "Feb", "Mar", "Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec" ]
  let month=months[now.getMonth()];
  return (
    <div>
      {day}, {month} {date}
    </div>
  );
}