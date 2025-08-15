$(document).ready(function(){
    const themeClasses = ["", "dark-theme", "inverted-theme"];
        let currentThemeIndex = 0;

            $("#colorChangeBtn").click(function(){
                    $("body").removeClass(themeClasses[currentThemeIndex]);
                            currentThemeIndex = (currentThemeIndex + 1) % themeClasses.length;
                                    $("body").addClass(themeClasses[currentThemeIndex]);
                                        });
                                        });
                                        
