function toggleFaq(el) { el.parentElement.classList.toggle('open'); }

function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    const btn = document.getElementById('btn-' + id);
    if (btn) { btn.textContent = '✅ コピーしました'; setTimeout(() => { btn.textContent = '📋 コピーする'; }, 2000); }
  });
}
