# Bee Hives Front

## Description
This is the front-end application for managing bee hives, built with Vue.js and TypeScript. It connects to a Rails API to list all hives, add new hives, and view details of a specific hive.

## Project Setup

### Prerequisites
- Node.js (>= 16.20.0)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd bee-hives-front
2. **Install dependencies**
   ```bash
     npm install

### Run the project
Then run: 
   ```bash
     npm run dev
 ```
Ensure the Rails API is running at http://localhost:3000

### Informations
Vue Router for client-side routing.
Using simply "fetch" for making HTTP requests.
TypeScript for type safety.

### Notes
The app is using a central store, useHiveStore, which manages the state and actions that we can do with hives (create, fetching). On application load (App.vue), the store's fetchHives action is called to populate the hives state with data fetched from the API. The HomeView component is showing the form, and the HiveDetails component is here to display details about a hive.
