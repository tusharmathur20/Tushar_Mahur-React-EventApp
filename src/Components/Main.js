import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./Main.css";
import Event from "./Event/Event";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const [event, setEvent] = useState("");
  const [time, setTime] = useState("");
  const [region, setRegion] = useState("");

  const { addEvent } = useContext(GlobalContext);
  const { events } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Math.floor(Math.random() * 100000000),
      event,
      time,
      region,
    };
    addEvent(newEvent);
    //Reset form
    setEvent("");
    setTime("");
    setRegion("");
  };

  return (
    <div className="Content">
      <div className="Header">
        <div className="Layer">Events</div>
      </div>
      <div className="Body">
        <ul className="Events">
          {events.map((item) => (
            <Event key={item.id} item={item} />
          ))}
        </ul>
        <div className="AddEvent">
          <form onSubmit={onSubmit}>
            <input
              className="eventFiled"
              value={event}
              type="text"
              onChange={(e) => setEvent(e.target.value)}
              placeholder="New Event"
            />
            <input
              className="eventTime"
              value={time}
              type="time"
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
            />
            <input
              className="eventRegion "
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              type="text"
              placeholder="Enter Region"
            />
            <button className="submitBtn">Add Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
