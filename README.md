# To-Do App with Local Storage

This is a simple to-do app built with HTML, CSS, and JavaScript. It allows users to add, complete, and delete tasks, and it stores the tasks in the browser's local storage so that they persist even after the page is refreshed.

## Features

- Add tasks with the click of a button or by pressing Enter.
- Mark tasks as completed.
- Delete tasks.
- Tasks are saved in local storage, so they persist across page reloads.

## Code Explanation

### HTML

The basic structure of the HTML file includes an input field for tasks, a button to add tasks, and a container for displaying the tasks.

### JavaScript

The JavaScript code handles the following:

- **Adding tasks:** When a task is added, it is displayed in the task list and saved to local storage.
- **Completing tasks:** Clicking the check mark button toggles the completion status of the task and updates local storage.
- **Deleting tasks:** Clicking the trash can button removes the task from the task list and from local storage.
- **Local storage:** Tasks are stored in local storage as an array of objects, each containing the task text and its completion status. Tasks are loaded from local storage when the page loads.

### CSS

Basic styling is applied to make the app visually appealing.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.
