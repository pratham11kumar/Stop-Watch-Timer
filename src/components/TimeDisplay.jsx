function TimeDisplay({ time }) {

  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;

  return (
    <div className="time">

      {String(hrs).padStart(2,"0")}:
      {String(mins).padStart(2,"0")}:
      {String(secs).padStart(2,"0")}

    </div>
  );
}

export default TimeDisplay;