import { cache } from "react";

const GITHUB_USERNAME = "imbjdd";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export type Day = {
  date: string;
  count: number;
};

export const getGithubContributions = cache(async (): Promise<Day[]> => {
  if (!GITHUB_TOKEN) return [];
  const today = new Date();
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);
  const from = new Date(Date.UTC(lastYear.getFullYear(), lastYear.getMonth(), lastYear.getDate(), 0, 0, 0)).toISOString();
  const to = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)).toISOString();

  const query = `
    query {
      user(login: \"${GITHUB_USERNAME}\") {
        contributionsCollection(from: \"${from}\", to: \"${to}\") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    cache: "no-store"
  });
  const data = await res.json();
  if (!data.data) return [];
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  return weeks.flatMap((week: any) =>
    week.contributionDays.map((d: any) => ({
      date: d.date,
      count: d.contributionCount,
    }))
  );
});
