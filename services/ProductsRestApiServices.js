// import Product from "../model/Product";
//
// export default class ProductsRestApiService {
//     static restApiUrl = 'http://localhost:3004';
//
//     static getTasks(callback, errCallback) {
//         fetch(`${this.restApiUrl}/tasks`)
//             .then(resp => {
//                 if (resp.ok) {
//                     return resp.json()
//                 } else {
//                     throw new Error('Connection error');
//                 }
//             })
//             .then(tasks => {
//                 const data = tasks.map(task =>
//                     new Task(
//                         task.id,
//                         task.title,
//                         task.taskDescription,
//                         this.getStatusNameFromRest(task.progress)
//                     )
//                 );
//
//                 if (typeof callback === 'function') {
//                     callback(data);
//                 }
//             })
//             .catch(err => {
//                 if (typeof errCallback === 'function') {
//                     errCallback(err);
//                 }
//             })
//     }
//
//     static addTask(task, callback, errorCallback) {
//         const taskToAdd = {
//             id: null,
//             title: task.title,
//             taskDescription: task.description,
//             progress: this.getStatusNameForRest(task.status)
//         };
//
//         fetch(`${this.restApiUrl}/tasks`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(taskToAdd)
//         })
//             .then(resp => {
//                 if (resp.ok) {
//                     return resp.json();
//                 } else {
//                     throw new Error('Connection error');
//                 }
//             })
//             .then(task => {
//                 const savedTask = new Task(
//                     task.id,
//                     task.title,
//                     task.taskDescription,
//                     this.getStatusNameFromRest(task.progress)
//                 );
//
//                 if (typeof callback === 'function') {
//                     callback(savedTask);
//                 }
//             })
//             .catch(err => {
//                 if (typeof errorCallback === 'function') {
//                     errorCallback(err);
//                 }
//             })
//     }
//
//     static getStatusNameFromRest(status) {
//         let myStatus;
//         switch (status) {
//             case 'inProgres':
//                 myStatus = 'started';
//                 break;
//             case 'finished':
//                 myStatus = 'done';
//                 break;
//             case 'notStarted':
//             default:
//                 myStatus = 'todo';
//                 break;
//         }
//         return myStatus;
//     }
//
//     static getStatusNameForRest(status) {
//         let restStatus;
//         switch (status) {
//             case 'started':
//                 status = 'inProgres';
//                 break;
//             case 'done':
//                 status = 'finished';
//                 break;
//             case 'todo':
//             default:
//                 status = 'notStarted';
//                 break;
//         }
//         return status;
//     }
// }