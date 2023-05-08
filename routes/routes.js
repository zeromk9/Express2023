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
        });
    });
};

module.exports = router;