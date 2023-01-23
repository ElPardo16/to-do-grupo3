import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskSlice'

//Create a file named /store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

export const store = configureStore({
  reducer: {
    task: taskReducer
  },
})

//This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.