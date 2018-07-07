import React, { Component } from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}
class DateInput extends Component {
  render() {
    const FORMAT = "MMM Do, YYYY";
    return (
      <DayPickerInput
        ref={el => (this.input = el)}
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
        dayPickerProps={{
          todayButton: "Today",
          disabledDays: [{ before: this.props.before }]
        }}
        placeholder={this.props.placeholder}
      />
    );
  }
}
export default DateInput;
