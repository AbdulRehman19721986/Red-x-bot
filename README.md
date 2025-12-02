# Red-x-Bot - Advanced WhatsApp Bot
**Developed by Abdul Rehman Rajpoot**  
GitHub: https://github.com/AbdulRehman19721986/Red-x-Bot 
Telegram: @AbdulRehmanRajpoot (add if you have)

## Hacker Interface
Yeh frontend ek full hacker-themed site hai jo directly is repo se linked hai.  
- Live Demo: https://red-x-bot.vercel.app (deploy karne ke baad)  
- Features: QR generation, session hijack, auto-save to /sessions folder.  

### Deployment (Site + Bot)
1. Frontend ko Vercel pe deploy: Connect GitHub repo → folder: frontend  
2. Bot ko Render pe: `npm install` → `node index.js` (tera existing code)  
3. API endpoint banao: `/api/qr?phone=number` jo QR return kare aur session save kare GitHub pe.

Sessions auto-save honge as JSON files – VPS pe copy kar ke 24/7 run kar sakte ho.

**Warning: Use ethically. Owner not responsible.**