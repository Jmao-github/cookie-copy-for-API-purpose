// Background service worker for Cookie Copy & Fetch extension
// Minimal implementation since most functionality is in the popup

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Cookie Copy & Fetch extension installed');
});

// The extension primarily uses the popup UI for functionality
// This background script can be extended if additional background features are needed 