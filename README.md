# Cookie Copy & Fetch

A Chrome extension for easily retrieving, searching, and copying cookies from websites.

![Cookie Copy & Fetch Screenshot](screenshot.png)

## Features

- **One-Click Cookie Copying**: Automatically retrieves and displays all cookies from the current site for easy copying
- **Enhanced Cookie Retrieval**: Captures all domain and subdomain cookies, including parent domain cookies
- **Search Functionality**: Quickly filter cookies by name to find specific values
- **Individual Value Copying**: Copy specific cookie values with a single click
- **Clean, Minimal UI**: Focus on the essential functions without clutter

## Installation

1. Clone this repository or download the source code:
   ```
   git clone https://github.com/yourusername/cookie-copy.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top-right corner

4. Click "Load unpacked" and select the folder containing the extension

5. The extension will appear in your toolbar

## Usage

### Copying All Cookies

1. Navigate to a website that has cookies you want to copy
2. Click the extension icon in your browser toolbar
3. The extension will automatically retrieve all cookies associated with the current domain
4. Click the "Copy All Cookies" button to copy the entire cookie string to your clipboard

### Searching for Specific Cookies

1. Open the extension popup
2. In the search field, type part of the cookie name you're looking for
3. The results will filter as you type, showing matching cookies
4. Click the "Copy" button next to any result to copy just that cookie's value

## Use Cases

- Testing APIs that require cookie-based authentication
- Debugging authentication issues across different environments
- Replicating user sessions in tools like Postman or cURL
- Quickly extracting specific cookie values for development purposes

## Permissions

The extension requires the following permissions:
- `cookies`: To read cookie data
- `activeTab`: To get information about the current tab
- `clipboardWrite`: To copy to the clipboard
- `<all_urls>`: To access cookies across domains

## Troubleshooting

### No Cookies Displayed
- Make sure you're on a site that sets cookies
- You may need to refresh the page or log in to the site
- Check that the extension has the required permissions

### Copy Function Not Working
- Ensure you've granted clipboard access permissions to the extension
- Try refreshing the page and reopening the extension

### Missing Cookies
- If you expect to see cookies that aren't showing up, it might be because some cookies are restricted with the HttpOnly flag or have specific domain/path restrictions

## Privacy & Security

This extension is for personal development use only. It doesn't send your cookie data anywhere or store it beyond the current session (except in your clipboard when you use the copy function).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This project was developed in 30 minutes, collaborating with Cursor, an AI-powered coding environment.