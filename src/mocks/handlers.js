import { rest } from "msw";
const BASE_URL = "https://api.publicapis.org";
const entries = `${BASE_URL}/entries`;
const categories = `${BASE_URL}/categories`;

const mockCategories = [
  "Animals",
  "Anime",
  "Anti-Malware",
  "Art & Design",
  "Authentication & Authorization",
  "Blockchain",
  "Books",
  "Business",
  "Calendar",
  "Cloud Storage & File Sharing",
  "Continuous Integration",
  "Cryptocurrency",
  "Currency Exchange",
  "Data Validation",
  "Development",
  "Dictionaries",
  "Documents & Productivity",
  "Email",
  "Entertainment",
  "Environment",
  "Events",
  "Finance",
  "Food & Drink",
  "Games & Comics",
  "Geocoding",
  "Government",
  "Health",
  "Jobs",
  "Machine Learning",
  "Music",
  "News",
  "Open Data",
  "Open Source Projects",
  "Patent",
  "Personality",
  "Phone",
  "Photography",
  "Programming",
  "Science & Math",
  "Security",
  "Shopping",
  "Social",
  "Sports & Fitness",
  "Test Data",
  "Text Analysis",
  "Tracking",
  "Transportation",
  "URL Shorteners",
  "Vehicle",
  "Video",
  "Weather",
];

export const handlers = [
  rest.get(entries, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 0,
        entries: [],
      })
    );
  }),
  rest.get(categories, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 51,
        categories: mockCategories,
      })
    );
  }),
];
