const SUPABASE_URL = 'https://jxuklwbckjmvmibsadavi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dWtsd2Jja2ptdm1pYnNkYXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MTA4NjQsImV4cCI6MjEwMDQ4Njg2NH0.yUCjWAmFC358rt41TVDM3FCqzvKXznbijwJEbyUaER8';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('fa-IR');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

async function renderMessages() {
  const list = document.getElementById('messagesList');
  list.innerHTML = '<p style="text-align:center;color:#999;">در حال بارگذاری...</p>';

  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !data || data.length === 0) {
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

  list.innerHTML = data.map(e => `
    <div class="message-card">
      <div class="message-header">
        <div class="message-avatar">${escapeHtml(e.name.charAt(0))}</div>
        <div>
          <p class="message-name">${escapeHtml(e.name)}</p>
          <p class="message-date">${formatDate(e.created_at)}</p>
        </div>
      </div>
      <p class="message-text">${escapeHtml(e.message)}</p>
    </div>
  `).join('');
}

async function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgDiv = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (!name || !message) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'در حال ارسال...';

  const { error } = await supabase
    .from('messages')
    .insert([{ name: name.slice(0, 100), message: message.slice(0, 2000) }]);

  if (error) {
    msgDiv.innerHTML = '<div class="form-message" style="color:red;">خطا در ارسال پیام.</div>';
  } else {
    msgDiv.innerHTML = '<div class="form-message form-success">پیام شما با موفقیت ثبت شد.</div>';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  submitBtn.disabled = false;
  submitBtn.textContent = 'ارسال پیام';
  renderMessages();
  setTimeout(() => { msgDiv.innerHTML = ''; }, 3000);
}

renderMessages();
