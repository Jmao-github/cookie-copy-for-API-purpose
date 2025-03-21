# Cookie Copy & Fetch - Product Requirements Document

## Purpose
This document outlines the requirements and specifications for the Cookie Copy & Fetch Chrome extension. It serves as a guide for development and a reference for understanding the project's goals and functionality.

## Product Overview

### Product Name
Cookie Copy & Fetch

### Description
A Chrome Extension (for personal use) that enables users to:
- Quickly retrieve and copy all cookies from the current site
- Search for specific cookie keys and copy individual values

### Goals
- Provide a user-friendly popup UI to list, search, and copy cookies
- Enable efficient retrieval of specific cookie values needed for testing
- Maintain a streamlined, focused experience with minimal complexity
- Support development and API testing workflows

### Non-Goals
- Publishing on the Chrome Web Store (personal use only)
- Cookie editing capabilities (read-only access)
- Extensive data persistence

### Target Audience
- Developers working with web APIs that require cookie authentication
- Testers who need to reproduce authentication states in external tools
- Personal use for debugging and API development

## Features & Requirements

### Core Functionality
1. **Cookie Retrieval**
   - Access all cookies associated with the active tab's domain and parent domains
   - Retrieve cookies with domain-specific filtering logic
   - Format cookies into a copy-ready string format

2. **Copy Functionality**
   - One-click copying of all cookies to clipboard
   - Visual feedback for successful/failed copy operations
   - Error handling for clipboard access failures

3. **Search & Filter**
   - Input field for searching cookies by name
   - Real-time filtering of cookie results
   - Individual copy buttons for specific cookie values
   - Clear indication of matched results vs. no matches

### Technical Requirements
1. **Permissions**
   - cookies: For accessing cookie data
   - activeTab: For retrieving the current tab's URL
   - clipboardWrite: For copying to clipboard
   - host_permissions: "<all_urls>" for broad cookie access

2. **Browser Compatibility**
   - Chrome/Chromium-based browsers (primary target)
   - Manifest V3 compatibility

## User Interface

### Popup Structure
1. **Header**
   - Extension name/title

2. **Cookie Display Section**
   - Textarea displaying all cookies in string format
   - Copy button for all cookies
   - Status indicator for copy operations

3. **Search Section**
   - Search input field with placeholder text
   - Search button
   - Results area showing matched cookies with individual copy buttons

4. **Footer**
   - Brief usage note ("Personal use only")

### Visual Design
- Clean, minimalist interface
- Color scheme using green and orange for primary actions
- Clear visual hierarchy between main sections
- Responsive sizing for popup window

## Technical Implementation

### Cookie Retrieval Logic
- Get all cookies using chrome.cookies.getAll()
- Filter cookies based on domain matching (including subdomains)
- Format cookies into string using name=value pairs

### Search Implementation
- JavaScript-based filtering of cookie objects
- Real-time results display on input change or button click
- Keyboard support for search (Enter key)

## Version Roadmap

### v1.0
- Basic cookie retrieval and copying functionality
- Simple UI with cookie display and copy button

### v1.1
- Enhanced cookie retrieval to include parent domains
- UI simplification focusing on core functionality

### v1.2.0
- Search and filter functionality for cookies
- Individual cookie value copying

### v1.2.1 (Current)
- Streamlined UI without saved keys
- Focused on core functionality

### Future Enhancements (v1.3+)
- Search by cookie value in addition to name
- Keyboard shortcuts for common operations