# Imago AI - Responsive Web Application

A modern, responsive AI-powered image analysis and generation web application built with Next.js and Tailwind CSS.

## Technical Stack

- **Frontend Framework**: Next.js (React)
- **Styling**: Tailwind CSS for responsive design and custom styling
- **State Management**: React Context API for chat and application state
- **UI Components**: Custom-built components with responsive design
- **Icons**: Custom SVG icons optimized for different screen sizes
- **Image Handling**: Next.js Image component for optimized image loading

### Key Design Decisions

1. **Mobile-First Approach**: 
   - Designed and implemented with a mobile-first strategy
   - Responsive breakpoints: sm (640px), md (768px), lg (1024px)
   - Adaptive layout changes between mobile and desktop views

2. **Component Architecture**:
   - Modular components for better maintainability
   - Shared context for state management
   - Responsive sidebar that transforms into a top bar on mobile

3. **Dark Theme**:
   - Custom dark theme implementation
   - Consistent color palette using custom Tailwind colors
   - Optimized contrast ratios for accessibility

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd imago_ai_task
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing Responsiveness

The application is designed to be responsive across different device sizes. Here's how to test:

### Browser Testing
1. **Desktop View**: >768px width
   - Full sidebar navigation
   - Expanded content area
   - Horizontal action cards

2. **Tablet View**: 640px - 768px
   - Compact sidebar
   - Adjusted spacing and typography
   - Responsive grid layouts

3. **Mobile View**: <640px
   - Top navigation bar
   - Full-width content
   - Stacked action cards
   - Optimized touch targets




# imago_ai_task
