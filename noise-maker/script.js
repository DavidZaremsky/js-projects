$(document).ready(function() {
    const canvas = document.getElementById('noise-canvas');
        const ctx = canvas.getContext('2d');
            const generateBtn = $('#generate-btn');

                let animationFrameId;
                    let time = 0;

                        function resizeCanvas() {
                                canvas.width = window.innerWidth;
                                        canvas.height = window.innerHeight;
                                                time = 0;
                                                        draw();
                                                            }
                                                                window.addEventListener('resize', resizeCanvas);
                                                                    resizeCanvas();

                                                                        function draw() {
                                                                                const imageData = ctx.createImageData(canvas.width, canvas.height);
                                                                                        const data = imageData.data;
                                                                                                const scale = 0.005;
                                                                                                        const speed = 0.0005;

                                                                                                                for (let x = 0; x < canvas.width; x++) {
                                                                                                                            for (let y = 0; y < canvas.height; y++) {
                                                                                                                                            const value = perlin.simplex3(x * scale, y * scale, time * speed);
                                                                                                                                                            const colorValue = (value + 1) * 128;

                                                                                                                                                                            const index = (x + y * canvas.width) * 4;
                                                                                                                                                                                            data[index] = colorValue;
                                                                                                                                                                                                            data[index + 1] = colorValue;
                                                                                                                                                                                                                            data[index + 2] = colorValue;
                                                                                                                                                                                                                                            data[index + 3] = 255;
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                        ctx.putImageData(imageData, 0, 0);

                                                                                                                                                                                                                                                                                time++;
                                                                                                                                                                                                                                                                                        animationFrameId = window.requestAnimationFrame(draw);
                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                generateBtn.on('click', function() {
                                                                                                                                                                                                                                                                                                        generateBtn.text('Generating...');
                                                                                                                                                                                                                                                                                                                generateBtn.prop('disabled', true);

                                                                                                                                                                                                                                                                                                                        window.cancelAnimationFrame(animationFrameId);

                                                                                                                                                                                                                                                                                                                                perlin.seed(Math.random());
                                                                                                                                                                                                                                                                                                                                        time = 0;

                                                                                                                                                                                                                                                                                                                                                setTimeout(function() {
                                                                                                                                                                                                                                                                                                                                                            draw();
                                                                                                                                                                                                                                                                                                                                                                        generateBtn.text('Generate New Pattern');
                                                                                                                                                                                                                                                                                                                                                                                    generateBtn.prop('disabled', false);
                                                                                                                                                                                                                                                                                                                                                                                            }, 500);
                                                                                                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                                                                                                    draw();
                                                                                                                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                                                                                                                    
