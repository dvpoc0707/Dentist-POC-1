# Logo Setup Instructions

## Adding Your Logo

1. **Save your logo image** to the `public` folder:
   - Recommended format: SVG (scalable) or PNG (with transparent background)
   - Recommended filename: `logo.svg` or `logo.png`
   - Recommended size: At least 200x200px for quality

2. **Update the config** if using a different filename:
   - Go to `src/config/default.ts`
   - Update the `logo.full` path:
     ```typescript
     logo: {
       full: "/logo.svg", // Change to your logo filename
       initial: "U",
     }
     ```

3. **Or set via environment variable** (for multi-tenant):
   - In your `VITE_CLINIC_CONFIG` JSON:
     ```json
     {
       "clinic": {
         "logo": {
           "full": "/logo.svg"
         }
       }
     }
     ```

## Logo Specifications

- **Format**: SVG (preferred) or PNG
- **Background**: Transparent
- **Size**: 200x200px minimum (will be scaled to 40x40px in header)
- **Colors**: Should work on both light and dark backgrounds

## File Location

Place your logo file in:
```
smile-architect-global/
└── public/
    └── logo.svg  (or logo.png)
```

The logo will be accessible at `/logo.svg` in your website.
