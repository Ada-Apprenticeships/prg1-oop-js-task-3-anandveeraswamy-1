PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger(value) {        
  const INT = /^[0-9]+$/;
  return INT.test(value);
}

function validatePriority(priority) { // value can be a string or a number (integer)
  const validPriority = [1,3,5,7];
  const priorityInt = Number(priority);
  if(validInteger(priorityInt) && validPriority.includes(priorityInt)) {
    return priorityInt;
  }
  return 1; // LOW priority
}

function todaysDate() {
  const date = new Date();
  
  const day = String(date.getDate()).padStart(2,0);
  const month = String(date.getMonth()+1).padStart(2,0);
  const year = date.getFullYear();
  
  const hours = String(date.getHours()).padStart(2,0);
  const minutes = String(date.getMinutes()).padStart(2,0);
  const seconds = String(date.getSeconds()).padStart(2,0);

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
}

class Task  {  
  _added;
  _title;
  _priority;

  constructor(title,priority) {
    this._title = title;
    this._priority = validatePriority(priority);
    this._added = todaysDate();
  }

  get added() {
    return this._added;
  }

  get title() {
    return this._title;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {    
      this._priority = validatePriority(priority);    
  }  
}

class ToDo {
  tasks = [];

  constructor() {

  }

  add(task){
    this.tasks.push(task);
    return this.tasks.length;
  }    

  remove(title) {
    for(let i=0; i < this.tasks.length; i++) {
      if(this.tasks[i].title == title) {
        this.tasks.splice(i,1);
        return true;
      }
    }
      return false;
  }

  list(priority=0) {
    let filteredList = [];
    priority = validatePriority(priority);
    for(let task of this.tasks) {
      if(task.priority == priority) {
        filteredList.push(task)
      }
    }    
    return filteredList;
  }

  task(title) {
    for(let task of this.tasks) {
      if(task.title == title) {
        return task;
      }
    } 
    throw new Error(`Task ${title} Not Found`)   
  }
}

let task = new Task('Get Cappuccino', PRIORITY['MEDIUM'])
let taskList = new ToDo ()
//taskList.add (task )
taskList.add (new Task( 'Get Cappuccino', PRIORITY [ 'HIGH' ]) )
taskList.add (new Task( 'Order Lunch', PRIORITY [ 'MEDIUM' ]) )
taskList.add (new Task( 'Complete Project Sprint', PRIORITY [ 'LOW' ]) )
//console.log(taskList.tasks);
//console.log(taskList.list());
taskList.remove('Order Lunch');
try {
  console.log(taskList.task('dsfsfGet Cappuccino'));
}
catch(error) {
  console.error(`${error.message}`)
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}