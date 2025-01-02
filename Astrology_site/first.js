const zodiacSigns = [
    "Capricorn",  // January
    "Aquarius",   // February
    "Pisces",     // March
    "Aries",      // April
    "Taurus",     // May
    "Gemini",     // June
    "Cancer",     // July
    "Leo",        // August
    "Virgo",      // September
    "Libra",      // October
    "Scorpio",    // November
    "Sagittarius" // December
  ];
  

  const compliments = [
    "You radiate positivity and inspire those around you.",
    "Your creativity knows no bounds.",
    "People admire your strength and resilience.",
    "Your intelligence is as sharp as your wit.",
    "You bring light into every room you enter.",
    "Your kindness leaves a lasting impression.",
    "You are a natural-born leader.",
    "Your confidence is contagious.",
    "Your ability to solve problems is unmatched.",
    "Your charm is truly magnetic.",
    "You have a heart of gold.",
    "Your determination knows no limits.",
    "You are as loyal as they come.",
    "Your passion inspires others to dream big.",
    "Your sense of humor brightens even the darkest days.",
    "You are a true visionary with endless potential.",
    "Your energy is captivating and uplifting.",
    "You have an extraordinary way of connecting with others.",
    "Your ambition drives you to achieve greatness.",
    "You have a calming presence that soothes the soul.",
    "Your curiosity leads you to fascinating discoveries.",
    "You are a wonderful listener and a trusted friend.",
    "Your smile lights up the lives of others.",
    "You have a unique perspective that enriches every discussion.",
    "Your adaptability is your superpower.",
    "You exude a quiet strength that commands respect.",
    "You make even the toughest challenges seem manageable.",
    "Your generosity is truly inspiring.",
    "You are the glue that holds people together.",
    "Your optimism is a breath of fresh air."
  ];
  
const futurePredictions = [
    "You will soon discover a new passion that brings immense joy.",
    "A surprise opportunity will knock on your door; embrace it.",
    "Your hard work will soon pay off in unexpected ways.",
    "A new friendship will prove to be life-changing.",
    "Financial growth is on the horizon; stay confident.",
    "You will find clarity in a situation that once confused you.",
    "An exciting adventure is headed your way.",
    "Someone from your past will reconnect with you soon.",
    "Your ideas will gain recognition and admiration.",
    "A creative project will lead to an unexpected breakthrough.",
    "Your health will improve as you focus on self-care.",
    "You will uncover a hidden talent within yourself.",
    "A meaningful conversation will shift your perspective.",
    "Your persistence will lead to a significant achievement.",
    "Romance is in the air; be open to new possibilities.",
    "A small risk will yield great rewards.",
    "You will overcome a challenge that once seemed insurmountable.",
    "Your generosity will create a ripple effect of kindness.",
    "An unexpected trip will bring new experiences and memories.",
    "Your intuition will guide you to make a crucial decision.",
    "You will receive a long-awaited piece of good news.",
    "A mentor will help you unlock your full potential.",
    "Your creativity will inspire those around you.",
    "You will find balance in areas of your life that feel chaotic.",
    "A new hobby will lead to unexpected connections.",
    "You will make progress on a personal goal you set aside.",
    "Your patience will be rewarded in the coming weeks.",
    "You will discover a deeper sense of purpose.",
    "A chance encounter will open new doors for you.",
    "Your efforts to help others will bring unexpected blessings."
  ];

const negativePredictions = [
    "A misunderstanding might create temporary tension with someone close.",
    "A financial setback may require you to reassess your priorities.",
    "You might face delays in achieving a personal goal.",
    "An unexpected challenge could test your patience.",
    "You may feel overwhelmed by responsibilities in the coming days.",
    "A disagreement at work might leave you feeling frustrated.",
    "A plan may not unfold as expected; stay adaptable.",
    "You could face a minor health concern; take care of yourself.",
    "A long-term project might require more effort than anticipated.",
    "You may feel disconnected from someone you care about.",
    "A mistake could lead to temporary embarrassment, but you'll recover.",
    "You might encounter a setback in your career path.",
    "A decision you make could lead to short-term regret.",
    "Someone might question your abilities; stand your ground.",
    "You may face criticism that feels unjustified.",
    "A travel plan could be disrupted by unforeseen circumstances.",
    "You might feel undervalued in a relationship or workplace.",
    "A friend might unintentionally hurt your feelings.",
    "A missed opportunity could leave you feeling disappointed.",
    "You may encounter resistance to your ideas or suggestions.",
    "A period of uncertainty might shake your confidence.",
    "You might experience unexpected expenses that strain your budget.",
    "A technical issue could disrupt an important project.",
    "You may feel unmotivated and struggle to find inspiration.",
    "A rumor could cause temporary discomfort in your social circle.",
    "You might have to let go of something you've been holding onto.",
    "A setback in your plans could require a change of strategy.",
    "An old habit might resurface, challenging your progress.",
    "You may feel isolated or misunderstood in the near future.",
    "A small failure could make you doubt your abilities, but it will pass."
  ];
  
const recommendations = [
    "Take time to prioritize self-care and relaxation.",
    "Focus on improving your communication skills to avoid misunderstandings.",
    "Create a detailed plan to achieve your long-term goals.",
    "Spend quality time with loved ones to strengthen relationships.",
    "Set aside time each day for mindfulness or meditation.",
    "Stay open to constructive feedback to grow personally and professionally.",
    "Learn a new skill to enhance your personal development.",
    "Avoid procrastination by breaking tasks into smaller steps.",
    "Be mindful of your spending and create a financial plan.",
    "Seek out opportunities to network and build meaningful connections.",
    "Take a break from social media to recharge mentally.",
    "Practice gratitude to maintain a positive outlook.",
    "Focus on eating healthily and staying hydrated.",
    "Invest time in a hobby or activity that brings you joy.",
    "Be more patient with yourself and others around you.",
    "Set clear boundaries to protect your mental and emotional well-being.",
    "Keep a journal to reflect on your thoughts and experiences.",
    "Take a short trip to refresh your perspective on life.",
    "Focus on improving your physical fitness through regular exercise.",
    "Learn to say no to commitments that don't align with your priorities.",
    "Read books or articles that inspire and motivate you.",
    "Volunteer for a cause that you’re passionate about.",
    "Take small risks to step out of your comfort zone.",
    "Reconnect with an old friend or family member you’ve lost touch with.",
    "Be open to change and adapt to new circumstances gracefully.",
    "Practice active listening to deepen your connections with others.",
    "Work on building a consistent daily routine.",
    "Challenge yourself to accomplish one small goal each day.",
    "Set aside some time to declutter your physical and digital space.",
    "Focus on expressing your creativity in whatever form feels natural."
  ];

const button = document.querySelector("button");
const form = document.querySelector("form");
button.addEventListener('click', (event)=>{
    event.preventDefault();
    const form_data = new FormData(form);

    let month = form_data.get('birth_month');
    let day = form_data.get('birth_day');
    let year = form_data.get('birth_year');
    
    const pre = (Math.floor((day*year)/month))%30;
    const post = (Math.floor((day*year*2)/month))%30;
    const fut = (Math.floor((day*year*3)/month))%30;
    const rec = (Math.floor((day*year*4)/month))%30;

    const prediction = document.createElement('span');
    prediction.style.backgroundColor = "aliceblue";
    prediction.style.padding = "10px";
    prediction.style.borderRadius = "10px";
    prediction.style.margin = "10px"
    prediction.style.fontSize = "20px";
    prediction.textContent = `Your zodiac sign is ${zodiacSigns[month-1]}. ${compliments[pre]} ${futurePredictions[post]} ${negativePredictions[fut]} ${recommendations[rec]}`;

    document.body.appendChild(prediction);
}) 
  