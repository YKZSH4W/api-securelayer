# api-securelayer

API REST para la plataforma de aprendizaje de ciberseguridad SecureLayer.

## Tecnologias

- Node.js + Express
- Prisma ORM
- MySQL

## Instalacion

```bash
pnpm install
```

## Variables de entorno

Crear un archivo `.env` en la raiz con:

```env
DATABASE_URL="mysql://usuario:contrasena@localhost:3306/securelayer"
PORT=3000
```

## Ejecutar

```bash
pnpm dev
```

---

## Endpoints

### Base

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/` | Verificar que la API esta funcionando |

---

### Usuarios — `/users`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/users` | Obtener todos los usuarios |
| GET | `/users/email/:email` | Obtener usuario por email |
| GET | `/users/username/:username` | Obtener usuario por username |
| POST | `/users/auth/register` | Registrar un nuevo usuario |
| POST | `/users/auth/login` | Iniciar sesion |

**Body POST `/users/auth/register`:**
```json
{
  "name": "string",
  "lastName": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "birthDate": "2024-01-01T00:00:00.000Z"
}
```

**Body POST `/users/auth/login`:**
```json
{
  "email": "string",
  "password": "string"
}
```

---

### Rutas de aprendizaje — `/routes`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/routes` | Obtener todas las rutas |
| POST | `/routes` | Crear una ruta |

**Body POST `/routes`:**
```json
{
  "level": "string",
  "name": "string",
  "difficulty": "string",
  "description": "string",
  "isCompleted": false
}
```

---

### Lecciones — `/lessons`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/lessons` | Obtener todas las lecciones |
| POST | `/lessons` | Crear una leccion |
| GET | `/lessons/route/:routeId` | Obtener lecciones por ruta |

**Body POST `/lessons`:**
```json
{
  "routeId": 1,
  "name": "string",
  "description": "string",
  "icon": "string",
  "isCompleted": false
}
```

---

### Actividades — `/activities`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/activities` | Obtener todas las actividades |
| POST | `/activities` | Crear una actividad |
| GET | `/activities/lesson/:lessonId` | Obtener actividades por leccion |

**Body POST `/activities`:**
```json
{
  "lessonId": 1,
  "name": "string",
  "description": "string",
  "icon": "string",
  "isCompleted": false,
  "type": "string",
  "xp": 100
}
```

---

### Preguntas — `/questions`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/questions` | Obtener todas las preguntas |
| POST | `/questions` | Crear una pregunta |
| GET | `/questions/activity/:activityId` | Obtener preguntas por actividad |

**Body POST `/questions`:**
```json
{
  "activityId": 1,
  "questionText": "string",
  "correctAnswer": "string",
  "explanation": "string",
  "type": "string",
  "order": 1,
  "support": "string"
}
```

---

### Opciones — `/options`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/options` | Obtener todas las opciones |
| POST | `/options` | Crear una opcion |
| GET | `/options/question/:questionId` | Obtener opciones por pregunta |

**Body POST `/options`:**
```json
{
  "questionId": 1,
  "optionText": "string",
  "isCorrect": false
}
```

---

### Inscripciones — `/enrolls`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/enrolls` | Obtener todas las inscripciones |
| POST | `/enrolls` | Crear una inscripcion |
| GET | `/enrolls/user/:userId` | Obtener inscripciones de un usuario |

**Body POST `/enrolls`:**
```json
{
  "userId": 1,
  "routeId": 1
}
```

---

### Logros — `/achievements`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/achievements` | Obtener todos los logros |
| POST | `/achievements` | Crear un logro |

**Body POST `/achievements`:**
```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "requiredXp": 500
}
```

---

### Logros de usuarios — `/users-achievements`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/users-achievements` | Obtener todos los logros de usuarios |
| POST | `/users-achievements` | Asignar logro a usuario |
| GET | `/users-achievements/user/:userId` | Obtener logros de un usuario |

**Body POST `/users-achievements`:**
```json
{
  "userId": 1,
  "achievementId": 1,
  "dateAchieved": "2024-01-01T00:00:00.000Z"
}
```

---

### Consejos de rutas — `/routes-advices`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/routes-advices` | Obtener todos los consejos de rutas |
| POST | `/routes-advices` | Crear un consejo de ruta |
| GET | `/routes-advices/route/:routeId` | Obtener consejos por ruta |

**Body POST `/routes-advices`:**
```json
{
  "routeId": 1,
  "type": "string",
  "adviceTitle": "string",
  "adviceText": "string"
}
```

---

### Consejos de lecciones — `/lessons-advices`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/lessons-advices` | Obtener todos los consejos de lecciones |
| POST | `/lessons-advices` | Crear un consejo de leccion |
| GET | `/lessons-advices/lesson/:lessonId` | Obtener consejos por leccion |

**Body POST `/lessons-advices`:**
```json
{
  "lessonId": 1,
  "type": "string",
  "adviceTitle": "string",
  "adviceText": "string"
}
```

---

### Progreso de lecciones — `/lessons-progress`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/lessons-progress` | Obtener todo el progreso de lecciones |
| POST | `/lessons-progress` | Registrar progreso en una leccion |
| GET | `/lessons-progress/lesson/:lessonId` | Obtener progreso por leccion |
| GET | `/lessons-progress/user/:userId` | Obtener progreso por usuario |
| GET | `/lessons-progress/user/:userId/lesson/:lessonId` | Obtener progreso de un usuario en una leccion |

**Body POST `/lessons-progress`:**
```json
{
  "userId": 1,
  "lessonId": 1,
  "progress": 50,
  "isCompleted": false
}
```

---

### Progreso de actividades — `/activities-progress`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/activities-progress` | Obtener todo el progreso de actividades |
| POST | `/activities-progress` | Registrar progreso en una actividad |
| GET | `/activities-progress/activity/:activityId` | Obtener progreso por actividad |
| GET | `/activities-progress/user/:userId` | Obtener progreso por usuario |
| GET | `/activities-progress/user/:userId/activity/:activityId` | Obtener progreso de un usuario en una actividad |

**Body POST `/activities-progress`:**
```json
{
  "activityId": 1,
  "userId": 1,
  "progress": 50,
  "isCompleted": false
}
```

---

### Intentos — `/attempts`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/attempts` | Obtener todos los intentos |
| POST | `/attempts` | Registrar un intento |
| GET | `/attempts/user/:userId` | Obtener intentos por usuario |
| GET | `/attempts/activity/:activityId` | Obtener intentos por actividad |
| GET | `/attempts/user/:userId/activity/:activityId` | Obtener intentos de un usuario en una actividad |

**Body POST `/attempts`:**
```json
{
  "userId": 1,
  "activityId": 1,
  "attemptDate": "2024-01-01T00:00:00.000Z",
  "isCorrect": false,
  "score": 80
}
```

---

### Respuestas de usuarios — `/users-answers`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/users-answers` | Obtener todas las respuestas |
| POST | `/users-answers` | Registrar una respuesta |
| GET | `/users-answers/attempt/:attemptId` | Obtener respuestas por intento |
| GET | `/users-answers/question/:questionId` | Obtener respuestas por pregunta |
| GET | `/users-answers/attempt/:attemptId/question/:questionId` | Obtener respuesta de un intento para una pregunta |

**Body POST `/users-answers`:**
```json
{
  "attemptId": 1,
  "questionId": 1,
  "answer": "string",
  "isCorrect": false
}
```

---

### Simulaciones de phishing — `/phishing-simulations`

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/phishing-simulations` | Obtener todas las simulaciones |
| POST | `/phishing-simulations` | Crear una simulacion |
| GET | `/phishing-simulations/activity/:activityId` | Obtener simulaciones por actividad |

**Body POST `/phishing-simulations`:**
```json
{
  "activityId": 1,
  "typeMessage": "email",
  "sender": "string",
  "content": "string",
  "isScam": true
}
```

---

## Errores

Todos los endpoints devuelven errores en el siguiente formato:

```json
{
  "error": "Descripcion del error"
}
```

| Codigo | Descripcion |
|--------|-------------|
| 400 | Bad Request — datos invalidos |
| 404 | Not Found — recurso no encontrado |
| 500 | Internal Server Error |
