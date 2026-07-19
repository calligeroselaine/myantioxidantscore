export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  body: Section[];
};

type Section = {
  type: "p" | "h2" | "h3" | "ul" | "cta" | "video";
  content?: string;
  items?: string[];
  mediaId?: string;
  aspect?: number;
};

export const posts: Post[] = [
  {
    slug: "daily-multivitamin-biological-ageing",
    title: "Can a Daily Multivitamin Slow Biological Ageing?",
    excerpt:
      "New research published in Nature Medicine found that a daily multivitamin measurably slowed biological ageing over two years — and raises the question of whether more advanced nutrition could do even more.",
    category: "Science",
    date: "July 19, 2026",
    readTime: "3 min read",
    author: "George Calligeros",
    body: [
      {
        type: "p",
        content:
          "For years, many people have questioned whether taking a daily multivitamin makes any real difference. New research published in Nature Medicine suggests the answer may be yes.",
      },
      {
        type: "p",
        content:
          "In a two-year clinical trial involving 958 healthy older adults, researchers led by Dr. Howard Sesso from Massachusetts General Brigham found that participants taking a daily multivitamin experienced a measurable slowing of biological ageing when assessed using multiple DNA-based epigenetic ageing clocks. The effect was equivalent to reducing biological ageing by approximately four months over the course of the study, with the greatest benefit seen in people who appeared to be ageing faster at the beginning of the trial.",
      },
      {
        type: "p",
        content: "Reflecting on the findings, Dr. Sesso said:",
      },
      {
        type: "p",
        content:
          "\"There is a lot of interest today in identifying ways to not just live longer, but to live better. It was exciting to see the benefits of a multivitamin linked with markers of biological aging. This study opens the door to learning more about accessible, safe interventions that contribute to healthier, higher-quality aging.\"",
      },
      {
        type: "p",
        content:
          "The findings add to a growing body of evidence suggesting that high-quality multivitamin supplementation can support healthy ageing—not simply by addressing nutrient deficiencies, but by influencing measurable biological markers associated with the ageing process.",
      },
      { type: "h2", content: "The Next Question: Are All Supplements Equally Effective?" },
      {
        type: "p",
        content:
          "The study provides encouraging evidence that multivitamin supplementation can positively influence biological ageing. However, it also raises an important question: if a standard multivitamin can produce measurable improvements, could a more advanced nutritional formulation achieve even greater results?",
      },
      {
        type: "p",
        content: "This is where measurable wellness becomes especially valuable.",
      },
      {
        type: "p",
        content:
          "Early clinical studies using Prysm iO technology have shown substantially greater improvements in carotenoid antioxidant scores among participants using Prysm Certified nutritional products than those typically achieved with an ordinary multivitamin. While these studies measured a different biomarker than Dr. Sesso's research, they point to the exciting possibility that nutritional quality matters—not all supplements deliver the same biological response.",
      },
      {
        type: "p",
        content:
          "Rather than simply assuming a supplement is working, technologies like Prysm iO allow people to measure changes in important nutritional biomarkers over time, helping to personalise wellness decisions based on objective results instead of guesswork.",
      },
      {
        type: "p",
        content:
          "As the science of healthy ageing continues to evolve, the future of nutrition may not simply be taking supplements—it may be measuring whether they're actually making a meaningful difference.",
      },
      { type: "cta" },
    ],
  },
  {
    slug: "signs-of-oxidative-stress",
    title: "5 Signs Your Body Is Under Oxidative Stress (And What to Do About It)",
    excerpt:
      "Low energy. Poor sleep. Slower recovery. These might not just be signs of a busy life — they could be your body telling you something important.",
    category: "Wellness",
    date: "March 28, 2026",
    readTime: "2 min read",
    body: [
      {
        type: "p",
        content:
          "You might feel fine. But \"fine\" and \"thriving\" are two very different things. Oxidative stress is one of the most common — and most overlooked — drivers of how you feel day to day. Here are five signs your body may be struggling.",
      },
      { type: "h2", content: "1. Constant Fatigue or Low Energy" },
      {
        type: "p",
        content:
          "If you're sleeping enough but still waking up exhausted, oxidative stress could be affecting your cells' ability to produce energy. When free radicals damage mitochondria — the powerhouses of your cells — you end up feeling flat, drained, or lacking motivation no matter how much rest you get.",
      },
      { type: "h2", content: "2. Brain Fog and Poor Focus" },
      {
        type: "p",
        content:
          "The brain is particularly sensitive to oxidative damage. If you're experiencing slower thinking, forgetfulness, or reduced mental clarity, it may be a sign that your antioxidant defences aren't keeping up. Many people chalk this up to stress or age — but it's often something that can be addressed.",
      },
      { type: "h2", content: "3. Premature Ageing (Skin + Body)" },
      {
        type: "p",
        content:
          "Oxidative stress is one of the primary drivers of accelerated ageing. It breaks down collagen, affects skin quality, and contributes to the kind of vitality loss that makes people feel older than their years. If you're noticing your body isn't bouncing back the way it used to, this is worth paying attention to.",
      },
      { type: "h2", content: "4. Frequent Illness or Slow Recovery" },
      {
        type: "p",
        content:
          "Your immune system relies heavily on antioxidants to function well. Weakened antioxidant defences mean your body can struggle to recover and repair — leaving you more susceptible to illness and taking longer to bounce back when you do get sick.",
      },
      { type: "h2", content: "5. Ongoing Inflammation or Aches" },
      {
        type: "p",
        content:
          "Oxidative stress and inflammation go hand in hand. Even people who exercise regularly can experience slower recovery, persistent aches, or a general sense that their body is always slightly inflamed. It's a signal worth taking seriously.",
      },
      { type: "h3", content: "Why These Signs Are Often Ignored" },
      {
        type: "p",
        content:
          "Most people attribute these symptoms to ageing, busyness, or the demands of modern life. And because they come on gradually, it's easy to accept them as normal. They're not. They're your body asking for better support.",
      },
      { type: "h3", content: "What Can You Do About It?" },
      {
        type: "ul",
        items: [
          "Improve your diet — focus on antioxidant-rich foods like berries, leafy greens, and colourful vegetables",
          "Prioritise sleep and stress management",
          "Maintain regular movement and exercise",
          "Consider targeted supplements to fill the gaps your diet misses",
        ],
      },
      { type: "h3", content: "The Most Important Step: Measure First" },
      {
        type: "p",
        content:
          "The challenge is that you can't feel your antioxidant levels — and you can't improve what you can't measure. A Prysm iO scan takes just 15 seconds, is completely non-invasive, and gives you an actual number that tells you where you stand. From there, you can take action with confidence.",
      },
      { type: "cta" },
    ],
  },
  {
    slug: "what-is-oxidative-stress",
    title: "What Is Oxidative Stress and How Does It Affect Your Body?",
    excerpt:
      "What if your body was slowly being damaged without you knowing? Most people focus on what they eat and how much they exercise — but overlook one of the biggest drivers of how they age and feel.",
    category: "Science",
    date: "March 23, 2026",
    readTime: "2 min read",
    body: [
      {
        type: "p",
        content:
          "Most people focus on calories, exercise, and sleep. But there's something happening inside your body right now that influences how you age, how you feel, and how well you perform — and most people have no idea it's even occurring.",
      },
      { type: "h2", content: "What Is Oxidative Stress?" },
      {
        type: "p",
        content:
          "Oxidative stress happens when your body has too many free radicals and not enough antioxidants to neutralise them. Free radicals are unstable molecules that cause damage to your cells. Antioxidants are your body's defence system. When the balance tips in the wrong direction, the result is oxidative stress — a kind of internal \"rust\" that accumulates over time.",
      },
      { type: "h2", content: "What Causes Oxidative Stress?" },
      {
        type: "p",
        content: "Many factors of modern life contribute to oxidative stress:",
      },
      {
        type: "ul",
        items: [
          "Environment: air pollution, toxins, and UV exposure",
          "Diet: processed foods, excess sugar, and not enough fresh produce",
          "Lifestyle: chronic stress, poor sleep, alcohol, and smoking",
        ],
      },
      {
        type: "p",
        content:
          "What surprises many people is that even those who consider themselves \"healthy\" can have significant oxidative stress. You don't have to be living an obviously unhealthy life for your levels to be higher than they should be.",
      },
      { type: "h2", content: "How Does Oxidative Stress Affect Your Body?" },
      {
        type: "ul",
        items: [
          "Reduced energy and persistent fatigue",
          "Brain fog and difficulty concentrating",
          "Accelerated ageing — inside and out",
          "Increased inflammation and slower recovery",
          "Elevated risk of chronic disease over time",
        ],
      },
      {
        type: "p",
        content:
          "The damage accumulates quietly. By the time symptoms are obvious, oxidative stress has often been building for years.",
      },
      { type: "h2", content: "Why Most People Don't Know Their Levels" },
      {
        type: "p",
        content:
          "Oxidative stress is invisible. You can't feel it directly. Standard health checks don't measure it. And most people only act when something goes wrong — by which point a lot of damage has already been done.",
      },
      { type: "h2", content: "Can You Measure Oxidative Stress?" },
      {
        type: "p",
        content:
          "Yes. Using non-invasive scanning technology, your antioxidant levels can be measured in just 15 seconds — no needles, no waiting, no guesswork. Your result gives you a clear picture of how well your body is currently defending itself.",
      },
      { type: "h2", content: "How to Reduce Oxidative Stress Naturally" },
      {
        type: "ul",
        items: [
          "Eat more antioxidant-rich foods — berries, leafy greens, and colourful vegetables",
          "Improve sleep quality and manage chronic stress",
          "Stay physically active — moderate exercise supports antioxidant production",
          "Consider targeted supplementation to fill the gaps",
        ],
      },
      { type: "h3", content: "Why Measuring Changes Everything" },
      {
        type: "p",
        content:
          "When you can see your number, everything changes. You move from guessing to knowing. From hoping your habits are working to having proof. That clarity drives real, motivated change.",
      },
      { type: "cta" },
    ],
  },
  {
    slug: "antioxidant-score-health",
    title: "What Is an Antioxidant Score? Why It Matters for Your Health",
    excerpt:
      "What if you could measure your health in just 15 seconds? Most people have no idea what's actually happening inside their body — even when they're doing everything \"right\".",
    category: "Education",
    date: "March 18, 2026",
    readTime: "2 min read",
    body: [
      {
        type: "p",
        content:
          "You eat well. You exercise. You take supplements. But do you actually know if any of it is working? For most people, the answer is no — and that's a problem worth solving.",
      },
      { type: "h2", content: "What Is an Antioxidant Score?" },
      {
        type: "p",
        content:
          "An antioxidant score is a measurable number that tells you how well your body is protected against cellular damage. Your body is constantly exposed to oxidative stress — and antioxidants are your defence. Your score is essentially a snapshot of how well that defence system is functioning right now, at a cellular level.",
      },
      { type: "h2", content: "What Is Oxidative Stress?" },
      {
        type: "p",
        content:
          "Oxidative stress occurs when free radicals in your body outnumber your antioxidants. Free radicals come from pollution, poor nutrition, stress, alcohol, and lack of sleep. Over time, elevated oxidative stress is associated with premature ageing, low energy, inflammation, and increased risk of chronic disease.",
      },
      { type: "h2", content: "Why Most People Are Guessing" },
      {
        type: "ul",
        items: [
          "You might be eating nutritious food but missing key nutrients",
          "You might be taking supplements without knowing if they're being absorbed",
          "Standard health checks don't measure antioxidant status at all",
        ],
      },
      {
        type: "p",
        content:
          "Without a score, you're managing your health by feeling — and feelings aren't always accurate.",
      },
      { type: "h2", content: "How Can You Measure Your Antioxidant Score?" },
      {
        type: "p",
        content:
          "Modern scanning technology makes it possible to measure your antioxidant levels non-invasively in seconds. No needles. No delays. Just a quick, painless scan that delivers your personalised score immediately — so you know exactly where you stand.",
      },
      { type: "h2", content: "What Do the Results Mean?" },
      {
        type: "ul",
        items: [
          "Low score: elevated oxidative stress — your body needs more support",
          "Moderate score: room for improvement — targeted changes can make a real difference",
          "High score: strong antioxidant defence — keep doing what you're doing",
        ],
      },
      { type: "h2", content: "How to Improve Your Antioxidant Score" },
      {
        type: "ul",
        items: [
          "Nutrition: eat more produce, especially colourful, carotenoid-rich varieties",
          "Lifestyle: manage stress, improve sleep, and stay active",
          "Supplementation: targeted nutritional support can significantly boost your score",
        ],
      },
      { type: "h3", content: "Why Measuring Matters" },
      {
        type: "p",
        content:
          "A number changes everything. It turns abstract wellness into something concrete, trackable, and motivating. Instead of hoping your habits are working, you can see the evidence — and adjust with confidence.",
      },
      { type: "cta" },
    ],
  },
  {
    slug: "prysm-io-in-daytime-chicago",
    title: "Prysm iO in Daytime Chicago",
    excerpt:
      "The Prysm iO antioxidant scanner made an appearance on Daytime Chicago — here's what happened when people discovered their scores for the first time.",
    category: "News",
    date: "June 13, 2026",
    readTime: "1 min read",
    body: [
      {
        type: "p",
        content:
          "The Prysm iO recently featured on Daytime Chicago, giving viewers a live look at what happens when people discover their antioxidant score for the very first time.",
      },
      {
        type: "video",
        mediaId: "gsqnlrzja5",
        aspect: 1.7777777777777777,
      },
      {
        type: "p",
        content:
          "The reactions said it all. Most people assume they're doing well — eating reasonably, taking a few supplements, living an active life. But when they see their actual number, many are genuinely surprised. Some higher than expected. Many lower.",
      },
      {
        type: "p",
        content:
          "That moment of clarity is exactly what the Prysm iO is designed to create. Not to alarm — but to inform. Because when you have a real number, you can take real action.",
      },
      {
        type: "p",
        content:
          "In just 15 seconds, the Prysm iO measures skin carotenoid levels using hyperspectral technology — giving you an objective, non-invasive window into how well your body is currently defending itself against oxidative stress.",
      },
      { type: "cta" },
    ],
  },
];
