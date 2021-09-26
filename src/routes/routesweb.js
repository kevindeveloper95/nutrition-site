const { Router } = require('express');
const express = require('express')
const router = express.Router()



router.get('/',(req,res) =>{
    res.render('index')
});

router.get('/dieta-hipercalorica',(req,res) =>{
    res.render('dieta-hipercalorica')
});

router.get('/dieta-hiperproteica',(req,res) =>{
    res.render('dieta-hiperproteica')
});

router.get('/dieta-hipoproteica',(req,res) =>{
    res.render('dieta-hipoproteica')
});

router.get('/dieta-hipocalorica',(req,res) =>{
    res.render('dieta-hipocalorica')
});

router.get('/dieta-liquida',(req,res) =>{
    res.render('dieta-liquida')
});

router.get('/dieta-blanda',(req,res) =>{
    res.render('dieta-blanda')
});

router.get('/dieta-astringente',(req,res) =>{
    res.render('dieta-astringente')
});

router.get('/dieta-enteral',(req,res) =>{
    res.render('dieta-enteral')
});

router.get('/dieta-parenteral',(req,res) =>{
    res.render('dieta-parenteral')
});

router.get('/dieta-diabeticos',(req,res) =>{
    res.render('dieta-diabeticos')
});

router.get('/insuficiencia-renal',(req,res) =>{
    res.render('insuficiencia-renal')
});

router.get('/dieta-dash',(req,res) =>{
    res.render('dieta-dash')
});

router.get('/macronutrientes',(req,res) =>{
    res.render('macronutrientes')
});




module.exports = router