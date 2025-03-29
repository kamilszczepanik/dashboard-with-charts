# Component Structure

## Overview

The application is built using a hierarchical component structure, focusing on reusability and maintainability. Here's a detailed breakdown of the component architecture:

## Layout Components

### Sidemenu (`src/components/layout/Sidemenu.tsx`)

```typescript
interface MenuProps {
  children?: React.ReactNode;
}
```

- Main navigation component
- Features:
  - Responsive design with mobile drawer
  - Collapsible menu sections
  - Active route highlighting
  - Mobile hamburger menu

### Dashboard Layout

- Wrapper for all dashboard pages
- Manages layout structure
- Handles responsive behavior

## Widget Components

### ChartWrapper (`src/components/widgets/ChartWrapper.tsx`)

```typescript
interface ChartWrapperProps {
  title: string;
  tooltipTitle?: string;
  children: React.ReactNode;
  sx?: SxProps;
}
```

- Common wrapper for all chart components
- Provides consistent styling and layout
- Handles tooltips and titles

### Charts

#### ChannelsPieChart

- Displays sales channel distribution
- Interactive segments
- Responsive sizing

#### RevenueChart

- Shows revenue trends
- Multiple data series
- Interactive tooltips

#### SalesByAgeChart

- Age-based sales distribution
- Horizontal bar chart
- Custom styling

### Tables

#### SalesByCountryTable

- Country-wise sales data
- Sortable columns
- Flag icons integration

#### TopSellingProductsTable

- Product performance metrics
- Image thumbnails
- Status indicators

## Common Components

### Card Components

- Used for metric displays
- Consistent styling
- Responsive layout

### UserMenu

- User profile section
- Navigation options
- Session management

## Component Hierarchy

```
App
├── Layout
│   ├── Sidemenu
│   │   └── UserMenu
│   └── Dashboard
│       ├── MetricCards
│       ├── ChartWrapper
│       │   ├── ChannelsPieChart
│       │   ├── RevenueChart
│       │   └── SalesByAgeChart
│       └── Tables
│           ├── SalesByCountryTable
│           └── TopSellingProductsTable
```

## Component Guidelines

### Creation Principles

1. Single Responsibility
2. Reusability
3. Prop Interface Definition
4. Proper TypeScript Types
5. Consistent Styling

### Styling Approach

```typescript
// Example of component styling
const Component = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      {/* Component content */}
    </Box>
  );
};
```

### Mobile Considerations

- All components are mobile-responsive
- Use of MUI's breakpoint system
- Touch-friendly interactions
- Appropriate spacing for mobile

### Performance Optimization

- Memoization where necessary
- Lazy loading for large components
- Efficient re-rendering strategies

## Testing Strategy

### Component Testing

- Unit tests for isolated functionality
- Integration tests for component interaction
- Snapshot testing for UI consistency

### Test Examples

```typescript
describe("ChartWrapper", () => {
  it("renders title correctly", () => {
    // Test implementation
  });

  it("handles responsive behavior", () => {
    // Test implementation
  });
});
```

## Future Improvements

1. Component Library

   - Extract common patterns
   - Create shared component library
   - Implement storybook documentation

2. Accessibility

   - ARIA labels
   - Keyboard navigation
   - Screen reader support

3. Animation
   - Smooth transitions
   - Loading states
   - Interactive feedback
