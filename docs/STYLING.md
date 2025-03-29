# Styling Guide

## Theme Configuration

The application uses Material UI's theming system with a custom configuration:

```typescript
// src/theme/index.ts
export const theme = createTheme({
  palette: {
    primary: {
      main: "...",
      light: "...",
      dark: "...",
    },
    // Other color definitions
  },
  typography: {
    // Typography settings
  },
  spacing: 10, // Base spacing unit
  components: {
    // Component customizations
  },
});
```

## Color System

### Primary Colors

- Main: Used for primary actions and highlights
- Light: Used for text on dark backgrounds
- Dark: Used for sidebar and emphasis

### Semantic Colors

- Success: Green tones for positive indicators
- Error: Red tones for negative indicators
- Info: Blue tones for informational elements

### Neutral Colors

- Background shades
- Text colors
- Border colors

## Typography

### Hierarchy

1. Headers (h1-h6)
2. Body text
3. Caption text
4. Button text

### Font Weights

- Regular: 400
- Medium: 500
- Bold: 700
- Extra Bold: 800

## Spacing System

### Base Unit

- 10px base spacing unit
- Multipliers: 1, 2, 3, 4, 6, 8, 12

### Common Spacing Patterns

```typescript
sx={{
  padding: 2, // 20px
  margin: 3, // 30px
  gap: 1, // 10px
}}
```

## Layout Patterns

### Flex Layouts

```typescript
sx={{
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: 2,
  alignItems: "center",
  justifyContent: "space-between"
}}
```

### Grid Layouts

```typescript
sx={{
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  gap: 3
}}
```

## Responsive Design

### Breakpoints

- xs: 0px
- sm: 600px
- md: 900px
- lg: 1200px
- xl: 1536px

### Mobile-First Approach

```typescript
sx={{
  width: "100%",
  maxWidth: { sm: 540, md: 720, lg: 960 },
  margin: "0 auto"
}}
```

## Component-Specific Styling

### Cards

```typescript
sx={{
  borderRadius: 3,
  padding: 2,
  bgcolor: "background.paper",
  boxShadow: 1
}}
```

### Buttons

```typescript
sx={{
  borderRadius: 2,
  padding: "10px 20px",
  textTransform: "none"
}}
```

### Tables

```typescript
sx={{
  "& .MuiTableCell-root": {
    padding: "20px"
  }
}}
```

## Charts Styling

### Common Chart Properties

```typescript
sx={{
  height: { xs: "auto", md: 400 },
  padding: 2
}}
```

### Chart Colors

- Consistent color palette
- Accessible color combinations
- Clear data visualization

## Best Practices

1. **Theme Usage**

   - Use theme values over hard-coded values
   - Leverage theme spacing
   - Use semantic color names

2. **Responsive Design**

   - Mobile-first approach
   - Breakpoint-based adjustments
   - Flexible layouts

3. **Performance**

   - Minimize CSS-in-JS overhead
   - Use system fonts
   - Optimize transitions

4. **Maintainability**
   - Consistent naming
   - Reusable patterns
   - Documentation

## Style Organization

### Global Styles

- Theme configuration
- Reset styles
- Common utilities

### Component Styles

- Inline `sx` prop for component-specific styles
- Shared style objects for reuse
- Style composition patterns

## Accessibility

### Color Contrast

- WCAG 2.1 compliance
- Sufficient contrast ratios
- Alternative text patterns

### Interactive Elements

- Focus states
- Hover effects
- Active states

## Future Considerations

1. **Design System**

   - Component library
   - Style guide
   - Pattern library

2. **Theme Customization**

   - Dark mode
   - Custom color schemes
   - Dynamic theming

3. **CSS Optimization**
   - Style extraction
   - Critical CSS
   - Loading strategies
