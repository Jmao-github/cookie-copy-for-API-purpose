# Cookie Copy & Fetch - Directory Structure

## Purpose of This Document
This document outlines the project's file organization to help quickly locate relevant files and understand how different components connect. It helps both developers and AI assistants navigate the codebase efficiently.

## Current/Planned Structure

```
cookie-copy/
├── .cursorrules          # AI assistant configuration
├── .notes/               # Project documentation
│   ├── project_overview.md
│   ├── task_list.md
│   ├── directory_structure.md
│   ├── meeting_notes.md
│   └── PRD.md
├── manifest.json         # Extension manifest file
├── popup/                # Extension popup UI
│   ├── popup.html        # Popup interface with cookie copy and search functionality
│   ├── popup.js          # Popup functionality including cookie retrieval and search features
│   └── popup.css         # Popup styles with search UI components
├── background/           # Background scripts
│   └── background.js     # Service worker (for Manifest V3)
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # Project documentation
```

## Key Files and Their Purposes

### Configuration Files
- **manifest.json**: Defines extension metadata, permissions, and resource references
- **.cursorrules**: Guides AI assistant behavior for this project

### User Interface
- **popup.html**: Contains the HTML structure for both cookie copying and search functionality
- **popup.js**: JavaScript handling cookie retrieval, search filtering, and saved keys management
- **popup.css**: Styling for the main interface and search components

### Background Processing
- **background.js**: Service worker for handling background tasks (if needed)

### Data Storage
- Uses **localStorage** to persist saved cookie keys between sessions

## Features Implementation
- **Cookie Retrieval**: Implemented in popup.js using chrome.cookies.getAll() with domain filtering
- **Copy Functionality**: Uses navigator.clipboard API for copying cookies or individual values
- **Search & Filter**: JavaScript filtering based on cookie names with real-time results display
- **Saved Keys**: LocalStorage-based persistence of frequently used search terms

## How to Use This Document
1. Reference when looking for specific files or understanding project organization
2. Update as new files or directories are added
3. Use as a map to understand relationships between different components
4. Keep synchronized with the actual project structure

**Note**: This structure will evolve as the project develops. The document should be updated periodically to reflect the current state of the project. 