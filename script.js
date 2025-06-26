const toggleBtn = document.getElementById('darkModeToggle');
        const htmlEl = document.documentElement;
        const resumeContent = document.getElementById('resume-content');
        // Setting height to 'auto' to ensure full content is rendered for print
        resumeContent.style.height = 'auto';

        function setTheme(isDark) {
            if (isDark) {
                htmlEl.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                htmlEl.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            setTheme(savedTheme !== 'light');
        });

        toggleBtn.addEventListener('click', () => {
            setTheme(!htmlEl.classList.contains('dark'));
        });
