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




module.exports = router