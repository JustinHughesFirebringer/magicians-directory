# magicians Directory

This is a Next.js-based directory website for magicians businesses.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Directory listings for 5 locations
- SEO-optimized pages
- Responsive design
- Built with Next.js and Tailwind CSS

## Directory Structure

- `app/`: Next.js app directory with pages and layouts
- `components/`: Reusable React components
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration

## Configuration

To enable real business listings:
1. Get a Google Places API key from the Google Cloud Console
2. Add it to `.env.local`:
   ```
   GOOGLE_PLACES_API_KEY=your_api_key_here
   ```