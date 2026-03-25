const Fly = require('../models/Fly');
const FlyService = require('../services/FlyService');

function getAll(req, res) {
    Fly.find({})
    .then(flys => {
        if (flys.length) return res.status(200).send({ flys })
        return res.status(204).send({ message: 'No content' });
    }).catch(error => res.status(500).send({ error }));
}

function getById(req, res) {
    const { id } = req.params;
    Fly.findById(id)
    .then(fly => {
        if (fly) return res.status(200).send({ fly });
        return res.status(404).send({ message: 'Not found' });
    }).catch(error => res.status(500).send({ error }));
}

function create(req, res) {
    let flyService = FlyService.validate(req.body)
    let fly = new Fly(req.body);
    fly.save()
    .then(fly => res.status(201).send({ fly }))
    .catch(error => res.status(500).send({ error }));
}

function update(req, res) {}

function deleteAll(req, res) {}
