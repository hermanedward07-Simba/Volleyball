function showSection(sectionId) {

    let sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.classList.add('d-none');
    });

    document.getElementById(sectionId).classList.remove('d-none');
}
