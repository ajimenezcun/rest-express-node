const { response } = require('express');

const getUsers = (req, res = response) => {

    const params = req.query;

    res.json(params);
}

const postUsers = (req, res = response) => {
    
    //const body = req.body;
    const { nombre, edad } = req.body;

    res.json({
        user : nombre,
        old: edad 
    });
}

const putUsers = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: `Usuario con ${id} actualizado`,
        status: true,
        origin: 'controller',
        method: 'put'
    });
}

const deleteUsers = (req, res = response) => {
    res.json({
        user: 'ajimenez',
        status: true,
        origin: 'controller',
        method: 'delete'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}