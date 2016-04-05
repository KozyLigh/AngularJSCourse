/**
 * Created by Kozy on 4.4.2016.
 */
angular.module('Frello', [])
    .controller('FrelloToDoListController', function($scope) {
        var todoList = this;
        var taskIndex=-1;
        todoList.todos = [];
        todoList.archivedTodos = [];
        $scope.addButton = 'Add new task';
        $scope.addEditBtnClass='btn-primary';

        todoList.addTodo = function(todoText) {
            if(taskIndex!=-1){
                todoList.todos[taskIndex].text=todoText;
                taskIndex=-1;
                $scope.addButton = 'Add new task';
                $scope.addEditBtnClass='btn-primary';

            }else{
                todoList.todos.push({text:todoText, done:false});
            }
            todoList.todoText = '';
        };

        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done){
                    todoList.todos.push(todo);
                }else{
                    todo.done=false;
                    todoList.archivedTodos.push(todo);
                }
            });
        };

        todoList.unArchive = function() {
            var oldTodos = todoList.archivedTodos;
            todoList.archivedTodos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done){
                    todoList.archivedTodos.push(todo);
                }else{
                    todo.done=false;
                    todoList.todos.push(todo);
                }
            });
        };

        todoList.editTodo=function(todo){
            taskIndex=todoList.todos.indexOf(todo);
            todoList.todoText = todo.text;
            $scope.addButton = 'Edit task';
            $scope.addEditBtnClass='btn-success';
        }
        todoList.checkHide = function() {
            return todoList.shouldHide;
        };
        todoList.toggleHide = function() {
            if(todoList.shouldHide){
                todoList.shouldHide=false;
            }else{
                todoList.shouldHide=true;
            }

        };

    });

