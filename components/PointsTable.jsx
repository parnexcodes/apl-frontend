import React from "react";

function PointsTable(props) {
  let data = props.data
  console.log(data)
  return (
    <>
{/* Group A */}
<div className="ml-4 text-white text-2xl font-semibold">Group A (League Matches)</div>
<div class="overflow-x-auto relative m-4 pb-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                #
                </th>
                <th scope="col" class="py-3 px-6">
                Team
                </th>
                <th scope="col" class="py-3 px-6">
                Matches
                </th>
                <th scope="col" class="py-3 px-6">
                    Won
                </th>
                <th scope="col" class="py-3 px-6">
                Lost
                </th>
                <th scope="col" class="py-3 px-6">
                Drawn
                </th>
                <th scope="col" class="py-3 px-6">
                Tied
                </th>
                <th scope="col" class="py-3 px-6">
                N/R
                </th>
                <th scope="col" class="py-3 px-6">
                NRR
                </th>
                <th scope="col" class="py-3 px-6">
                For
                </th>
                <th scope="col" class="py-3 px-6">
                Against
                </th>
                <th scope="col" class="py-3 px-6">
                Pts
                </th>
                <th scope="col" class="py-3 px-6">
                Last 5
                </th>
            </tr>
        </thead>
        <tbody>
          {
            data[0].standing.map((element, index) => {
              return (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td class="py-4 px-6 font-semibold">
                    {element.team_name}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.matches}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.won}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.lost}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.drawn}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.tied}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.no_result}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.net_rr}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.for}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.against}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.points}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.last_5}
                </td>
            </tr>
              )
            })
          }
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
            </tr> */}
        </tbody>
    </table>
</div>

{/* Group B */}
<div className="ml-4 text-white text-2xl font-semibold">Group B (League Matches)</div>
<div class="overflow-x-auto relative m-4 pb-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
                <th scope="col" class="py-3 px-6">
                #
                </th>
                <th scope="col" class="py-3 px-6">
                Team
                </th>
                <th scope="col" class="py-3 px-6">
                Matches
                </th>
                <th scope="col" class="py-3 px-6">
                    Won
                </th>
                <th scope="col" class="py-3 px-6">
                Lost
                </th>
                <th scope="col" class="py-3 px-6">
                Drawn
                </th>
                <th scope="col" class="py-3 px-6">
                Tied
                </th>
                <th scope="col" class="py-3 px-6">
                N/R
                </th>
                <th scope="col" class="py-3 px-6">
                NRR
                </th>
                <th scope="col" class="py-3 px-6">
                For
                </th>
                <th scope="col" class="py-3 px-6">
                Against
                </th>
                <th scope="col" class="py-3 px-6">
                Pts
                </th>
                <th scope="col" class="py-3 px-6">
                Last 5
                </th>
            </tr>
        </thead>
        <tbody>
        {
            data[1].standing.map((element, index) => {
              return (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td class="py-4 px-6 font-semibold">
                    {element.team_name}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.matches}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.won}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.lost}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.drawn}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.tied}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.no_result}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.net_rr}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.for}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.against}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.points}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.last_5}
                </td>
            </tr>
              )
            })
          }
        </tbody>
    </table>
</div>

{/* Group C */}
<div className="ml-4 text-white text-2xl font-semibold">Group C (League Matches)</div>
<div class="overflow-x-auto relative m-4 pb-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
                <th scope="col" class="py-3 px-6">
                #
                </th>
                <th scope="col" class="py-3 px-6">
                Team
                </th>
                <th scope="col" class="py-3 px-6">
                Matches
                </th>
                <th scope="col" class="py-3 px-6">
                    Won
                </th>
                <th scope="col" class="py-3 px-6">
                Lost
                </th>
                <th scope="col" class="py-3 px-6">
                Drawn
                </th>
                <th scope="col" class="py-3 px-6">
                Tied
                </th>
                <th scope="col" class="py-3 px-6">
                N/R
                </th>
                <th scope="col" class="py-3 px-6">
                NRR
                </th>
                <th scope="col" class="py-3 px-6">
                For
                </th>
                <th scope="col" class="py-3 px-6">
                Against
                </th>
                <th scope="col" class="py-3 px-6">
                Pts
                </th>
                <th scope="col" class="py-3 px-6">
                Last 5
                </th>
            </tr>
        </thead>
        <tbody>
        {
            data[2].standing.map((element, index) => {
              return (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td class="py-4 px-6 font-semibold">
                    {element.team_name}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.matches}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.won}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.lost}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.drawn}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.tied}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.no_result}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.net_rr}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.for}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.against}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.points}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.last_5}
                </td>
            </tr>
              )
            })
          }
        </tbody>
    </table>
</div>

{/* Group D */}
<div className="ml-4 text-white text-2xl font-semibold">Group D (League Matches)</div>
<div class="overflow-x-auto relative m-4 pb-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
                <th scope="col" class="py-3 px-6">
                #
                </th>
                <th scope="col" class="py-3 px-6">
                Team
                </th>
                <th scope="col" class="py-3 px-6">
                Matches
                </th>
                <th scope="col" class="py-3 px-6">
                    Won
                </th>
                <th scope="col" class="py-3 px-6">
                Lost
                </th>
                <th scope="col" class="py-3 px-6">
                Drawn
                </th>
                <th scope="col" class="py-3 px-6">
                Tied
                </th>
                <th scope="col" class="py-3 px-6">
                N/R
                </th>
                <th scope="col" class="py-3 px-6">
                NRR
                </th>
                <th scope="col" class="py-3 px-6">
                For
                </th>
                <th scope="col" class="py-3 px-6">
                Against
                </th>
                <th scope="col" class="py-3 px-6">
                Pts
                </th>
                <th scope="col" class="py-3 px-6">
                Last 5
                </th>
            </tr>
        </thead>
        <tbody>
        {
            data[3].standing.map((element, index) => {
              return (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td class="py-4 px-6 font-semibold">
                    {element.team_name}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.matches}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.won}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.lost}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.drawn}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.tied}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.no_result}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.net_rr}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.for}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.against}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.points}
                </td>
                <td class="py-4 px-6 font-semibold">
                    {element.last_5}
                </td>
            </tr>
              )
            })
          }
        </tbody>
    </table>
</div>

    </>
  );
}

export default PointsTable;
