import React, { useEffect } from "react";
import Header from "./Header";

function Leaderboard({ records, setRecords, firebase }) {
  const compareTimes = (timeA, timeB) => {
    const [minutesA, secondsA] = timeA.split(":");
    const [minutesB, secondsB] = timeB.split(":");
    const totalSecondsA = Number(minutesA) * 60 + Number(secondsA);
    const totalSecondsB = Number(minutesB) * 60 + Number(secondsB);
    return totalSecondsA - totalSecondsB;
  };
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const recordList = await firebase.getRecords();
        const sortedList = [...recordList].sort((a, b) =>
          compareTimes(a.record, b.record)
        );
        setRecords(sortedList);
      } catch (error) {
        alert("Error fetching records from Firebase");
      }
    };

    fetchRecords();
    return () => {};
  }, []);

  return (
    <div className="leaderboard">
      <Header />
      <div className="leader-container">
        <h1>Rank</h1>
        {records.length === 0 ? (
          <p>No records!</p>
        ) : (
          records.map((leader, index) => {
            return (
              <p>
                {index + 1} : {leader.name} / {leader.record}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
