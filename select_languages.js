document.addEventListener('DOMContentLoaded', function () {
    // Retrieve username from localStorage
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('usernameDisplay').textContent = 'Hi, ' + username;
    }

    // Get the selected languages from the form
    const languageForm = document.getElementById('languageForm');
    languageForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const selectedLanguages = [];
        const checkboxes = languageForm.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedLanguages.push(checkbox.value);
            }
        });

        // Redirect to courses.html with selected languages as query parameters
        const selectedLanguagesQuery = new URLSearchParams(selectedLanguages.map(lang => ['language', lang]));
        window.location.href = 'courses.html?' + selectedLanguagesQuery.toString();
    });

    // Define course links based on selected languages
    const courseLinks = {
        'html': '<li><a href="https://www.youtube.com/watch?v=6QAELgirvjs&ab_channel=ElzeroWebSchool">HTML Course</a></li>',
        'css': '<li><a href="https://www.youtube.com/watch?v=X1ulCwyhCVM&ab_channel=ElzeroWebSchool">CSS Course</a></li>',
        'javascript': '<li><a href="https://youtube.com/watch?v=gIGGhFlGgLI&ab_channel=ElzeroWebSchool">JavaScript Course</a></li>',

        // Add more courses for other languages as needed
    };

    // Get the selected languages from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLanguages = urlParams.getAll('language');

    // Generate course links based on selected languages
    const courseList = document.getElementById('courseList');
    selectedLanguages.forEach(language => {
        if (courseLinks.hasOwnProperty(language)) {
            courseList.innerHTML += courseLinks[language];
        }
    });
});
