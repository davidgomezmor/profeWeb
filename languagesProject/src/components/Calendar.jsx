import React, { useState, useContext } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { teacherSchedule } from "./teacherSchedule";

//HOOKS
export const MyCalendar = () => {
  const [selectedHours, setSelectedHours] = useState({});
  const [date, setDate] = useState(new Date());

  //ACTUALIZA FECHA CUANDO EL USUARIO SELECCIONA UNA
  const onChangeDate = (date) => {
    setDate(date);
  };

//ACTUALIZA HORA CUANDO EL USUARIO SELECCIONA UNA
  const onHourSelect = (hour) => {
    setSelectedHours((prevSelectedHours) => {
      const selectedHoursForDate = prevSelectedHours[date.toDateString()] || [];
      if (selectedHoursForDate.includes(hour)) {
        return {
          ...prevSelectedHours,
          [date.toDateString()]: selectedHoursForDate.filter(
            (prevHour) => prevHour !== hour
          ),
        };
      } else {
        return {
          ...prevSelectedHours,
          [date.toDateString()]: [...selectedHoursForDate, hour],
        };
      }
    });
  };


  const getAvailableHours = (date) => {
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    return teacherSchedule[day] || [];
  };

  const formatSelectedHours = (selectedHours) => {
    const formattedSelectedHours = [];
    let count = 1;

    for (const [dateString, hours] of Object.entries(selectedHours)) {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      for (const hour of hours) {
        formattedSelectedHours.push(`${count}. ${formattedDate} - ${hour}`)
        count++
      }
    }
    return formattedSelectedHours;
  };

  return (
    <div>
      <Calendar minDate={new Date()} onChange={onChangeDate} value={date} />
      <div>
        <ul>
          {getAvailableHours(date).map((hour) => (
            <li key={hour}>
              <button disabled={selectedHours[date.toDateString()]?.includes(hour)} onClick={() => onHourSelect(hour)}>
                {hour}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Selected hours:</h2>
        <ul>
          {formatSelectedHours(selectedHours).map((formattedHour) => (
            <li key={formattedHour}>{formattedHour}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
