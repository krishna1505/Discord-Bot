const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent 
  ] 
});

// Custom responses
const responses = {
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "hello": "Hi there! How can I help you today?",
  "help": "Here are some commands you can use: !hello, !ping, !quiz.",
};

// Quiz data organized by category
const quizzes = {
  geography: [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What is the capital of France?", answer: "paris" },
  ],
  politics: [
    { question: "Who is the PM of India?", answer: "narendra modi" },
    { question: "Who is the current President of the USA?", answer: "joe biden" },
  ],
  science: [
    { question: "What planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the chemical symbol for water?", answer: "h2o" },
  ],
};

// Variables to keep track of the current quiz state
let currentQuiz = null;
let correctAnswersCount = 0;
let totalQuestions = 0;
let answeredQuestions = [];
let askedQuestions = [];

// Function to ask a new question
function askQuestion(message) {
  const allCategories = Object.keys(quizzes);
  const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  
  // Filter questions that haven't been asked yet
  const availableQuestions = quizzes[randomCategory].filter(q => !askedQuestions.includes(q.question));
  
  if (availableQuestions.length === 0) {
    message.reply("hurray you are genius you know all things ! Type !quiz to try again.");
    return;
  }
  
  currentQuiz = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  askedQuestions.push(currentQuiz.question);
  totalQuestions++;
  message.reply(currentQuiz.question);
}

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();
  const args = content.split(" ");
  const command = args.shift(); // Get the command

  // Respond to commands
  if (["!hello", "!hi", "!hey", "!namaste"].includes(content)) {
    message.reply("Hello! How are you?");
  } else if (command === "!ping") {
    message.reply("Pong!");
  } else if (command === "!quiz") {
    askedQuestions = []; // Reset asked questions for a new quiz
    askQuestion(message);
  } else if (currentQuiz && content === currentQuiz.answer) {
    correctAnswersCount++;
    message.reply(`Correct! 🎉 You have answered correctly ${correctAnswersCount} times.`);
    askQuestion(message); // Ask the next question
  } else if (currentQuiz) {
    message.reply("You are wrong! Go and study! 📚 Here are all the correct answers: " + answeredQuestions.join(", ") + ".");
    const grade = (correctAnswersCount / totalQuestions) * 100;
    message.reply(`Your grade: ${grade.toFixed(2)}%`);
    // Reset the quiz state
    currentQuiz = null;
    correctAnswersCount = 0;
    totalQuestions = 0;
    answeredQuestions = [];
    askedQuestions = [];
  } else if (responses[content]) {
    message.reply(responses[content]);
  }else {
    message.reply("Backchodi mat kar nikal ");
  }

  // Log messages
  console.log(`Message from ${message.author.username}: ${message.content}`);
});

// New member welcome
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (channel) {
    channel.send(`Welcome to the server, ${member}! 🎉`);
  }
});


// Log in to Discord
client.login("your token write here");
