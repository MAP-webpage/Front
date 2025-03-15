const noticeForm = document.getElementById('noticeForm');
const noticesDiv = document.getElementById('notices');

noticeForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const notice = document.createElement('div');
    notice.classList.add('notice');
    notice.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    noticesDiv.appendChild(notice);

    noticeForm.reset();
});
