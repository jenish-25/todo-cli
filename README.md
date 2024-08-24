Here’s a sample `README.md` file for your CLI todo list application:

```markdown
# Todo CLI

A simple command-line interface (CLI) for managing todos using Node.js. This CLI allows you to add, delete, update, mark todos as done, and list all todos. Data is stored in a `todos.json` file.

## Features

- **Add a new todo**: Add a new task to your todo list.
- **Delete a todo**: Remove a todo by its ID.
- **Update a todo**: Modify the task description of an existing todo.
- **Mark a todo as done**: Mark a todo as completed.
- **List all todos**: Display all todos in a table format.
- **Prevent duplicate entries**: Ensure no duplicate tasks are added.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bearerOP/todo-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-cli
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Link the CLI globally:

   ```bash
   npm link
   ```

## Usage

### Add a new todo

```bash
todo add "Your task description"
```

Example:
```bash
todo add "Buy groceries"
```

### Delete a todo by ID

```bash
todo delete <id>
```

Example:
```bash
todo delete 1
```

### Mark a todo as done by ID

```bash
todo done <id>
```

Example:
```bash
todo done 1
```

### Update a todo's task description by ID

```bash
todo update <id> <newTask>
```

Example:
```bash
todo update 1 "Buy groceries and milk"
```

### List all todos

```bash
todo list
```

## File Storage

Todos are stored in a JSON file named `todos.json`. Each todo entry includes:
- `id`: Unique identifier for the todo
- `task`: Description of the task
- `done`: Boolean indicating if the task is completed

## Development

To make changes to the CLI or add new features:

1. Make sure to update the `index.js` file with your changes.
2. Test your changes locally.
3. Publish new versions using:

   ```bash
   npm version <new-version>
   npm publish
   ```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## Contact

For any questions or support, please reach out to [ankity1892003@gmail.com](mailto:ankity1892003@gmail.com).
```

### Key Points

- **Installation and Usage**: Instructions for setting up and using the CLI.
- **Features**: Overview of what the CLI can do.
- **File Storage**: Details on how todos are stored.
- **Development**: Guidance for contributing and publishing changes.
