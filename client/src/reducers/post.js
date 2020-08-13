import {
  GET_POSTS,
  GET_POST,
  POST_ERROR
} from '../actions/constants';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};