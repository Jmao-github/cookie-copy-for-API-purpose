 # Cookie Copy & Fetch

## Overview
Cookie Copy & Fetch is a Chrome extension designed for personal use that allows users to quickly retrieve and copy cookies from the current site. It also provides a search functionality to filter specific cookie keys and copy their values.

## Features
- **Cookie Retrieval**: Access all cookies associated with the active tab's domain and parent domains.
- **Copy Functionality**: One-click copying of all cookies to the clipboard.
- **Search & Filter**: Input field for searching cookies by name with real-time filtering of results.

## How to Use
1. **Install the Extension**:
   - Download the extension files and load it as an unpacked extension in Chrome via `chrome://extensions/`.

2. **Open the Extension**:
   - Click on the extension icon in the Chrome toolbar to open the popup.

3. **Retrieve Cookies**:
   - The extension automatically retrieves all cookies for the current site and displays them in a textarea.

4. **Copy Cookies**:
   - Click the "Copy All Cookies" button to copy the cookies to your clipboard. A success message will appear confirming the action.

5. **Search for Cookies**:
   - Use the search input field to filter cookies by name. The results will update in real-time as you type.

6. **Copy Individual Cookie Values**:
   - Each matching cookie will have a "Copy" button next to it, allowing you to copy individual cookie values.

## Common Errors and Solutions
- **Error Retrieving Cookies**: If you encounter an error while retrieving cookies, ensure that the extension has the necessary permissions in the manifest file. The extension requires "cookies" and "activeTab" permissions.
  
- **Clipboard Access Issues**: If copying to the clipboard fails, check your browser settings to ensure clipboard access is allowed for extensions. You may also need to grant permissions when prompted.

- **No Cookies Found**: If the extension displays "No cookies found for this domain," ensure that you are on a site that has cookies set. You may need to log in or refresh the page.

## Conclusion
This project was developed in just 30 minutes, collaborating with Cursor. Enjoy using the Cookie Copy & Fetch extension for your cookie management needs!