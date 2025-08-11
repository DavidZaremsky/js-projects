$(document).ready(function() {
    // Array of image URLs
        const images = [
                "https://images.unsplash.com/photo-1510798831971-661eb04b3739?fit=crop&w=1080",
                        "https://images.unsplash.com/photo-1588669704250-9f5b6f3c1a32?fit=crop&w=1080",
                                "https://images.unsplash.com/photo-1582103445839-86927a716c5b?fit=crop&w=1080"
                                    ];

                                        // Array of quotes
                                            const quotes = [
                                                    "The best way to predict the future is to create it.",
                                                            "Design is not just what it looks like and feels like. Design is how it works.",
                                                                    "The most powerful tool we have as designers is our curiosity."
                                                                        ];

                                                                            function updateContent() {
                                                                                    const randomIndex = Math.floor(Math.random() * images.length);
                                                                                            $("#gallery-image").attr("src", images[randomIndex]);
                                                                                                    $("#gallery-quote").text(quotes[randomIndex]);
                                                                                                        }

                                                                                                            updateContent();

                                                                                                                $("#changeBtn").click(function() {
                                                                                                                        updateContent();
                                                                                                                            });
                                                                                                                            });
                                                                                                                            
