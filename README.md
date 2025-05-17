# doit-test-task-1

Frontend blog UI with full CRUD on posts using Redux Toolkit and JSONPlaceholder as a mock API. Built with Next.js App Router and Material UI. Includes light/dark theme toggle and responsive layout.

## Demo

[Live Demo](https://doit-test-task-1.vercel.app/)

## Local Setup

To run the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/doit-test-task-1.git
   cd doit-test-task-1
   ```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`.

<pre><code>src/
├── app/
│   ├── layout.tsx               # Root layout with AppBar and theme providers
│   ├── page.tsx                 # Home page
│   └── posts/
│       ├── page.tsx             # Posts list page
│       ├── [id]/page.tsx        # Single post details page
│       └── create/page.tsx      # Create post page
├── components/
│   ├── AppBar.tsx               # Top navigation bar with theme toggle
│   ├── Sidebar.tsx              # Drawer navigation menu
│   ├── PostPreviewCard.tsx      # Card component for post previews
│   └── SinglePostCard.tsx       # Card component for single post details
├── lib/
│   ├── routes.ts                # App routes configuration
│   └── postsApi.ts              # API logic for posts
└── types/
    └── json-placeholder-data.ts # Type definitions for API data
</code></pre>

## Features Implemented

1. CRUD Operations: Full CRUD functionality for posts using Redux Toolkit and async thunks.
2. Material Design: All UI components are built with Material UI.
3. Light/Dark Theme: Theme toggle implemented in the AppBar.
4. Navigation: Drawer-based navigation with links to all pages.
5. Organized Code: Clean and logical folder structure with reusable components.
6. Enhance mobile responsiveness and adaptiveness.
7. Explore using RTK Query for API calls to simplify state management.

## TODO

- Add unit tests for components and Redux logic.
- Improve UX with better error handling and loading spinners.

## Technical Stack

- **Next.js 14** (App Router)
- **React 18** with hooks
- **Redux Toolkit** (store, slices, actions, selectors, async thunks)
- **Material UI v5** for all UI components
- **JavaScript (ES6+)**
- **Fake API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
