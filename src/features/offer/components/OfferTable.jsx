import React, { useState } from "react";
import PaginationControls from "./PaginationControls";

const OfferTable = ({ offerData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  const paginatedData = offerData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="overflow-hidden rounded-lg shadow-sm bg-white">
      <table className="w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="p-3 whitespace-nowrap">Event name</th>
            <th className="p-3 whitespace-nowrap">Home Team name</th>
            <th className="p-3 whitespace-nowrap">Away Team name</th>
            <th className="p-3 whitespace-nowrap">Start Date</th>
            <th className="p-3 whitespace-nowrap">BetRadar ID</th>
            <th className="p-3 whitespace-nowrap">Select for the game</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
              >
                <td className="p-3 whitespace-normal break-words max-w-xs">
                  {item.eventName || "N/A"}
                </td>
                <td className="p-3 whitespace-normal break-words max-w-xs">
                  {item.homeTeamName || "N/A"}
                </td>
                <td className="p-3 whitespace-normal break-words max-w-xs">
                  {item.awayTeamName || "N/A"}
                </td>
                <td className="p-3 whitespace-nowrap">
                  {item.startDate || "N/A"}
                </td>
                <td className="p-3 whitespace-nowrap">
                  {item.betRadarId || "N/A"}
                </td>
                <td className="p-3">
                  <input
                    type="checkbox"
                    className="accent-purple-600 w-4 h-4"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-3 text-gray-400">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <PaginationControls
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={offerData.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OfferTable;
