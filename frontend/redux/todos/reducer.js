import {
  ADD_TODO,
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_PENDING,
  REMOVE_TODO,
  SET_FETCH_TODOS_ERROR,
  SET_FETCH_TODOS_PENDING,
  SET_TODOS,
} from "./constants";

const initialState = {
  FETCH_TODOS: [],
  FETCH_TODOS_PENDING: false,
  SELECTED_TODOS: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, [FETCH_TODOS]: action.payload };
    case SET_FETCH_TODOS_PENDING:
      return { ...state, [FETCH_TODOS_PENDING]: action.payload };
    case SET_FETCH_TODOS_ERROR: {
      return { ...state, [FETCH_TODOS_ERROR]: action.payload };
    }
    case ADD_TODO: {
      const prevSelectedItems = state.SELECTED_TODOS;

      const newTodo = action?.payload;

      const selectedItemIndex = prevSelectedItems.find(
        (item) => item?.id === newTodo?.id
      );

      let updatedTodoList = [];
      if (!selectedItemIndex) {
        updatedTodoList = [...prevSelectedItems, { ...newTodo, quantity: 1 }];
      } else {
        updatedTodoList = prevSelectedItems.map((item) => {
          if (item?.id == newTodo?.id) {
            return { ...item, quantity: item?.quantity + 1 };
          }
          return item;
        });
      }

      return { ...state, SELECTED_TODOS: updatedTodoList };
    }

    case REMOVE_TODO: {
      const prevSelectedItems = state.SELECTED_TODOS;
      const todo = action?.payload;
      const updatedPrevSelectedItems = prevSelectedItems
        .filter((item) => {
          if (item.id == todo.id) {
            return {
              ...item,
              quantity: item.quantity > 0 ? item.quantity-- : 0,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);
      return { ...state, SELECTED_TODOS: updatedPrevSelectedItems };
    }

    default:
      return state;
  }
};

export default todoReducer;
