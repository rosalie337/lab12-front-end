# lab12-front-end

LAB 13: Todo List front end
===

Add a front end to your Todo-list back end!

## App Pages

1. Home Page (public)
1. Auth Page (public)
    - This page should let the user log in or sign up. Once logged in, the user token should be stored in state and passed down throughout the app so it can be used to make fetch calls.
1. TodoList Page (protected)
    - This page should list all todos for a user. There should be a way to add a new todo. There should be some way to 'complete' a todo from this page. The list should update without a hard refresh when a todo is added or completed.

![](./todos-outcomes.png)

## Points Break Down

Looking For | Points (10)
:--|--:
Deployed App with User Auth Page that stores token in App.js state | 2
Todo list (with redirect if use is not logged in) | 3
Deployed App with Live-reloading add todo feature | 3
Deployed App Live-reloading add complete todo feature | 2
Destructure all props and state | +1