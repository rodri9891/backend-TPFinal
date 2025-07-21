//index.js
import express from 'express';
import cors from 'cors';
import productsRouter from '../ProyectoFinal/src/routes/productsRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// permitir todos los origenes
app.use(cors());

// rutas activas. El prefijo "api" evita que el SV sature

app.get("/", (req, res)=>{
    res.json({title: "Home Page"});
});
app.use('/api/products', productsRouter);


//manejar errores cod 404
app.use((req, res, next)=>{
    res.status(404).send("recurso o ruta invalida");
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server corriendo en puerto: ${PORT}`);
});


// nodemon
// apirest tienda oficial para admin y crud
// auth para resguardar datos en firestore firebase
// fallos en rutas 401 403 404 , 400 500
// requerimiento 1 - done
// requerimiento 2 - done
// requerimiento 3 - done
// middleware para rutas conocidas con estado 404 msg - done
// .env - done

// requerimiento 4