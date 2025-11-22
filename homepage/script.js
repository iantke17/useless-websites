document.addEventListener('DOMContentLoaded', () => {
  const textToCopy = document.getElementById('textToCopy');
  const copyButton = document.getElementById('copyButton');
  const copiedMessage = document.getElementById('copiedMessage');

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(textToCopy.innerText);
      copiedMessage.style.display = 'inline'; // Show message
      setTimeout(() => {
        copiedMessage.style.display = 'none'; // Hide message after a delay
      }, 2000); // 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Optionally, provide user feedback about the error
    }
  });
});
