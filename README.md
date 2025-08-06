# Rick and Morty React App

A simple React application built with Vite that displays information about characters, locations, and episodes from the [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- Browse and search Rick and Morty characters
- View character details
- Explore locations and episodes
- Pagination for character list
- Responsive UI with custom styles

## Technologies

- React
- Vite
- Axios
- CSS Modules
- Rick and Morty API

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eduard-diumin/rick-and-morty-react-app.git
   cd rick-and-morty-react-app
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the App

Start the development server:
```bash
pnpm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
pnpm run build
```

## Project Structure

- `src/pages/` — Main pages (Characters, Episodes, Locations, Home)
- `src/common/components/` — Shared components (Header)
- `src/assets/` — Images and static assets
- `src/App.jsx` — Main app component and routing

## API Reference

This app uses [Rick and Morty API](https://rickandmortyapi.com/documentation) for all data.

## License

MIT
