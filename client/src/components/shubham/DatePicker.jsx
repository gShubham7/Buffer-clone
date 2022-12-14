import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Schedule_Date = () => {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeClassName={handleColor}
      dateFormat="Pp"
    />
  );
};
