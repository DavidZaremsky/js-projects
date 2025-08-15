$(document).ready(function() {
    const funFacts = [
            "Unix time is the number of seconds since January 1, 1970 UTC.",
                    "It's also known as Epoch time.",
                            "Unix time is not a linear representation of time; it's a count of seconds.",
                                    "On January 19, 2038, some 32-bit Unix timestamps will 'roll over'!",
                                            "The first Unix timestamp was '0' on January 1, 1970."
                                                ];

                                                    let currentFactIndex = -1;

                                                        function updateClockAndFact() {
                                                                // Update the Unix time
                                                                        const unixTime = Math.floor(Date.now() / 1000);
                                                                                $("#unix-time").text(unixTime);

                                                                                        // Update the fun fact
                                                                                                let newFactIndex = Math.floor(Math.random() * funFacts.length);
                                                                                                        while(newFactIndex === currentFactIndex) {
                                                                                                                    newFactIndex = Math.floor(Math.random() * funFacts.length);
                                                                                                                            }
                                                                                                                                    currentFactIndex = newFactIndex;
                                                                                                                                            $("#fun-fact").text(funFacts[currentFactIndex]);
                                                                                                                                                }

                                                                                                                                                    // Update the clock every second
                                                                                                                                                        setInterval(updateClockAndFact, 1000);
                                                                                                                                                        });
                                                                                                                                                        
