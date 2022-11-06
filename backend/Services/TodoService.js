const TaskModel = require("../Models/Task");

//Get all Tasks
exports.getAllTasks = async () => {
    return await TaskModel.find();
};

//Create Tasks
exports.createTask = async (task) => {
    return await TaskModel.create(task);
};

//GetTasks by ID
exports.getTaskById = async (id) => {
    return await TaskModel.findById(id);
};

//Update Tasks
exports.updateTask = async (id, task) => {
    return await TaskModel.findByIdAndUpdate(id, task);
};


//Delete Tasks
exports.deleteTask = async (id) => {
    return await TaskModel.findByIdAndDelete(id);
};
