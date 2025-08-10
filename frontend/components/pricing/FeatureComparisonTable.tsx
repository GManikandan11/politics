'use client';
import React from 'react';
import clsx from 'clsx';

export default function FeatureComparisonTable({ data }: { data: any }) {
  if (!data) return null;

  const { title, columns, rows } = data;

  return (
    <div className='container mx-auto px-4 max-w-7xl '>
    <div className="overflow-x-auto mt-20 font-inter">
      <h3
        className="mb-10 text-center font-grotesque text-[96px] leading-tight tracking-tight text-gray-900"
      >
        {title}
      </h3>

      <table className="min-w-full border-collapse text-sm">
        <thead className="sticky top-0 bg-white z-10 border-b border-gray-200 shadow-sm">
          <tr>
            <th className="text-left px-4 py-3 font-semibold text-gray-800 text-base">
              Solution
            </th>
            {columns.map((col: string, i: number) => (
              <th
                key={i}
                className="text-center px-4 py-3 font-semibold text-gray-800 text-base"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row: any, rowIndex: number) => (
            <React.Fragment key={rowIndex}>
              {row.group && (
                <tr className="bg-gray-100 border-t border-gray-300">
                  <td
                    colSpan={columns.length + 1}
                    className="px-4 py-2 font-bold text-gray-900"
                  >
                    {row.group}
                  </td>
                </tr>
              )}

              <tr
                className={clsx(
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                  'border-b border-gray-100'
                )}
              >
                <td className="px-4 py-3 text-gray-800 text-sm">{row.feature}</td>
                {row.values.map((val: string, colIndex: number) => (
                  <td key={colIndex} className="text-center px-4 py-3">
                    {val === '✔' || val.toLowerCase() === 'true' ? (
                      <span className="text-[18px] font-bold" style={{ color: '#485aff' }}>
                        ✔
                      </span>
                    ) : (
                      <span className="text-gray-800 text-sm">{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
