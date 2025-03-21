// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // DOM Element references
  const cookieTextArea = document.getElementById('cookieTextArea');
  const copyButton = document.getElementById('copyButton');
  const copyStatus = document.getElementById('copyStatus');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');

  // Store all cookies for searching
  let allCookies = [];

  // Get the active tab
  async function getActiveTab() {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    return tabs[0];
  }

  // Retrieve cookies for the current domain
  async function getCookies() {
    try {
      // Get the active tab information
      const activeTab = await getActiveTab();
      
      // Parse the URL to get the domain
      const url = new URL(activeTab.url);
      const hostname = url.hostname;
      
      // Show loading state
      cookieTextArea.value = 'Loading cookies...';
      
      // Extract the base domain (e.g., example.com from sub.example.com)
      const domainParts = hostname.split('.');
      const baseDomain = domainParts.length > 1 
        ? domainParts.slice(-2).join('.')  // Gets example.com from sub.example.com
        : hostname;
      
      // Get all cookies that match the domain or its parent domains
      const cookies = await chrome.cookies.getAll({});
      
      // Filter cookies that match the current domain or its parent domains
      const domainCookies = cookies.filter(cookie => {
        // Check if cookie domain matches or is parent of current domain
        return hostname.endsWith(cookie.domain.replace(/^\./, ''));
      });
      
      // Store all cookies for searching
      allCookies = domainCookies;
      
      // Format cookies into a string
      const cookieString = domainCookies
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ');
      
      // Display cookies in the textarea
      cookieTextArea.value = cookieString || 'No cookies found for this domain.';
      
      return cookieString;
    } catch (error) {
      console.error('Error retrieving cookies:', error);
      cookieTextArea.value = `Error retrieving cookies: ${error.message}`;
      return '';
    }
  }

  // Copy the cookies to clipboard
  async function copyCookies() {
    try {
      await navigator.clipboard.writeText(cookieTextArea.value);
      
      // Show success message
      copyStatus.textContent = 'Copied!';
      copyStatus.classList.add('success');
      
      // Clear the message after 2 seconds
      setTimeout(() => {
        copyStatus.textContent = '';
        copyStatus.classList.remove('success');
      }, 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      
      // Show error message
      copyStatus.textContent = 'Copy failed!';
      copyStatus.classList.add('error');
      
      // Clear the message after 2 seconds
      setTimeout(() => {
        copyStatus.textContent = '';
        copyStatus.classList.remove('error');
      }, 2000);
    }
  }

  // Copy a specific cookie value
  async function copyCookieValue(value) {
    try {
      await navigator.clipboard.writeText(value);
      
      // Show success message
      const statusElement = document.createElement('span');
      statusElement.textContent = 'Copied!';
      statusElement.className = 'status success';
      
      // Find any existing status elements and remove them
      const existingStatus = document.querySelectorAll('.search-results .status');
      existingStatus.forEach(el => el.remove());
      
      // Add the status message to the search results
      searchResults.appendChild(statusElement);
      
      // Clear the message after 2 seconds
      setTimeout(() => {
        statusElement.remove();
      }, 2000);
    } catch (error) {
      console.error('Error copying cookie value:', error);
    }
  }

  // Search for cookies matching the input
  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
      searchResults.innerHTML = '<div class="no-results">Enter a search term</div>';
      return;
    }
    
    if (allCookies.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No cookies available</div>';
      return;
    }
    
    // Filter cookies that match the search term
    const matchingCookies = allCookies.filter(cookie => 
      cookie.name.toLowerCase().includes(searchTerm)
    );
    
    if (matchingCookies.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No matches found</div>';
      return;
    }
    
    // Display matching cookies
    searchResults.innerHTML = '';
    matchingCookies.forEach(cookie => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      
      resultItem.innerHTML = `
        <div class="result-pair">
          <span class="cookie-key">${cookie.name}</span>
          <span class="cookie-value">${cookie.value}</span>
        </div>
        <button class="copy-value-button" data-value="${cookie.value}">Copy</button>
      `;
      
      searchResults.appendChild(resultItem);
    });
    
    // Add event listeners to copy buttons
    document.querySelectorAll('.copy-value-button').forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        copyCookieValue(value);
      });
    });
  }

  // Event Listeners
  copyButton.addEventListener('click', copyCookies);
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Initialize
  await getCookies();
}); 