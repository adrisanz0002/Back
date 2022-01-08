import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import facturasRoutes from './routes/factura.routes'
import authRoutes from './routes/auth.routes'
import { createRoles } from './libs/initialSetUp'
import usersRoutes from './routes/user.routes'
import propiedadesRoutes from './routes/propiedad.routes'
import incidenciasMedicasRoutes from './routes/incidenciaMedica.routes'
import otrasIncidenciasRoutes from './routes/otraIncidencia.routes'

const app = express();
const cors = require('cors')
createRoles();

app.options('*', cors())

app.use(express.json());


app.set('pkg', pkg);

app.use(morgan('dev'));


app.get('/',(req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').name,
        version: app.get('pkg').version
    })
})

app.use('/api/otraIncidencia', otrasIncidenciasRoutes)
app.use('/api/incidenciasMedicas',incidenciasMedicasRoutes)
app.use('/api/propiedades',propiedadesRoutes)
app.use('/api/facturas', facturasRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
export default app;