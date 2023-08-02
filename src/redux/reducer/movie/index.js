import { ActionType } from "../../action/action-types";

const initialState = {
  movies: [
    {
      name: "code lab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate blanditiis sequi fuga, perferendis mollitia veniam, dolores iste eligendi unde tempora dignissimos, culpa doloribus consequatur? Soluta cumque itaque in nam!",
    },
  ],
  movie: {},
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_MOIVES:
      return { ...initialState, movies: payload };

    case ActionType.SELECT_MOVIE:
      return { ...initialState, movie: payload };

    default:
      return state;
  }
};
