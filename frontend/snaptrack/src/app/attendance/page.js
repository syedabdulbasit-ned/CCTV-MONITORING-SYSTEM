// export default function Attendance() {
//     return (
//         <div>
//             <h1>Attendance Record</h1>
            
//         </div>
//     )
// }


"use client";
// import { useEffect, useState } from "react";

// export default function Attendance() {
//   const [attendance, setAttendance] = useState(null);
//   const [search, setSearch] = useState("");

//   // useEffect(() => {
//   //   fetch("http://127.0.0.1:5000/attendance") // Flask API endpoint
//   //     .then((res) => res.json())
//   //     .then((data) => setAttendance(data))
//   //     .catch((err) => console.error("Error fetching attendance:", err));
//   // }, []);

//   if (!attendance) {
//     return <p style={{ padding: "20px" }}>Loading attendance data...</p>;
//   }

//   // ---- Calculate Summary ----
//   const students = Object.keys(attendance[Object.keys(attendance)[0]]);
//   const presentCount = students.filter((s) =>
//     Object.values(attendance).some((slot) => slot[s] === "Present")
//   ).length;
//   const absentCount = students.length - presentCount;

//   // ---- Search Filter ----
//   const filteredStudents = students.filter((s) =>
//     s.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="attendance-container">
//       <h1>📅 Attendance Record</h1>

//       {/* Summary */}
//       <div className="attendance-summary">
//         <p>Total Students: {students.length}</p>
//         <p>Present: {presentCount}</p>
//         <p>Absent: {absentCount}</p>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search student..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="attendance-search"
//       />

//       {/* Table */}
//       <table className="attendance-table">
//         <thead>
//           <tr>
//             <th>Time Slot</th>
//             {filteredStudents.map((student, idx) => (
//               <th key={idx}>{student}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Object.keys(attendance).map((slot, i) => (
//             <tr key={i}>
//               <td>{slot}</td>
//               {filteredStudents.map((student, j) => (
//                 <td key={j}>{attendance[slot][student]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Link to CCTV */}
//       <div className="camera-link">
//         <a href="/camera">
//           <button>📹 Go to Live CCTV</button>
//         </a>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

export default function Attendance() {
  const [attendance, setAttendance] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // 🚧 For now, use mock data instead of API (backend not connected)
    const mockData = {
      "08:00-08:30": { Ali: "Present", Sara: "Absent", John: "Present" },
      "08:30-09:00": { Ali: "Present", Sara: "Present", John: "Absent" },
      "09:00-09:30": { Ali: "Absent", Sara: "Present", John: "Present" },
    };
    setAttendance(mockData);

    // ✅ Later, when backend is ready, uncomment this:
    /*
    fetch("http://127.0.0.1:5000/attendance")
      .then((res) => res.json())
      .then((data) => setAttendance(data))
      .catch((err) => console.error("Error fetching attendance:", err));
    */
  }, []);

  if (!attendance) {
    return <p style={{ padding: "20px" }}>Loading attendance data...</p>;
  }

  // ---- Calculate Summary ----
  const students = Object.keys(attendance[Object.keys(attendance)[0]]);
  const presentCount = students.filter((s) =>
    Object.values(attendance).some((slot) => slot[s] === "Present")
  ).length;
  const absentCount = students.length - presentCount;

  // ---- Search Filter ----
  const filteredStudents = students.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="attendance-container">
      <h1>📅 Attendance Record</h1>

      {/* Summary */}
      <div className="attendance-summary">
        <p>Total Students: {students.length}</p>
        <p>Present: {presentCount}</p>
        <p>Absent: {absentCount}</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="attendance-search"
      />

      {/* Table */}
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Time Slot</th>
            {filteredStudents.map((student, idx) => (
              <th key={idx}>{student}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(attendance).map((slot, i) => (
            <tr key={i}>
              <td>{slot}</td>
              {filteredStudents.map((student, j) => (
                <td key={j}>{attendance[slot][student]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Link to CCTV */}
      <div className="camera-link">
        <a href="/camera">
          <button>📹 Go to Live CCTV</button>
        </a>
      </div>
    </div>
  );
}
