# To Do List con Backend 


Esta aplicación es una lista de tareas que implementa un backend para mantener un estado, para que las tareas no se pierdan y quedan guardadas cuando son eliminadas, de esta manera la información en la base de datos quedan los registros incluyendo las actualizaciones de las tareas.


## Tecnologías


Las tecnologías que usamos para desarrollar el proyecto fueron:


- React - Librería diseño de interfaces
- NextJS - Framework Fullstack de React
- MongoDB - Bases de Datos
- Mongoose - ORM para mongo
- Express - Servidor http
- Netlify - Despliegue
- Postman - Testeo de API rest
- Gsap  - Librería para animaciones 



<br/>
<br/>

<img src='./public/img/tecnologias.png' width='450px'/>

<br/>
<br/>

## Consumo de la API

Para realizar las peticiones GET, POST, DELETE, PUT, se creó un EndPoint <code>/api/task </code>, Además se hizo uso de la función fetch en combinación de una función propia de Next llamada <code>GetServerSideProps </code>, para generar un sitio estatico que tiene un mejor performance.


        export async function getServerSideProps() {
            try {
                const json = await getData()
                return {
                props: {
                    listTask: json
                }
                }
            } catch (error) {
                console.log(error)
                return {
                props: {
                    listTask: []
                }
                }
            }
        }



Método POST

        const res = await fetch("/api/task", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
            }),
        });
        const json = await res.json();


## MONGOOSE

Usamos mongoose para el modelado de datos y para realizar las operaciones del CRUD.


        const taskSchema = Schema({
            title: {
                type: String,
                maxLength: 50,
                require: true
            },
            updates: {
                type: Array,
                default: []
            },
            status: {
                type: Number,
                default: 0
            }
        },{
            versionKey: false
        })




 Ejemplo de como obtenemos los datos de nuestra Data base: 


           Task.find()
