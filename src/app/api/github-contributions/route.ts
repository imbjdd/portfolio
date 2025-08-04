import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const GITHUB_USERNAME = "imbjdd"; // À personnaliser
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "Aucun token GitHub côté serveur." }, { status: 500 });
  }

  const today = new Date();
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);
  // Format ISO complet (YYYY-MM-DDTHH:mm:ssZ)
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
  });

  const data = await res.json();
  if (data.errors) {
    return NextResponse.json({ error: data.errors[0].message }, { status: 500 });
  }
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  const days = weeks.flatMap((week: any) =>
    week.contributionDays.map((d: any) => ({
      date: d.date,
      count: d.contributionCount,
    }))
  );
  return NextResponse.json({ days });
}
