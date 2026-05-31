# 🤖 DirCoreBot — Discord Bot

A fun and interactive Discord bot built with **Node.js** and **discord.js v14**. It responds to commands, runs quizzes, welcomes new members, and keeps your server lively!

---

## ✨ Features

- 👋 **Greeting Commands** — Responds to hello, hi, hey, and namaste
- 🏓 **Ping-Pong** — Classic latency check command
- 🧠 **Quiz System** — Multi-category quiz with score tracking
- 🎉 **Welcome Messages** — Automatically greets new server members
- 💬 **Custom Responses** — Replies to natural language phrases like "how are you"

---

## 📁 Project Structure

```
dircoredbot/
├── index.js        # Main bot file
├── .env            # Environment variables (DO NOT commit this!)
├── package.json    # Project dependencies
└── README.md       # You're reading this!
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v16.9.0 or higher
- A Discord account and a bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

### 2. Clone the Repository

```bash
git clone https://github.com/yourusername/dircoredbot.git
cd dircoredbot
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Your Bot Token

Create a `.env` file in the root directory:

```env
DISCORD_TOKEN=your_bot_token_here
```

> ⚠️ **Never share or commit your bot token!** Add `.env` to your `.gitignore`.

### 5. Run the Bot

```bash
node index.js
```

---

## 🎮 Commands

| Command | Description |
|--------|-------------|
| `!hello` / `!hi` / `!hey` / `!namaste` | Bot greets you back |
| `!ping` | Bot replies with "Pong!" |
| `!quiz` | Starts a new quiz session |

### Natural Language Triggers

| You say | Bot replies |
|---------|-------------|
| `hello` | "Hi there! How can I help you today?" |
| `how are you` | "I'm just a bot, but I'm doing great!" |
| `help` | Lists available commands |

---

## 🧠 Quiz System

The quiz pulls random questions from three categories:

- 🌍 **Geography** — Capitals, countries, and more
- 🏛️ **Politics** — World leaders and governments
- 🔬 **Science** — Basic science facts

**How it works:**
1. Type `!quiz` to start
2. Bot asks a question — type your answer
3. Answer correctly → get the next question!
4. Answer wrong → quiz ends with your score and grade
5. Answer all questions → you're a genius! 🏆

> Answers are **case-insensitive**. Questions don't repeat in the same session.

---

## 🛠️ Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| [discord.js](https://discord.js.org/) | ^14.16.3 | Discord API wrapper |
| [dotenv](https://www.npmjs.com/package/dotenv) | ^16.4.5 | Environment variable management |

---

## 🔒 Required Bot Permissions & Intents

Make sure to enable the following in the Discord Developer Portal under your bot settings:

**Privileged Gateway Intents:**
- ✅ `GUILDS`
- ✅ `GUILD_MESSAGES`
- ✅ `MESSAGE_CONTENT` ← **Must be enabled manually!**

**Bot Permissions:**
- Send Messages
- Read Message History

---

## 🧩 Adding More Quiz Questions

Open `index.js` and find the `quizzes` object. Add questions like this:

```js
const quizzes = {
  geography: [
    { question: "What is the capital of Japan?", answer: "tokyo" },
    // add more here...
  ],
  // Add a new category:
  history: [
    { question: "In which year did India get independence?", answer: "1947" },
  ],
};
```

> All answers should be in **lowercase**.

---

## 🐛 Common Issues

**Bot not responding?**
- Make sure `MESSAGE_CONTENT` intent is enabled in the Developer Portal
- Double-check your token in `.env`

**"Used disallowed intents" error?**
- Go to Discord Developer Portal → Your App → Bot → Enable all Privileged Gateway Intents

---

## 📄 License

ISC License. Free to use and modify.

---

## 🙌 Contributing

Pull requests are welcome! Feel free to add new quiz categories, commands, or features.

---

> Made with ❤️ and a lot of `!ping`s.
