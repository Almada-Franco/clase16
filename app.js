const express=require('express');
const app=express();
const path=require('path'); // antes de ejecutar inicializar el archivo package.json e instalar el modulo express

app.get('/',(req,res)=>
res.sendFile(path.join(__dirname,'/view/index.html')));

app.get('/babbage',(req,res)=>
res.sendFile(path.join(__dirname,'/view/babbage.html')));

app.get('/berners-lee',(req,res)=>
res.sendFile(path.join(__dirname,'/view/berners-lee.html')));

app.get('/clarke',(req,res)=>
res.sendFile(path.join(__dirname,'/view/clarke.html')));

app.get('/hamilton',(req,res)=>
res.sendFile(path.join(__dirname,'/view/hamilton.html')));

app.get('/hopper',(req,res)=>
res.sendFile(path.join(__dirname,'/view/hopper.html')));

app.get('/lovelace',(req,res)=>
res.sendFile(path.join(__dirname,'/view/lovelace.html')));

app.get('/turing',(req,res)=>
res.sendFile(path.join(__dirname,'/view/turing.html')));


app.listen(3030,()=>console.log('Servidor de alta'));

app.use(express.static(path.join(__dirname, 'public')));/*al usar.use(express.static()), le estoy indicando que todos los archivos estaticos como
imagenes, gif o pdf, los valla a buscar a partir dentro de ese path que le indico*/