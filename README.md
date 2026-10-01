# Multi-Step Form - Frontend Mentor Challenge

A fully-functional, type-safe multi-step form built with React, TypeScript, and Vite. Users can complete a 4-step subscription flow: personal information → plan selection → add-ons selection → order review.


## Features

- ✅ **Multi-step workflow** - Navigate through 4 form steps with persistent state
- ✅ **Step navigation** - Move forward and backward through the form steps
- ✅ **Form validation** - Client-side validation for personal info (name, email, phone)
- ✅ **Billing cycle toggle** - Switch between monthly and yearly pricing
- ✅ **Plan selection** - Choose from Arcade, Advanced, or Pro plans
- ✅ **Add-ons customization** - Select optional add-ons (Online Service, Extra Storage, Custom Profile)
- ✅ **Order summary** - Review all selections before confirmation
- ✅ **Responsive design** - Mobile, tablet, and desktop layouts
- ✅ **Type-safe** - Full TypeScript coverage for better DX

## Project Structure

```
src/
├── components/
│   ├── PersonalInfo.tsx      # Step 1: Collect user details
│   ├── SelectPlan.tsx         # Step 2: Plan selection with pricing
│   ├── PickAddons.tsx         # Step 3: Add-ons selection
│   ├── Summary.tsx            # Step 4: Order review
│   ├── Confirmation.tsx       # Final confirmation page
│   ├── UserContext.tsx        # Global state management (React Context)
│   ├── constants.ts           # Plan and add-on data
│   ├── types.ts               # TypeScript type definitions
│   └── *.css                  # Component-specific styles
├── App.tsx                    # Main app component with step routing
├── App.css                    # Global styles
└── main.tsx                   # Entry point
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **CSS3** - Flexbox, Grid, and custom properties for responsive design
- **React Context API** - State management (no external libraries)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm preview

# Run linting
npm run lint
```

The dev server will start at `http://localhost:5173`

## Component Overview

### PersonalInfo
Collects user's name, email, and phone number with validation.

### SelectPlan
Displays three subscription tiers with monthly/yearly toggle. Prices adjust based on billing cycle.

### PickAddons
Shows available add-ons (Online Service, Extra Storage, Custom Profile) with pricing.

### Summary
Reviews all selections: chosen plan, add-ons, and total price. Users can edit plan or confirm.

### Confirmation
Final confirmation screen after successful form submission.

### UserContext
Provides global state management using React Context. Holds:
- Personal info
- Plan selection & billing cycle
- Selected add-ons
- Form validation errors

## Key Implementation Details

- **State Management**: React Context API for form state (no Redux/Zustand needed)
- **Validation**: Real-time validation for personal info step with error display
- **Pricing Logic**: Dynamic pricing based on billing cycle selection
- **Type Safety**: All components and data structures typed with TypeScript
- **Responsive Layout**: Mobile-first CSS with media queries for tablet and desktop

## What I Learned

- Building complex multi-step forms in React with TypeScript
- Managing form state with Context API as an alternative to external state libraries
- Type-safe form handling and validation patterns
- CSS layout techniques (Flexbox, Grid) for responsive design
- Component composition and separation of concerns

## Challenges & Solutions

**Challenge**: Managing form state across multiple steps
- **Solution**: Used React Context API to centralize state, avoiding prop drilling

**Challenge**: TypeScript type safety for optional object properties
- **Solution**: Properly defined optional types in `types.ts` and fixed undefined checks

**Challenge**: CSS selector syntax errors
- **Solution**: Replaced invalid `:second-child` pseudo-selector with `:nth-child(2)`

## Future Improvements

- Add backend integration for form submission
- Implement form persistence (localStorage)
- Add smooth transitions between steps
- Enhance accessibility with ARIA labels and keyboard navigation
- Add form submission error handling

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## License

This project is open source and available under the MIT License.
