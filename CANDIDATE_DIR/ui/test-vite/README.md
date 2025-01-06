# **Test-Vite-Lambda**

Este proyecto combina un **frontend** desarrollado con **React y Vite** y un **backend** implementado como una función **Lambda** utilizando **Express** y **Serverless HTTP**. La finalidad es proporcionar una aplicación funcional que demuestra habilidades en desarrollo web moderno y arquitecturas serverless.

---

## 📂 **Estructura del Proyecto**

```plaintext
test-vite-lambda/
├── api/                    # Backend (AWS Lambda)
│   ├── handler.js          # Código principal de la función Lambda
│   ├── package.json        # Dependencias de la Lambda
│   ├── node_modules/       # (Generado por npm install)
│   └── ...
├── ui/                     # Frontend (React con Vite)
│   ├── public/             # Recursos estáticos (favicon, index.html)
│   ├── src/                # Código fuente del frontend
│   │   ├── components/     # Componentes de React
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Customers.jsx
│   │   │   ├── Settings.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Header.jsx
│   │   ├── App.jsx         # Componente principal
│   │   ├── main.jsx        # Punto de entrada de React
│   │   └── styles/         # Archivos CSS
│   ├── package.json        # Dependencias del frontend
│   └── node_modules/       # (Generado por npm install)
└── README.md               # Documentación del proyecto


🚀 Instalación y Configuración
Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clonar el Repositorio
Clona este repositorio en tu máquina local:
//Copiar código
git clone https://github.com/Manuelb3nvenuto/intern-interview-manuel.git

cd Test-vite/

2. Configuración del Frontend (ui)
Ve a la carpeta ui:
bash
//Copiar código
cd ui
Instala las dependencias:
bash
//Copiar código
npm install
Inicia el servidor de desarrollo:

bash
//Copiar código
cd intern-interview-manuel/CANDIDATE_DIR/ui/test-vite 
npm run dev

Abre el navegador en la URL que se muestra (normalmente http://localhost:5173/).

3. Configuración del Backend (api)
Ve a la carpeta api:

bash
//Copiar código
cd api
Instala las dependencias:
bash
//Copiar código
npm install express serverless-http
Sigue las instrucciones de la sección "Pruebas con Lambda Function URL" para ejecutar la función Lambda y probarla.


📜 Descripción de la Función Lambda

El backend de este proyecto está implementado como una función AWS Lambda utilizando Express y Serverless HTTP. Esta arquitectura permite manejar solicitudes HTTP directamente desde Lambda sin necesidad de servidores tradicionales. El frontend se comunica con el backend a través de solicitudes HTTP a las rutas definidas en la Lambda.

El archivo handler.js define las rutas utilizando Express, y la dependencia serverless-http convierte la aplicación en un manejador compatible con Lambda. Esto permite que la función Lambda procese solicitudes HTTP de manera eficiente, similar a un servidor tradicional.


En el backend se implementa como una función AWS Lambda utilizando Express y el paquete serverless-http. Las rutas disponibles son:

Rutas
Ruta raíz (/):

1. Responde con un mensaje de bienvenida.
Ejemplo de respuesta:

json
{
  "message": "Welcome to the Lambda Function!"
}

Ruta /metrics:

2. Devuelve métricas en formato JSON.
Ejemplo de respuesta:
json

{
  "revenue": 2345,
  "cost": 1008,
  "margin": 1337,
  "events": [
    { "name": "Invoice Created", "percentage": 50 },
    { "name": "KYC Completed", "percentage": 20 },
    { "name": "Support Case Opened", "percentage": 10 }
  ]
}

Consumo desde el frontend
El frontend puede consumir estas rutas utilizando fetch o cualquier librería HTTP como Axios. Ejemplo:

fetch('https://bejowo7zhu6chrchoggisbuqyy0vnaxs.lambda-url.us-west-2.on.aws/metrics')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

Las ventajas de la Arquitectura Serverless
Escalabilidad automática: AWS Lambda escala automáticamente según la demanda.
Costo eficiente: Solo pagas por las solicitudes procesadas.
Desarrollo local sencillo: La integración con Express permite probar el backend localmente antes de desplegarlo.

📝 Pruebas con Lambda Function URL
Para probar y ejecutar la función Lambda, sigue estos pasos:

Usar la Lambda Function URL directamente
Tu Lambda ya tiene una URL pública generada:

//Copiar código
https://bejowo7zhu6chrchoggisbuqyy0vnaxs.lambda-url.us-west-2.on.aws/

Probar con Postman
1. Abre Postman.
2. Crea una nueva solicitud GET.
3. Introduce la URL base:

//Copiar código
https://bejowo7zhu6chrchoggisbuqyy0vnaxs.lambda-url.us-west-2.on.aws/

4. Haz clic en Send.
5. Verifica la respuesta esperada:

json
{
  "message": "Welcome to the Lambda Function!"
}

Probar subrutas (/metrics)
1. Cambia la URL en Postman a:
//Copiar código
https://bejowo7zhu6chrchoggisbuqyy0vnaxs.lambda-url.us-west-2.on.aws/metrics

2. Haz clic en Send.
3. Verifica la respuesta esperada:
json
{
  "revenue": 2345,
  "cost": 1008,
  "margin": 1337,
  "events": [
    { "name": "Invoice Created", "percentage": 50 },
    { "name": "KYC Completed", "percentage": 20 },
    { "name": "Support Case Opened", "percentage": 10 }
  ]
}

Problemas comunes y soluciones
1. Error 404 (Not Found):
Verifica que la ruta solicitada esté definida en tu código Lambda

