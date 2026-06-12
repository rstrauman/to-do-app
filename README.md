# To-do App

A simple To-do application built with React using the `useReducer` hook for state management.  
This project was created as Assignment 3 for a web development course.

## Features

- Add new tasks
- Edit existing tasks (updates task date but keeps position)
- Delete tasks
- Mark tasks as completed
- Persistent storage using `localStorage`
- Visual indicator for completed tasks

## Tech Stack

- React
- JavaScript (ES6+)
- CSS
- useReducer hook
- localStorage API

## Project Structure
src/
│── components/
│ ├── TaskList.jsx
│ ├── TaskItem.jsx
│ ├── AddTask.jsx
│── styles/
│ ├── App.css
│ ├── Task.css
│── App.jsx
│── main.jsx


## State Management

This project uses the `useReducer` hook instead of `useState` to manage all task actions:

- ADD_TASK
- EDIT_TASK
- DELETE_TASK
- TOGGLE_COMPLETE

## Persistence

Tasks are saved in `localStorage` so they remain even after refreshing the page.

## Deployment

This project is deployed using GitHub Pages.

Live link: *(https://rstrauman.github.io/to-do-app/)*

## Author

Created by Riley Strauman
