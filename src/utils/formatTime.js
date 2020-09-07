// import { element } from "prop-types";

export const formatTime = time => {
  if ((time) && (typeof (time) === 'number') && (time >= 0)) {

    const seconds = Math.floor(time%60);
    const minutes = Math.floor(time/60%60);
    const hours = Math.floor(time/3600);
    const correctTime = [hours, minutes, seconds].map(element => `${element+100}`.substring(1));

    return correctTime.join(':');

  } else {
    return null;
  }
};
