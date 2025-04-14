
const quotes = [
// Quotes
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Start where you are. Use what you have. Do what you can.",
    "You are capable of amazing things.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Try not to become a man of success. Rather become a man of value.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "With the new day comes new strength and new thoughts.",
    "The only way to do great work is to love what you do.",
    "It always seems impossible until it’s done.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Opportunities don't happen. You create them.",
    "The future belongs to those who believe in the beauty of their dreams."
// Quotes
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('newQuoteBtn');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});