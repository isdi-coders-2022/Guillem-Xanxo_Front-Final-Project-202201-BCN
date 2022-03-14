import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}viatges/crono`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        viatges: [
          {
            origen: "Barcelona",
            desti: "Sort",
            places: 3,
            horaSortida: 18,
            comentaris: "S'accepten animals",
            dones: false,
            data: "2018-02-12 19:23:45",
            id: "1",
          },
        ],
      })
    );
  }),
  rest.delete(`${process.env.REACT_APP_API_URL}viatges/2`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
];
