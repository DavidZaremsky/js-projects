$(document).ready(function() {
    const textInput = $("#text-input");
        const charCountSpan = $("#char-count");
            const wordCountSpan = $("#word-count");
                const uppercaseBtn = $("#uppercase-btn");
                    const fontSelect = $("#font-select");

                            // --- Persistence with localStorage ---
                                function loadSettings() {
                                        const savedText = localStorage.getItem('typo-bench-text');
                                                if (savedText) {
                                                            textInput.val(savedText);
                                                                        updateCounts();
                                                                                }
                                                                                        const savedFont = localStorage.getItem('typo-bench-font');
                                                                                                if (savedFont) {
                                                                                                            textInput.css("font-family", savedFont);
                                                                                                                        fontSelect.val(savedFont);
                                                                                                                                }
                                                                                                                                    }

                                                                                                                                        function saveSettings() {
                                                                                                                                                localStorage.setItem('typo-bench-text', textInput.val());
                                                                                                                                                        localStorage.setItem('typo-bench-font', fontSelect.val());
                                                                                                                                                            }

                                                                                                                                                                    // --- Metrics: Character & Word Count ---
                                                                                                                                                                        function updateCounts() {
                                                                                                                                                                                const text = textInput.val();
                                                                                                                                                                                        charCountSpan.text(text.length);
                                                                                                                                                                                                const words = text.split(/\s+/).filter(word => word.length > 0);
                                                                                                                                                                                                        wordCountSpan.text(words.length);
                                                                                                                                                                                                                saveSettings();
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                        textInput.on('input', updateCounts);

                                                                                                                                                                                                                                // --- Text Transformations ---
                                                                                                                                                                                                                                    uppercaseBtn.on('click', function() {
                                                                                                                                                                                                                                            textInput.val(textInput.val().toUpperCase());
                                                                                                                                                                                                                                                    saveSettings();
                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                // --- Font Controls ---
                                                                                                                                                                                                                                                                    fontSelect.on('change', function() {
                                                                                                                                                                                                                                                                            textInput.css("font-family", $(this).val());
                                                                                                                                                                                                                                                                                    saveSettings();
                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                // --- Initial setup ---
                                                                                                                                                                                                                                                                                                    loadSettings();
                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                    
