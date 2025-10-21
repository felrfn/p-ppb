# 👟 Shoe Laundry REST API

This API is built using Node.js and Express.js to manage shoe data for a shoe laundry service. It simplifies recording, monitoring, and updating laundry status digitally, with data stored in Supabase.

---

## 🚀 Features & Goals

- 📦 **Data Management**: Full CRUD (Create, Read, Update, Delete) implementation.
- 🕒 **Auto Timestamps**: `entry_date` is set on creation, and `exit_date` is set when status changes to "selesai".
- 🚦 **Simple Statuses**: `pending` (default) and `selesai` (finished).
- 🔎 **Filtering**: Supports case-insensitive status filtering (e.g., `GET /items?status=selesai`).
- 🔄 **Clean Structure**: Code is organized into a Model-View-Controller (MVC) structure.

---

## 🛠️ Tech Stack

### Backend

- **Node.js** + **Express.js**: Runtime and server framework.
- **Supabase** (PostgreSQL): Database as a backend service.
- **@supabase/supabase-js**: Client library for database interaction.
- **cors**: Middleware for Cross-Origin Resource Sharing.
- **dotenv**: Environment variable management.

### Deployment

- **Vercel**: Hosting platform for the API server.

---

## 📂 Project Structure

```
    ├── package.json
    ├── pnpm-lock.yaml
    ├── README.md
    ├── .env
    └── src
        ├── config
        │   └── supabaseClient.js
        ├── controllers
        │   └── itemController.js
        ├── index.js
        ├── models
        │   └── itemModel.js
        └── routes
            └── itemRoutes.js
```

---

## ⚙️ Getting Started

### Clone Repository

```bash
git clone --filter=blob:none --no-checkout https://github.com/felrfn/p-ppb.git
cd p-ppb
git sparse-checkout init --cone
git sparse-checkout set responsi/modul-1
git checkout main
cd responsi/modul-1
```

### Install Dependencies

```bash
pnpm install
```

### Configure Environment

```bash
SUPABASE_URL=https://[YOUR_PROJECT_ID].supabase.co
SUPABASE_SERVICE_KEY=[YOUR_SERVICE_ROLE_KEY]
PORT=YOUR_PREFERENCE
```

### Run Server

```bash
# Development mode (with auto-reload)
pnpm run dev

# Production mode
pnpm start
```

---

## 🔐 API Endpoints

**Base URL:** `https://p-ppb-modul1-responsi.vercel.app`
| Method | Endpoint | Description |
|--------|-----------------------|----------------------------------|
| POST | /items | Add new shoe data |
| GET | /items | Retrieves all shoes |
| GET | /items?status=Selesai | Retrieves all shoes (filterable) |
| GET | /items/:id | Retrieves a single shoe by ID |
| PUT | /items/:id | Updates shoe data/status |
| DELETE | /items/:id | Deletes shoe data |

---

## 🧠 Data Structure

```json
{
  "id": 1,
  "customer_name": "Rafael",
  "shoe_type": "Boots",
  "status": "pending",
  "created_at": "2025-10-21T08:27:57.332796+00:00",
  "entry_date": "2025-10-21T08:27:57.332796+00:00",
  "exit_date": null
}
```

## Request/Response Examples

### `POST /items`

**Body:**

```json
{
  "customer_name": "Rafael",
  "shoe_type": "Boots"
}
```

**Response (201 Created):**

```json
{
  "id": 1,
  "customer_name": "Rafael",
  "shoe_type": "Boots",
  "status": "pending",
  "created_at": "2025-10-21T08:27:57.332796+00:00",
  "entry_date": "2025-10-21T08:27:57.332796+00:00",
  "exit_date": null
}
```

### `PUT /items/{id}`

**Body:**

```json
{
  "status": "selesai"
}
```

**Response (200 OK):**

```json
{
  "id": 1,
  "customer_name": "Rafael",
  "shoe_type": "Boots",
  "status": "selesai",
  "created_at": "2025-10-21T08:27:57.332796+00:00",
  "entry_date": "2025-10-21T08:27:57.332796+00:00",
  "exit_date": "2025-10-21T08:28:32.744+00:00"
}
```

### `DELETE /items/{id}`

**Response (204 No Content):** (no body)

## 📝 Notes

This project is part of a lab assignment (responsi). It is expected to be uploaded to a [Github Repository](https://github.com/felrfn/p-ppb/tree/main/responsi/modul-1) and deployed to [Vercel](https://p-ppb-modul1-responsi.vercel.app/).
