// utils/getMediumCounts.js
export function getMediumCounts(objects) {
  const counts = {};

  for (const obj of objects) {
    const medium = obj.medium?.trim() || "Unknown";
    counts[medium] = (counts[medium] || 0) + 1;
  }

  return Object.entries(counts)
    .map(([medium, count]) => ({ medium, count }))
    .sort((a, b) => b.count - a.count); // top to bottom
}
