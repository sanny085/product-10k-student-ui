import {
  FirstRankerLabel,
  SearchIcon,
  SecondRankerLabel,
  ThirdRankerLabel,
} from "@/shared/svgIcons/classroom";
import styles from "./LeaderBoard.module.css";
const LeaderBoard = () => {
  const linear_gradient = {
    background: "linear-gradient(90deg, #125DA1 0%, #1CABCB 93.98%)",
    color: "white",    
  };

  const studentData = [
    {
      rank: 1,
      name: "vikranth K",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 200,
      img: <FirstRankerLabel />,
    },
    {
      rank: 2,
      name: "kranth K",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 300,
      img: <SecondRankerLabel />,
    },
    {
      rank: 3,
      name: "vikranth A",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 100,
      img: <ThirdRankerLabel />,
    },
    {
      rank: 4,
      name: "vanith p",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 100,
    },
    {
      rank: 46,
      name: "You",
      points: 200,
      streak: "12 days",
      lastWeekPoints: 100,
    },
    {
      rank: 9,
      name: "vikranth K",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 200,
    },
    {
      rank: 2,
      name: "kranth K",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 300,
    },
    {
      rank: 3,
      name: "vikranth A",
      points: 872,
      streak: "12 days",
      lastWeekPoints: 100,
    },
  ];
  const Row = ({ rank, name, points, streak, lastWeekPoints, img }) => (
    <tr
      className={`text-center bg-white ${
        rank === 1
          ? "font-bold text-denim_Blue"
          : rank === 46
          ? styles.student_status
          : ""
      }`}
    >
      <td className="py-[11px] ">{img ? <div className="mx-auto w-fit"> {img}</div> : rank}</td>
      <td className="py-[11px]">{name}</td>
      <td className="py-[11px]">{points}</td>
      <td className="py-[11px]">{streak}</td>
      <td className="py-[11px]">{"+" + lastWeekPoints}</td>
    </tr>
  );
  return (
    <div className={styles.table_parent}>
      <div className="items-center sticky top-0 z-0 bg-white flex justify-between px-[16px] py-[8.5px]">
        <p className="font-bold">Batch June, 23</p>
        <p className={styles.table_heading_text}>Leaderboard</p>
        <p>
          <SearchIcon />
        </p>
      </div>
      <table className={`${styles.table} `}>
        <thead className="sticky top-0 " style={linear_gradient} >
          <tr>
            <th className="py-[11px]">Rank</th>
            <th className="py-[11px]">Name</th>
            <th className="py-[11px]">Points</th>
            <th className="py-[11px]">Current Streak</th>
            <th className="py-[11px]">
              Points earned
              <p className="text-[10px] tracking-wide font-semibold">
                ( last week)
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((item, idx) => {
            return (
              <Row
                key={item.rank}
                name={item.name}
                rank={item.rank}
                points={item.points}
                streak={item.streak}
                lastWeekPoints={item.lastWeekPoints}
                img={item.img}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LeaderBoard;
