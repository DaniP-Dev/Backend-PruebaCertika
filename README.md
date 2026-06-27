# Backend-PruebaCertika

API REST básica para gestión de tareas usando Node.js y Express, con almacenamiento en memoria.

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
npm install
```

## Variables de entorno

1. Crear un archivo `.env` en la raíz del proyecto tomando como base `.env.example`.
2. Variables disponibles:
   - `PORT`: puerto del servidor (por defecto `3000`)
   - `CORS_ORIGIN`: origen permitido por CORS (por defecto `*`)

Ejemplo:

```env
PORT=3000
CORS_ORIGIN=*
```

## Ejecución

- Desarrollo (con recarga):

```bash
npm run dev
```

- Producción:

```bash
npm start
```

Servidor base: `http://localhost:3000`

## Endpoints

Prefijo de tareas: `/api/tasks`

- `POST /api/tasks` - Crear tarea.
  - Body: `{ "title": "Mi tarea", "status": "pending" }`
  - `title` es obligatorio.
  - `status` es opcional (`pending` o `completed`).

- `GET /api/tasks` - Listar tareas.

- `GET /api/tasks/:id` - Obtener tarea por ID.

- `PUT /api/tasks/:id` - Actualizar tarea completa.
  - Body: `{ "title": "Nuevo titulo", "status": "completed" }`
  - `title` es obligatorio.

- `PATCH /api/tasks/:id` - Actualizar tarea (misma validación que `PUT`).

- `PATCH /api/tasks/:id/complete` - Marcar tarea como completada.

- `DELETE /api/tasks/:id` - Eliminar tarea.

Endpoint adicional:

- `GET /health` - Verificar estado del servicio.

## Respuestas y errores básicos

- `201` al crear correctamente.
- `200` en lecturas y actualizaciones.
- `204` al eliminar correctamente.
- `400` para entradas inválidas (por ejemplo, `title` vacío, `status` inválido o ID inválido).
- `404` cuando la tarea no existe.