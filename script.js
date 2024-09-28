document.getElementById('shortenBtn').addEventListener('click', async function() {
    const originalUrl = document.getElementById('originalUrl').value;

    if (originalUrl) {
        try {
            // Send the original URL to the backend to generate the short URL
            const response = await fetch('https://shorten-url-api.vercel.app/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ originalUrl })
            });

            if (!response.ok) {
                throw new Error('Failed to shorten the URL');
            }

            const data = await response.json();
            document.getElementById('shortUrl').value = data.shortUrl;

        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    } else {
        alert('Please enter a valid URL.');
    }
});
