// ========================================================
// 1. DUAL SIDE CODING SERIES (LEFT & RIGHT PANELS)
// ========================================================

const leftCodeSnippets = [
    `[SYS_LOG] Port 8080: SYN_SENT`,
    `[FIREWALL] Checking IP 192.168.1.105...`,
    `[ALERT] Packet size exceeds 1500 bytes.`,
    `[SCANNER] Vulnerability found at /api/auth`,
    `[SHIELD] Auto-mitigating DDoS vector...`,
    `[STATUS] System Integrity: 99.8%`
];

const rightCodeSnippets = [
    `import hashlib\ndef encrypt_payload(data):\n    return hashlib.sha256(data).hexdigest()`,
    `const aes = require('crypto-js/aes');\nlet cipher = aes.encrypt('payload', 'secret');`,
    `RSA_KEY_PAIR: 4096 bits generated.`,
    `Handshake: TLS_AES_256_GCM_SHA384 OK`
];

function runSideCodingSeries(elementId, snippets) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let lineIdx = 0;

    setInterval(() => {
        const text = snippets[lineIdx % snippets.length];
        const line = document.createElement('div');
        line.innerText = `> ${text}`;
        el.appendChild(line);
        
        if (el.childNodes.length > 20) {
            el.removeChild(el.firstChild);
        }
        el.scrollTop = el.scrollHeight;
        lineIdx++;
    }, 1200);
}

// ========================================================
// 2. CORNER DASHBOARD MODE & COURSE ROUTING
// ========================================================

function openCourseDefence() {
    const homeCard = document.getElementById('homeMainCard');
    const defenceSec = document.getElementById('defenceSection');

    // Home Card ko screen ke corner par fix karna
    if (homeCard) {
        homeCard.classList.add('corner-mode');
    }

    // Cyber Defence Section ko open karna
    if (defenceSec) {
        defenceSec.style.display = 'block';
    }
}

function showMainHome() {
    const homeCard = document.getElementById('homeMainCard');
    const defenceSec = document.getElementById('defenceSection');

    // Home Card ko wapas normal center stage par lana
    if (homeCard) {
        homeCard.classList.remove('corner-mode');
    }

    // Defence Section hide karna
    if (defenceSec) {
        defenceSec.style.display = 'none';
    }
}

// ========================================================
// 3. CYBER DEFENCE AUTOMATIC CODING GENERATOR
// ========================================================

const defenceScripts = {
    network: [
        `# Automated Network Firewall Rule Generator`,
        `iptables -A INPUT -p tcp --dport 22 -j DROP`,
        `iptables -A INPUT -s 10.0.0.0/8 -m state --state NEW -j ACCEPT`,
        `echo "[+] Network Defense Rules Applied Successfully."`
    ],
    crypto: [
        `// AES-256 Payload Encryptor`,
        `function encryptPayload(rawText, key) {`,
        `   console.log("[+] Encrypting payload with key length 256 bits...");`,
        `   return "ENC_" + btoa(rawText);`,
        `}`
    ],
    pentest: [
        `import socket`,
        `for port in range(20, 1024):`,
        `    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)`,
        `    res = s.connect_ex(('127.0.0.1', port))`,
        `    if res == 0: print(f"[OPEN] Port {port}")`
    ]
};

function loadTopicCode(topicKey) {
    const consoleEl = document.getElementById('autoDefenceConsole');
    if (!consoleEl) return;

    consoleEl.innerHTML = `> Executing Code Generator for [${topicKey.toUpperCase()}]...\n\n`;
    const lines = defenceScripts[topicKey] || ["No script available."];
    
    let idx = 0;
    const interval = setInterval(() => {
        if (idx < lines.length) {
            consoleEl.innerHTML += lines[idx] + "\n";
            consoleEl.scrollTop = consoleEl.scrollHeight;
            idx++;
        } else {
            clearInterval(interval);
        }
    }, 400);
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert("Authentication Successful! Redirecting to Analytics Dashboard...");
    window.location.href = "dashboard.html";
}

// ========================================================
// 4. MATRIX BACKGROUND EFFECT
// ========================================================

function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const drops = Array(Math.floor(canvas.width / 15)).fill(1);

    setInterval(() => {
        ctx.fillStyle = 'rgba(2, 5, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0ef';
        ctx.font = '12px monospace';

        drops.forEach((y, i) => {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * 15, y * 15);
            if (y * 15 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }, 40);
}

window.addEventListener('DOMContentLoaded', () => {
    initMatrix();
    runSideCodingSeries('leftCodeStream', leftCodeSnippets);
    runSideCodingSeries('rightCodeStream', rightCodeSnippets);
});