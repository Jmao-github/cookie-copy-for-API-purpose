# Cookie Copy & Fetch - Version History

## Purpose of This Document
This document tracks the evolution of the extension through different versions, detailing changes, improvements, and new features added over time. It serves as both a changelog and a reference for understanding the project's development journey.

## Version History

### v1.0.0 - Initial Release (2023-03-21)
- Created basic extension structure with manifest.json (Manifest V3)
- Implemented cookie retrieval from the current domain
- Added copy to clipboard functionality
- Created popup UI with cookie display
- Included API test functionality for fetching data with cookies
- Added instructions for manual cookie copying

### v1.1.0 - UI Simplification (2023-03-21)
- Removed manual method instructions section
- Removed API test functionality
- Focused UI exclusively on cookie copying
- Enhanced cookie retrieval to capture all relevant cookies including:
  - Current domain cookies
  - Parent domain cookies
  - Cookies with leading dot notation
- Changed host permissions to "<all_urls>" for broader access
- Simplified UI for a more focused user experience

### v1.2.0 - Search Functionality (2023-03-25)
- Added cookie search and filtering capabilities
- Implemented individual cookie value copying
- Enhanced UI with search section
- Maintained original all-cookies copy functionality

### v1.2.1 - Streamlined UI (2023-03-25)
- Removed saved keys functionality for a cleaner interface
- Increased cookie textarea height for better visibility
- Simplified the search interface to focus on core functionality
- Reduced minimum height of popup for a more compact UI

## Planned Features

### v1.3.0 - Search Improvements (Future)
- Adding search by cookie value in addition to name
- UI enhancements for improved usability
- Keyboard shortcut support

### v2.0.0 - Advanced Features (Future)
- Cookie editing capabilities
- Filter presets for common cookies
- Export/import of saved search keys

## How to Use This Document
- Reference to understand what features were included in each version
- Update whenever significant changes are made to the extension
- Use as a source for release notes when publishing updates 