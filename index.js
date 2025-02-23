#!/usr/bin/env node

const fs = require('fs');
const { program } = require('commander');
const chalk = require('chalk');
const Table = require('cli-table3');

const TODO_FILE = 'todos.json';

function readTodos() {
  try {
    const data = fs.readFileSync(TODO_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

function listTodos(todos) {
  if (todos.length === 0) {
    console.log(chalk.yellow('No todos found.'));
  } else {
    const table = new Table({
      head: [chalk.cyan('ID'), chalk.cyan('Task'), chalk.cyan('Status')],
      colWidths: [10, 50, 15]
    });

    todos.forEach((todo) => {
      const status = todo.done ? chalk.green('Done') : chalk.red('Not Done');
      table.push([todo.id, todo.task, status]);
    });

    console.log(table.toString());
  }
}

program
  .command('add <todo>')
  .description('Add a new todo')
  .action((todo) => {
    const todos = readTodos();

    if (todos.some(t => t.task.toLowerCase() === todo.toLowerCase())) {
      console.log(chalk.red(`Todo "${todo}" already exists.`));
      return;
    }

    todos.push({ id: todos.length + 1, task: todo, done: false });
    writeTodos(todos);
    console.log(chalk.green(`Added todo: "${todo}"`));
    listTodos(todos);  
  });

program
  .command('delete <id>')
  .description('Delete a todo by its ID')
  .action((id) => {
    let todos = readTodos();
    const initialLength = todos.length;

    todos = todos.filter((todo) => todo.id !== parseInt(id));
    if (todos.length === initialLength) {
      console.log(chalk.yellow(`Todo with ID: ${id} not found.`));
    } else {
      todos=todos.map((todo,index)=>({
        id:index+1,
        task:todo.task,
        done:todo.done
      }))
      writeTodos(todos);
      console.log(chalk.red(`Deleted todo with ID: ${id}`));
      listTodos(todos);  
    }
  });

program
  .command('done <id>')
  .description('Mark a todo as done by its ID')
  .action((id) => {
    const todos = readTodos();
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      todo.done = true;
      writeTodos(todos);
      console.log(chalk.blue(`Marked todo with ID: ${id} as done`));
      listTodos(todos);  // List todos after marking as done
    } else {
      console.log(chalk.yellow(`Todo with ID: ${id} not found`));
    }
  });

program
  .command('update <id> <newTask>')
  .description('Update a todo task by its ID')
  .action((id, newTask) => {
    const todos = readTodos();
    const todo = todos.find((todo) => todo.id === parseInt(id));

    if (todo) {
      if (todos.some(t => t.task.toLowerCase() === newTask.toLowerCase() && t.id !== parseInt(id))) {
        console.log(chalk.red(`Todo "${newTask}" already exists.`));
        return;
      }

      todo.task = newTask;
      writeTodos(todos);
      console.log(chalk.green(`Updated todo with ID: ${id} to "${newTask}"`));
      listTodos(todos);  // List todos after updating
    } else {
      console.log(chalk.yellow(`Todo with ID: ${id} not found`));
    }
  });

program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = readTodos();
    listTodos(todos);
  });

program.parse(process.argv);
