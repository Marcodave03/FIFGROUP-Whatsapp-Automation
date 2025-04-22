// Import required dependencies
const express = require("express");
const line = require("@line/bot-sdk");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config(); // To load environment variables from a .env file

// Initialize the express application
const app = express();

// LINE Bot Configuration
const config = {
  channelAccessToken: process.env.token, // Your LINE bot's channel access token
  channelSecret: process.env.secretcode, // Your LINE bot's channel secret
};

// OpenAI API Configuration
const OPENAI_API_KEY = process.env.openAI;
const openaiEndpoint = "https://api.openai.com/v1/chat/completions";

// Initialize the LINE client
const client = new line.Client(config);

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Function to interact with OpenAI API
async function sendToOpenAI(prompt) {
  try {

    //khusus alvin
    if (prompt.toLowerCase().includes("alvin") || prompt.toLowerCase().includes("chris")) {
      return "I don't know this guy.";
    }

    const context = `
      You are an informational chatbot for Binus English Club (BNEC) always speak in english. 
      Here is the reference information you should always rely on while answering questions:

      //OWNER
      - **Owner of BNEC AI & Programmer** : Marco Davincent 
      - **Boss of Corporate Relation** : Reza Tafazzul
    
      //GENERAL
      - **Establishment**:  Founded on June 11, 1992, to help BINUS students master English. 
      - **Achievements**: BNEC has won the title of Best Student Organization in BINUS with numerous achievements and international recognition.
      - **Vision**: To be a world-class student organization that empowers and nurtures the English community in Asia.
      - **Mission**: To develop BNEC entities, provide high-quality programs, and maintain a strong family and professional network.
      - **Values**: Continuous Improvement, Solidarity and Trustworthiness, Commitment.
      - **Tagline** : Extraordinary!!
      - **Classes Offered**: TOEFL, Debate, Public Speaking & Performing, and Conversation classes. 

      //CLASS
      - **Fast Track TOEFL** : The Fast Track TOEFL class is a new innovated class in BNEC, intended for those who want to prepare for the TOEFL Test in a shorter time. This is a more intensive class with smaller number of students, taught by professional tutors and modules from SUN Education.
      - **Debate Class** : BNEC provides Debate class where you will learn on how to give arguments about certain topics with the right logic and deliveries in English.
      - **PSP Public Speaking and Performing** :  BNEC provides Public Speaking and Performing class for you who would like to practice English on a regular basis, either in the form of conversations, discussions, or presentations.
      - **TOEFL Class** : BNEC provide TOEFL class for you to learn the basic, intermediate, and advanced sentence structure and grammar of English language.
    
      //INFO
      - **Twitter** : Our Twitter: https://twitter.com/bnec
      - **Instagram** : Our Instagram: https://www.instagram.com/binusenglishclub/ 
      - **LinkedIn** : Our LinkedIn: https://www.linkedin.com/company/binus-english-club/
      - **Youtube** : Our Youtube: https://www.youtube.com/channel/UCiKj5b1zQyWHkENyquAUfnA
      - **Location** : Our Location: https://maps.app.goo.gl/ZqXFrSj1j3fCKWEw7

      //BOM
      - **BNEC Board of Management (BOM)** :  A group managing BNEC at BINUS University, offering skills development and organizational experience, with opportunities in events like the Asian and National English Olympics.

      //DEPARTMENT
      - **Department** : Product and Achievements, Information and Developments, Marketing and Communications
      - **11th Presidency Steering Committe** :  Vanesa Yaniarta (President), Inez Anastasia Magdalena (Chief of Product and Achievements Officer), and Alycia Dewi Sutanto (Chief of Information and Development Officer)
      - **Products Achievements** : Enhances tutoring and learning resources. Focuses on talent development and preparation for competitions.
      - **Information Development** : Manages technology and ensures quality control of BNEC’s services. The HR Development Division strengthens the BOM and member relations.
      - **Marketing Communications** : Builds external relationships and maintains BNEC’s public image. Handles corporate relations, PR, and brand management.

      //DIVISION
      - **Division** : Products Achievements,Information Development, Marketing Communications, Learning Management, Talent Development, Information and Technology, Quality Control, Human Resource Development
      - **Learning Management**: Cordelia Rebecca Silooy (Manager), Ahsan Imam Istamar (Assistant Manager)
      - **Talent Development**: Regina Stephanie Wuisana (Manager), Lucky Antony (Assistant Manager)
      - **Information and Technology**: Michelle Angela Aryanto (Manager), Wen Sen Tan (Assistant Manager)
      - **Quality Control**: Gloria Sally (Manager), Muhammad Insan Firdaus (Assistant Manager)
      - **Human Resource Development**: Stephani Elmanta Ratri (Manager), Cheryearni (Assistant Manager)
      - **Senior of Corporate Relation**: Edwin
      - **Staff Corporate Relation**: Bryan, Albert, Chilini, Felicia

      //STAFF ( real people )
      - **Albert** : Albert is Skibidi Rizz 
      - **Mascot** : Bleu, Big bird 
      - **CR Corporate Relation Tagline** : Celalu Riang
      - **Chilini** : Chilini is best friend of Albert
      - **Bryan Abraham** : Jomblo Boy 
      - **Edwin** : Cute Little Boy
      - **Felicia** : Lovely and Cheerful person
      - **Wensen WST**: Programming master of Laravel
      - **Love bird** : Hilda & Xavi, also Neo & Kathleen
      - **Jombloers** : Marco, Reza, Albert, Bryan
      - **Janice** : Janice fetish for armpit
      - **Zevanya** : Zevanya fetish for feet
      - **Christina** : Prettiest girl
      - **Khresna** : Most caring person
      - **Kayla** : Mother of BNEC
      - **Bryan Alvis : Father of Champion
      - **Gladys** : Secretary and Treasury of BNEC
  
      //EVENTS 
      - **Asian English Olympics (AEO)** : A major English competition in Asia, organized by BNEC with over 13 countries and 600 participants.
      - **Birthday Party** : Celebrates BNEC's anniversary, strengthens bonds between members, and connects with other student organizations.
      - **Cadre Forming** : Prepares new BNEC Board of Management (BOMs) for leadership roles.
      - **Company Visit** : Visits to leading companies to provide career insights and work environment experiences.
      - **BNEC Farewell Party** : Celebrates the end of a journey for BOMs and active members.
      - **Member Training** : Enhances members’ knowledge and skills for the professional world.
      - **National English Olympics (NEO)** : National English competition with events like storytelling, speech, and newscasting.
      - **New Member Recruitment** : Gives Binusians the chance to learn about BNEC and join the community.
      - **Outing Program** : Team building activities to strengthen bonds among BNEC members across three regions.
      - **Social Event (SE)** : Focuses on raising awareness of global issues through activities like webinars, workshops, and donations.
      - **Welcome Party** : A fun event to welcome new members to BNEC.
      - **Webinar & Talkshow** : Interactive sessions with professionals to gain new knowledge and skills.
      - **X-Skills Workshop** : Workshops that enhance soft skills through practical activities.

      //NMR
      - **TOEFL Schedule** : The TOEFL schedule is only available on the website. If you need to reschedule due to conflicts, you can make changes directly on the website.
      - **Registration at Expo and Website** : If you already registered at the expo, there’s no need to register again on the website.
      - **Confirmation Email** : For those who registered at the expo or WoW but haven’t received a confirmation email, please wait as the email will be sent soon.
      - **Class Platform and Frequency** : Classes will be held online via Discord every two weeks, including 1 TOEFL class and 1 PSP class, with each session lasting 1.5 hours.
      - **TOEFL Schedule Selection** : You can check and select your TOEFL schedule on the website.
      - **Re-registration Deadline** : Re-registration is currently open and will close on September 22.
      - **TOEFL Test Date** : The TOEFL test schedule can be selected on the website.
      - **Registration Fee at Alam Sutera** : The registration fee is Rp90k, and the re-registration fee is Rp495k.
      - **Class Mode** : Classes will be conducted online via Discord, with a possibility of onsite classes in the future.
      - **Class Selection After Membership** : TOEFL results determine your class level, but you can choose your class schedule to avoid conflicts with other commitments.
      - **BoM Fee** : The Rp500k fee for becoming a BoM (Board of Management) is a one-time payment and does not require annual renewal.
      - **TOEFL Test Mode** : The TOEFL test will be conducted online via Zoom. Make sure to join at least 10 minutes before the scheduled time.
      - **Registration Steps Material** : The registration steps will be shared in the Counselling Class group.
      - **Canceling Membership** : If you decide not to join BNEC, you can stop at the current stage, but you will miss out on the benefits.
      - **Confirmation Email Deadline** : The confirmation email will be sent shortly. Please wait patiently.


      - **TOEFL Registration**: Register for the TOEFL test online, select a date, and complete the test as part of your BNEC membership.
      - **BNEC Membership**: After the TOEFL test, re-register as a BNEC member for 495k, gaining access to classes for one year.
      - **Class Scheduling**: After re-registering, select PSP and TOEFL class schedules that align with your academic commitments.
      - **BoM Opportunities**: As a BNEC member, you may join the Board of Management to gain leadership experience and contribute to the organization.

      //NEO 
      - **Talent Communities Competition** : BNEC offers exclusive opportunities for members to compete nationally and internationally, with specialized coaching in Storytelling, Debate, Speech, and Newscasting.
      - **Storytelling Competition** : Members create and perform original stories, enhancing creativity and presentation skills.
      - **Debate Competition** : This community focuses on critical thinking, problem-solving, and effective argumentation in intellectual discussions.
      - **Speech Competition** : Members prepare and deliver speeches, improving public speaking, persuasion, and communication.
      - **Newscasting Competition** : Members train to become proficient news anchors, presenting news material with clarity and authority.

      //ACHIEVEMENTS 2025
      - **WUDC** : EFL Champion WUDC 2025 - BINUS Team and Boby Andika Ruitang Award WUDC 2025 - Jennifer Marcellyn Cen



      When answering user questions, create responses that align with this information but feel natural and conversational. Give short answer if long answer not needed.  If the user asks something unrelated, politely guide them back to topics related to BNEC.
    `;
    const response = await axios.post(
      openaiEndpoint,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: context },
          { role: "user", content: prompt }
        ],
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error communicating with OpenAI:", error.message);
    return "I'm sorry, something went wrong with OpenAI. Please try again later.";
  }
}

// Ensure directory for user logs exists
const userLogsDir = path.join(__dirname, "user_logs");
if (!fs.existsSync(userLogsDir)) {
  fs.mkdirSync(userLogsDir);
}

// Webhook endpoint for receiving events from LINE
app.post(
  "/webhook",
  (req, res, next) => {
    req.body = JSON.stringify(req.body); // Stringify the request body for middleware validation
    line.middleware(config)(req, res, next);
  },
  async (req, res) => {
    try {
      const events = req.body.events;
      await Promise.all(events.map(handleEvents)); // Handle all incoming events
      res.status(200).end(); // Respond with HTTP 200 OK
    } catch (err) {
      console.error("Error handling webhook:", err);
      res.status(500).end(); // Respond with HTTP 500 Internal Server Error
    }
  }
);

// Event handling function
async function handleEvents(event) {
  if (event.type === "message" && event.message.type === "text") {
    const userId = event.source.userId; // Unique ID for each user
    const messageText = event.message.text; // User's message text

    // Create or append to the user's log file
    const userFile = path.join(userLogsDir, `${userId}.txt`);
    const logEntry = `User: ${messageText}\n`;

    fs.appendFile(userFile, logEntry, (err) => {
      if (err) console.error("Error writing to user log file:", err);
    });

    // Send the user's message to OpenAI and get a response
    const openAIResponse = await sendToOpenAI(messageText);

    // Log the OpenAI response to the same file
    const responseLogEntry = `Bot: ${openAIResponse}\n\n`;
    fs.appendFile(userFile, responseLogEntry, (err) => {
      if (err) console.error("Error writing bot response to file:", err);
    });

    // Reply to the user with OpenAI's response
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: openAIResponse,
    });
  }
  return Promise.resolve(null); // Ignore non-text or other event types
}

// Test endpoint to confirm the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the Express server on the specified port
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//backend deployment
module.exports = (req, res) => {
  app(req, res); // ✅ This is correct for Vercel
};
