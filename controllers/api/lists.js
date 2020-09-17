const List = require('../../models/List');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne

};

async function index(req, res) {
    const lists = await List.find({});
    res.status(200).json(lists);
}

async function create(req, res) {
    const list = await List.create(req.body);
    res.status(201).json(list);
}

async function show(req, res) {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
}

async function update(req, res) {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedList);
}

async function deleteOne(req, res) {
    const deletedList = await List.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedList);
}
