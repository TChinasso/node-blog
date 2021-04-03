const express = require('express');
const mongoose = require('mongoose');
const createCategorie = require('../models/categories')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('admin/index')
})
router.get('/posts', (req, res) => {
    res.send('Pagina de posts')
})
router.get('/categorias', (req, res) => {
    res.render('admin/categorias')
})
router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})
router.post('/categorias/nova', (req, res) => {
    createCategorie(req.body)
        .save()
        .then(() => {
            console.log('Categoria cadastrada')
            res.redirect('/admin/categorias')
        })
        .catch((err) => {
            console.log(errr)
        })
})

module.exports = router