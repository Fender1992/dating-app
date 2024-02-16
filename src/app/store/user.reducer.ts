import { createReducer, on } from '@ngrx/store';
import { getUser } from './user.actions';

const initialUsers = [1, 2, 3, 4];

export const userReducer = createReducer(
  initialUsers
  // on(getUser, (user) => initialUsers)
);
