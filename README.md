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
Then run: npm run dev
Ensure the Rails API is running at http://localhost:3000

### Informations
Vue Router for client-side routing.
Axios for making HTTP requests.
TypeScript for type safety.

### Notes
The HomeView component fetches the list of hives from the API on mount and includes a form to add a new hive which posts to the api.
The HiveDetails component fetches details of a hive based on the ID from the route parameters.
