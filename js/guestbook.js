const STORAGE_KEY = 'kasra-guestbook';

function getEntries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('fa-IR');
}

function toPersianNum(num) {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return String(num).replace(/\d/g, d => persianDigits[d]);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function renderMessages() {
  const entries = getEntries();
  const list = document.getElementById('messagesList');

  if (entries.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <p>هنوز پیامی ثبت نشده است.</p>
        <p>اولین نفری باشید که خاطره‌ای به اشتراک می‌گذارد.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = entries.map(e => `
    <div class="message-card">
      <div class="message-header">
        <div class="message-avatar">${escapeHtml(e.name.charAt(0))}</div>
        <div>
          <p class="message-name">${escapeHtml(e.name)}</p>
          <p class="message-date">${formatDate(e.createdAt)}</p>
        </div>
      </div>
      <p class="message-text">${escapeHtml(e.message)}</p>
    </div>
  `).join('');
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgDiv = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (!name || !message) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'در حال ارسال...';

  setTimeout(() => {
    const entries = getEntries();
    entries.unshift({
      id: Date.now(),
      name: name.slice(0, 100),
      message: message.slice(0, 2000),
      createdAt: new Date().toISOString()
    });
    saveEntries(entries);

    msgDiv.innerHTML = '<div class="form-message form-success">پیام شما با موفقیت ثبت شد.</div>';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    submitBtn.disabled = false;
    submitBtn.textContent = 'ارسال پیام';

    renderMessages();

    setTimeout(() => { msgDiv.innerHTML = ''; }, 3000);
  }, 500);
}

renderMessages();
