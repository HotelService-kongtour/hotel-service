import React, { useState, useRef, useEffect } from "react";
import { useColors } from "../../../context/ColorContext";
import styled from "styled-components";
import moment from "moment";
import Calendar from "react-calendar";

import CalendarIcon from "assets/icons/calendar-outline.svg";

const DateOption = () => {
  const colors = useColors();
  const calendarRef = useRef(null);
  const modalRef = useRef(null);

  const today = moment();
  const tomorrow = moment().add(1, "days");

  const [showDateOptions, setShowDateOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    `${today.format("YYYY.MM.DD")} - ${tomorrow.format("YYYY.MM.DD")}`
  );
  const [selectedRange, setSelectedRange] = useState([
    today.toDate(),
    tomorrow.toDate(),
  ]);

  const handleDateChange = (newDates) => {
    if (Array.isArray(newDates) && newDates.length >= 2) {
      setSelectedRange([newDates[0], newDates[1]]);
      setSelectedDate(
        `${moment(newDates[0]).format("YYYY.MM.DD")} - ${moment(
          newDates[1]
        ).format("YYYY.MM.DD")}`
      );
      setShowDateOptions(false);
    } else {
      setSelectedRange([today.toDate(), tomorrow.toDate()]);
      setSelectedDate(
        `${today.format("YYYY.MM.DD")} - ${tomorrow.format("YYYY.MM.DD")}`
      );
    }
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowDateOptions(false);
    }
  };

  useEffect(() => {
    if (setShowDateOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDateOptions]);

  return (
    <OptionWrapper ref={modalRef}>
      <DateInput
        className="date-input"
        color={colors.main}
        onClick={() => setShowDateOptions((prev) => !prev)}
      >
        <InputIcon>
          <img src={CalendarIcon} alt="calendar-icon" />
        </InputIcon>
        {selectedDate}
      </DateInput>

      {showDateOptions && (
        <StyledCalendarWrapper ref={calendarRef} color={colors.main}>
          <StyledCalendar
            selectRange={true}
            value={
              selectedRange.length
                ? [new Date(selectedRange[0]), new Date(selectedRange[1])]
                : []
            }
            onChange={handleDateChange}
            formatDay={(locale, date) => moment(date).format("D")}
            formatYear={(locale, date) => moment(date).format("YYYY")}
            formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
            calendarType="gregory"
            showNeighboringMonth={false}
            next2Label={null}
            prev2Label={null}
            minDate={new Date()}
          />
        </StyledCalendarWrapper>
      )}
    </OptionWrapper>
  );
};

export default DateOption;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1280px) {
    left: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;
const DateInput = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.color};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.color};
  }

  @media screen and (max-width: 1280px) {
    padding-left: 2rem;
  }
`;

const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 99;
  top: 60px;

  .react-calendar {
    width: 100%;
    padding: 1rem;
    border: 1px solid #dfdfdf;
    border-radius: 0.5rem;
    background-color: white;
  }
  /* 상단 월 네비게이션 */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dfdfdf;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
  }
  .react-calendar__navigation button {
    font-weight: 600;
    font-size: 1.3rem;
    padding: 0 0.5rem;
    opacity: 0.8;

    @media screen and (max-width: 1440px) {
      font-size: 1rem;
    }
  }
  .react-calendar__navigation button:hover {
    opacity: 1;
  }
  /* 요일 */
  .react-calendar__month-view__weekdays {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    color: #aeaeae;
  }
  /* 날짜 */
  .react-calendar__tile {
    padding: 0.9rem 0.5rem;
    font-size: 1.2rem;
    position: relative;

    @media screen and (max-width: 1440px) {
      padding: 0.6rem 0.5rem;
      font-size: 1rem;
    }
  }
  .react-calendar__tile--now {
    color: ${(props) => props.color};
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${(props) => props.color};
    color: #fff;
    border-radius: 1rem;
  }
`;
const StyledCalendar = styled(Calendar)``;
