import 'react-native';
import React from 'react';
import TasksScreen from '../../src/screens/TasksScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let component;
const navigationMock = { navigate: jest.fn() };
const TaskTest = new TasksScreen();

describe('Tasks Screen - ', () => {

  it('should render correctly', () => {
    component = renderer.create(
      <TasksScreen navigation={navigationMock}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('toggleTarea', () => {
    expect(TaskTest.toggleTask(1)).toBe(undefined);
  });

  it('agregar Tarea', () => {
    const newTask = "newTask1";
    TaskTest.addTask(newTask);
    let allTasks = TaskTest.state.tasks;
    const numTarea = TaskTest.calcultateToBeCompletedTasks(allTasks);
    expect(numTarea).toBe(2);
  });

  it('abrir modal', () => {
    expect(TaskTest.openAddTaskModal()).toBe(undefined);
  });

  it('cerrar modal', () => {
    expect(TaskTest.closeAddTaskModal()).toBe(undefined);
  });

  it('cantidad correcta de tareas', () => {
    const cant  = 3;
    /**return array.find((element) => {
    return element.title === title;
  })**/
    let ultValTasks = TaskTest.state.tasks.find(tasks => tasks.id == 3 );
    expect(ultValTasks.id).toEqual(cant);
  });

  it('tareas a completar', () => {
    let allTasks = TaskTest.state.tasks;
    const numDeCompleted = TaskTest.calcultateToBeCompletedTasks(allTasks);
    expect(numDeCompleted).toEqual(2);
  });

});
