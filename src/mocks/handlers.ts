import { rest } from "msw";
import { API_URL } from "../app/constants";
import { testQuotes } from "../tests/testQuotes";
import { setupServer } from "msw/node";

const randomQuote = testQuotes[0].info;
const validQueries = testQuotes.map((q) => q.query);

export const handlers = [
    rest.get(`${API_URL}`, (req, res, ctx) => {
        const character = req.url.searchParams.get("character");
        if (character === null) {
            return res(ctx.json([randomQuote]), ctx.delay(150));
        }
        if (validQueries.includes(character)) {
            const quote = testQuotes.find((q) => q.query === character);
            return res(ctx.json([quote?.info]));
        }
        return res(ctx.json([]), ctx.delay(150));
    }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());