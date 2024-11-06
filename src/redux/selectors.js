import { VISIBILITY_FILTERS } from "../core/utilis/constants";

const getTodosByVisibilityFilter = (allTodos, visibilityFilter) => {
switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
}

export default getTodosByVisibilityFilter;