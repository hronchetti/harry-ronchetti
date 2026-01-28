# Coding Standards

This document outlines the house rules and coding standards for the WilderTrips codebase. All code should follow these conventions to maintain consistency and quality.

## Core Principles (SOLID)

### 1. Single Responsibility Principle (SRP)

- Each component/utility should have one main purpose
- Keep components focused and avoid multi-purpose functions
- Split large components into smaller, focused sub-components

### 2. Open-Close Principle

- Make components passive to props
- Design components to be extended without modifying source code
- Example: `<Button icon={<ArrowLeftIcon />} />` instead of hardcoded variants

### 3. Liskov Substitution Principle

- Extend HTMLElement prop types for components related to HTML elements
- Example: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {...}`
- Allows components to be used anywhere the base HTML element would work

### 4. Interface Segregation Principle

- Don't import props that aren't used
- Keep interfaces and types minimal and focused
- Only include what's necessary

### 5. Dependency Inversion Principle

- Abstract concepts to hooks/utils to avoid coupling
- Use abstraction layers for external dependencies
- Example: Use `useAnalytics` with `mixpanel.track` inside, not `mixpanel.track` directly
- Makes swapping dependencies easier

### 6. Performance Optimization

- Use `React.lazy(() => import('...'))` when possible
- Wrap lazy components with `<Suspense fallback={<div></div>}>{...}</Suspense>`
- Improves initial load performance

## File Structure

### Directory Organization

### File Naming Rules

1. **Don't nest component files inside one another**
   - Use component Page/Context within component names for grouping
   - Example: `UserSettingsSidebar` NOT `UserSettings/Sidebar`

2. **Name files and export from index.ts**
   - Each folder should have an index.ts for exports
   - Don't create nested `Component/index.tsx` (makes search in VSCode harder)

3. **Avoid default exports**
   - Use named exports: `export const Button`
   - NOT `export default Button`

## Naming Conventions

### Components

#### Naming Rules

1. **Use Pascal Case** (e.g., `UserSettingsSidebar`)
2. **Avoid abbreviations** - Be explicit
3. **Be as prescriptive as possible**
   - Example: `UserSettingsSidebar` NOT `Sidebar`

4. **Use camelCase for prop names**

   ```tsx
   <UserSettingsSidebar hideModal={hideModal} showModal={showModal} />
   ```

5. **Prefix boolean state variables** with `is`, `has`, or `should`
   - Examples: `isActive`, `hasError`, `shouldRender`
   - Makes boolean nature immediately clear

6. **Do not pass props components don't need**

   ```tsx
   // Good
   <TripPlannerStop id={stop.id} name={stop.name} />

   // Avoid
   <TripPlannerStop stop={stop} />
   ```

#### Props Type Convention

- Make props types `ComponentNameProps`
- Example: `ButtonProps` NOT `Props`
- Improves clarity when multiple components are in scope

### Hooks

1. **Start with 'use'** to follow React conventions
   - Example: `useUserSettings()`

2. **Avoid abbreviations**

3. **Be as prescriptive as possible**
   - Example: `useUserSettings()` NOT `useSettings()`

4. **Purpose: Business Logic Separation**
   - Custom Hooks = business logic
   - Components = UI manipulation
   - Create custom hooks to keep components clean

5. **Import from React namespace**

   ```typescript
   // Good
   React.useState;
   React.useEffect;

   // Avoid
   import { useState, useEffect } from "react";
   ```

6. **Provide default values**
   - Allows hook usage without `!` operator
   - Improves developer experience

### Utils

1. **Use Camel Case**
   - Example: `getUserSettings()`

2. **Avoid abbreviations**

3. **Be as prescriptive as possible**
   - Example: `getUserSettings()` NOT `userSettings()`

4. **Start with an action word**
   - Denotes the function result
   - Action word examples: `create`, `get`, `update`, `delete`
   - Example: `createUserSettings`, `getUserSettings()`, `updateUserSettings()`, `deleteUserSettings()`

5. **Argument types naming**
   - Make argument types as TypeScript interfaces `utilityNameArgs`
   - Example: `interface getUserSettingsArgs {...}`

### Constants

1. **Use SCREAMING_SNAKE_CASE**
   - Example: `SCREAMING_SNAKE_CASE`

2. **Avoid abbreviations**

3. **Be as prescriptive as possible**
   - Example: `SCREAMING_SNAKE_CASE` NOT `CASE`

### Types

1. **Use Pascal Case**
   - Example: `PascalCase`

2. **Avoid abbreviations**

3. **Be as prescriptive as possible**
   - Example: `PascalCase` NOT `Case`

4. **Import using "\* as"**
   - Import using namespace import to group types
   - Name group types after file name + 'Types'
   - Example: `TypeGroupTypes` for `@/types/TypeGroup`

   ```typescript
   import * as TypeGroupTypes from "@/types/TypeGroup";
   ```

5. **Props types convention**
   - Name as `{ComponentName}Props`
   - Example: `ButtonProps` NOT `Props`

## Styling

### Tailwind CSS

1. **Prefer Tailwind over custom CSS**
   - Remove custom CSS classes when possible
   - Use Tailwind utility classes for everything

2. **Tailwind Configuration**
   - Config file: `tailwind.config.js`
   - PostCSS config: `postcss.config.js`

3. **Prettier Integration**
   - Uses `prettier-plugin-tailwindcss` for automatic class sorting
   - Classes will be automatically ordered on save

### CSS Class Handling

1. **Use classnames package for conditional classes**
   - Import as `cx` from `classnames`
   - **NEVER** use JavaScript ternary operators in template literals for className
   - Ternary operators often lead to missing spaces between classes

2. **Incorrect pattern to avoid:**

   ```tsx
   // ❌ WRONG - Missing space, will cause CSS issues
   className={`gap-4${button ? "mb-6" : ""}`}

   // ❌ WRONG - Even with space, prefer classnames
   className={`gap-4 ${button ? "mb-6" : ""}`}
   ```

3. **Correct pattern:**

   ```tsx
   // ✅ CORRECT - Import classnames
   import cx from "classnames"

   // ✅ CORRECT - Use cx for conditional classes
   className={cx("gap-4", { "mb-6": button })}

   // ✅ CORRECT - Multiple conditions
   className={cx("base-class", {
     "conditional-class-1": condition1,
     "conditional-class-2": condition2,
   })}

   // ✅ CORRECT - Mix static and conditional
   className={cx("always-applied", "another-static", {
     "conditional": someCondition,
   })}
   ```

4. **Benefits of classnames:**
   - Automatically handles spaces between classes
   - More readable and maintainable
   - Prevents bugs from missing spaces
   - Works well with TypeScript

## Code Organization

### Component Structure

```tsx
// 1. Imports - organized by category
import React from "react"

import * as ImportedTypes from "@/Types/Typefile"

// 2. Type definitions
interface ComponentNameProps {
  // props
}

// 3. Component definition
export const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  // 4. Hooks
  const [state, setState] = React.useState()

  // 5. Event handlers
  const handleClick = () => {
    // logic
  }

  // 6. Render
  return (
    // JSX
  )
}
```

### Import Organization

1. External libraries first
2. Type imports (with `import * as`)
3. Internal hooks
4. Internal utils
5. Internal components
6. Constants
7. Styles (if any)

### Hook Usage

- Call hooks at the top of components
- Add `!` only when absolutely necessary (prefer providing defaults)
- Custom hooks should provide sensible defaults

## TypeScript

### General Rules

1. **Use TypeScript for all files**
   - Version: 5.1.5

2. **Import types using namespace import to group types**

   ```typescript
   import * as TypeGroupTypes from "@/types/Trip";
   ```

3. **Extend HTML element types when applicable**

   ```typescript
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: "primary" | "secondary";
   }
   ```

4. **Avoid `any` types**
   - Use proper typing or `unknown` if necessary

### Validation

- Run `npm run validate-ts` to check types
- Ensures no TypeScript errors before committing

## Linting & Formatting

### ESLint

- Configuration: `.eslintrc.json`
- Run: `npm run lint`
- Follows Next.js and Prettier configs

### Prettier

- Configuration: `.prettierrc`
- Run: `npm run format`
- Auto-formats on save (if editor configured)
- Formats: `.js`, `.jsx`, `.ts`, `.tsx`, `.json`

### Commands

```bash
# Lint check
npm run lint

# Format all files
npm run format

# Type checking
npm run validate-ts
```

## Error Handling

### handleError Utility

- Use the `handleError()` utility for consistent error handling
- Location: `@/utils/handleError`
- Provides centralized error processing

## Analytics

### Event Tracking

- Use `useAnalytics()` hook abstraction
- Don't call Mixpanel directly
- Follows Dependency Inversion Principle
- Makes swapping analytics providers easier

```typescript
const analytics = useAnalytics();
analytics.track("event_name", { properties });
```

## Security

### API Keys

- Public keys (like Mapbox) can be committed
- Private keys should be in environment variables
- Never commit secrets
