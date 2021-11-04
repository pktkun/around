import { v4 as uuid } from "uuid";

// ADD_THREAD
export const addThread = (thread) => ({
  type: 'ADD_THREAD',
  thread: {
    ...thread,
    id: uuid()
  }
});