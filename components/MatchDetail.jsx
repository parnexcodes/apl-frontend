import React from "react";

function MatchDetail(props) {
  let data = props.data;
  console.log(data);
  return (
    <>
      <div className="mt-16 mb-8 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-white text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
          Scoreboard
        </h1>
		<h2 className="text-white text-lg text-center mt-4">{data.match_summary.summary}</h2>
      </div>

      <div className="container p-2 mx-auto  sm:p-4 dark:text-gray-100 dark:bg-gray-900 rounded-lg">
        <div className="grid grid-cols-2">
          <h2 className="mb-3 text-2xl font-semibold leading-tight text-left transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
            {data.team_a.name}
          </h2>
          <h2 className="mb-3 text-2xl font-semibold leading-tight text-right transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">{`${data.team_a.innings[0].summary.score} ${data.team_a.innings[0].summary.over}`}</h2>
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-right">
                <th title="Team name" className="p-3 text-left">
                  Batters
                </th>
                <th title="Wins" className="p-3">
                  R
                </th>
                <th title="Losses" className="p-3">
                  B
                </th>
                <th title="Win percentage" className="p-3">
                  4s
                </th>
                <th title="Games behind" className="p-3">
                  6s
                </th>
                <th title="Home games" className="p-3">
                  SR
                </th>
                <th title="Away games" className="p-3">
                  Min
                </th>
              </tr>
            </thead>
            <tbody>
              {data.team_a.scorecard[0].batting.map((element) => {
                return (
                  <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                    <td className="px-3 py-2 text-left">
                      <span>{element.name}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.runs}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.balls}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element['4s']}</span>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <span>{element['6s']}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.SR}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.minutes}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* <h2 className="mb-3 text-2xl font-semibold leading-tight">Team 1</h2> */}
        <div className="overflow-x-auto mt-6 rounded-lg">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-right">
                <th title="Team name" className="p-3 text-left">
                  Bowlers
                </th>
                <th title="Wins" className="p-3">
                  0
                </th>
                <th title="Losses" className="p-3">
                  M
                </th>
                <th title="Win percentage" className="p-3">
                  R
                </th>
                <th title="Games behind" className="p-3">
                  W
                </th>
                <th title="Home games" className="p-3">
                  0s
                </th>
                <th title="Away games" className="p-3">
                  4s
                </th>
                <th title="Away games" className="p-3">
                  6s
                </th>
                <th title="Away games" className="p-3">
                  WD
                </th>
                <th title="Away games" className="p-3">
                  NB
                </th>
                <th title="Away games" className="p-3">
                  Eco
                </th>
              </tr>
            </thead>
            <tbody>
			{data.team_a.scorecard[0].bowling.map((element) => {
                return (
                  <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                    <td className="px-3 py-2 text-left">
                      <span>{element.name}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.overs}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.maidens}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.runs}</span>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <span>{element.wickets}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element['0s']}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element['4s']}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element['6s']}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element.wide}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element.noball}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element.economy_rate}</span>
                    </td>
                  </tr>
                );
              })}				
            </tbody>
          </table>
        </div>
      </div>
      <div className="container p-2 mx-auto  sm:p-4 dark:text-gray-100 dark:bg-gray-900 mt-8 rounded-lg">
        <div className="grid grid-cols-2">
          <h2 className="mb-3 text-2xl font-semibold leading-tight text-left transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
            {data.team_b.name}
          </h2>
          <h2 className="mb-3 text-2xl font-semibold leading-tight text-right transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
		  {`${data.team_b.innings[0].summary.score} ${data.team_b.innings[0].summary.over}`}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-xs ">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-right">
                <th title="Team name" className="p-3 text-left">
                  Batters
                </th>
                <th title="Wins" className="p-3">
                  R
                </th>
                <th title="Losses" className="p-3">
                  B
                </th>
                <th title="Win percentage" className="p-3">
                  4s
                </th>
                <th title="Games behind" className="p-3">
                  6s
                </th>
                <th title="Home games" className="p-3">
                  SR
                </th>
                <th title="Away games" className="p-3">
                  Min
                </th>
              </tr>
            </thead>
            <tbody>
			{data.team_b.scorecard[0].batting.map((element) => {
                return (
                  <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                    <td className="px-3 py-2 text-left">
                      <span>{element.name}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.runs}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.balls}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element['4s']}</span>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <span>{element['6s']}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.SR}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.minutes}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <h2 className="mb-3 text-2xl font-semibold leading-tight">Team 1</h2> */}
        <div className="overflow-x-auto mt-6 rounded-lg">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-right">
                <th title="Team name" className="p-3 text-left">
                  Bowlers
                </th>
                <th title="Wins" className="p-3">
                  0
                </th>
                <th title="Losses" className="p-3">
                  M
                </th>
                <th title="Win percentage" className="p-3">
                  R
                </th>
                <th title="Games behind" className="p-3">
                  W
                </th>
                <th title="Home games" className="p-3">
                  0s
                </th>
                <th title="Away games" className="p-3">
                  4s
                </th>
                <th title="Away games" className="p-3">
                  6s
                </th>
                <th title="Away games" className="p-3">
                  WD
                </th>
                <th title="Away games" className="p-3">
                  NB
                </th>
                <th title="Away games" className="p-3">
                  Eco
                </th>
              </tr>
            </thead>
            <tbody>
			{data.team_b.scorecard[0].bowling.map((element) => {
                return (
                  <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                    <td className="px-3 py-2 text-left">
                      <span>{element.name}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.overs}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.maidens}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element.runs}</span>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <span>{element.wickets}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element['0s']}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{element['4s']}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element['6s']}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element.wide}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element.noball}</span>
                    </td>
					<td className="px-3 py-2">
                      <span>{element.economy_rate}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MatchDetail;
