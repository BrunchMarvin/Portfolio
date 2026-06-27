# Source Images Folder

Add images that are imported directly into React components here.

## Usage:
Images in this folder are for dynamic imports in your components:

```javascript
import profileImage from '../images/profile.jpg';

<img src={profileImage} alt="Profile" />
```

This approach is useful for:
- Component-specific images
- Images that are processed/optimized at build time
- Images that are part of component logic
