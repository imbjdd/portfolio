import { getGithubContributions } from "./github-contributions.server";
import type { Day } from "./github-contributions.server";
import React from "react";

const GITHUB_USERNAME = "imbjdd";

function getColor(count: number) {
  if (count === 0) return "#ebedf0";
  if (count < 2) return "#9be9a8";
  if (count < 4) return "#40c463";
  if (count < 6) return "#30a14e";
  return "#216e39";
}

const GithubContributionGraph = async () => {
  const contributions = await getGithubContributions();
  const weeks: Day[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }
  // Responsive cell size: smaller on mobile, larger on desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const cellSize = isMobile ? 16 : 24;
  const cellRadius = isMobile ? 4 : 7;

  return (
    <section className="pb-12 md:pb-32" id="content">
      <div className="px-2 sm:px-4 xl:px-96 w-full">
        <h2 className="text-2xl md:text-2xl font-semibold text-black mb-16 tracking-tight">
          My Github Contributions
        </h2>
        <div className="flex gap-0.5 sm:gap-1.5 w-full justify-center overflow-y-hidden bg-white rounded-2xl sm:rounded-3xl overflow-x-auto py-3 sm:py-6">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5 sm:gap-1.5">
              {week.map((day, di) => (
                <div
                  key={di}
                  style={{
                    width: cellSize,
                    height: cellSize,
                    background: getColor(day.count),
                    borderRadius: cellRadius,
                  }}
                  className="transition-transform duration-200 ease-out cursor-pointer hover:scale-110 sm:hover:scale-125 focus:scale-110 sm:focus:scale-125"
                  title={`${day.date}: ${day.count} commit${day.count > 1 ? "s" : ""}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubContributionGraph;