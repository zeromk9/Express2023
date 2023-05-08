const pool = require('../data/config');

const router = (app) => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users ', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    //Mostrar un solo usuario por ID
    app.get('/users/:id',(request, response) => {
        const_id = request.params.id;

        pool.query('SELECT * FROM users WHERE id = ?',id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
    
    //Agregar un nuevo usuario
    app.post('/users',(request,response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error,result) => {
            if (error) throw error;

            response.status(201).send('User added with ID: ${result.inserted}');
        });if (error) throw error;
        response.send('User updated successfully');
    });

    //Actualizar un usuario existente
    app.put('/users/:id',(request,response)=>{
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE id = ?',(request.body,id),(error,result)=>{

        });
    });
};

module.exports = router;