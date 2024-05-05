document.addEventListener('DOMContentLoaded', function () {
    const courseLinks = {
        'html': '<li><a href="https://www.youtube.com/watch?v=6QAELgirvjs&ab_channel=ElzeroWebSchool">HTML Course</a></li>',
        'css': '<li><a href="https://www.youtube.com/watch?v=X1ulCwyhCVM&ab_channel=ElzeroWebSchool">CSS Course</a></li>',
        'javascript': '<li><a href="https://youtube.com/watch?v=gIGGhFlGgLI&ab_channel=ElzeroWebSchool">JavaScript Course</a></li>',

    };
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLanguages = urlParams.getAll('language');
    const courseList = document.getElementById('courseList');
    selectedLanguages.forEach(language => {
        if (courseLinks.hasOwnProperty(language)) {
            courseList.innerHTML += courseLinks[language];
        }
    });
});
