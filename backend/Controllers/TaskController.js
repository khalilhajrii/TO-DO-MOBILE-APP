const TaskService = require("../Services/TodoService");

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json({ data: tasks, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTask = async (req, res) => {
    try {
        const task = await TaskService.createTask(req.body);
        res.json({ data: task, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await TaskService.getTaskById(req.params.id);
        res.json({ data: task, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await TaskService.updateTask(req.params.id, req.body);
        res.json({ data: task, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await TaskService.deleteTask(req.params.id);
        res.json({ data: task, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};