    const cards = [
      {
        topic: "Programming Basics",
        question: "Which of the following is NOT a dynamic language?",
        options: ["Java", "Perl", "PHP", "HTML"],
        answer: "HTML",
        explanation:
          "HTML is a markup language used to structure web pages, not a dynamic programming language like Java, Perl, or PHP."
      },
      {
        topic: "AIDA Model",
        question: "The AIDA model states that the process of creating a customer follows which four steps?",
        options: [
          "Awareness → Interest → Desire → Action",
          "Awareness → Intensity → Demonstration → Anticipation",
          "Anticipation → Interest → Determination → Activity",
          "Aspiration → Innovation → Desire → Activation"
        ],
        answer: "Awareness → Interest → Desire → Action",
        explanation:
          "AIDA describes the journey from first noticing a product (Awareness) through developing Interest and Desire, and finally taking Action."
      },
      {
        topic: "Successful Websites",
        question: "Which of the following is NOT an aspect of successful websites?",
        options: [
          "Generate traffic",
          "Create captivating design",
          "Drive conversions",
          "Maximize revenue"
        ],
        answer: "Maximize revenue",
        explanation:
          "Traffic, design, and conversions are website functions. Maximizing revenue is a broader business outcome, not a direct website characteristic."
      },
      {
        topic: "Social Sentiment",
        question: "Why may average social-media sentiment not reflect a company's performance?",
        options: [
          "Some industries generate a generally high level of negative posting regardless of performance",
          "Sentiment coding on social platforms is sometimes inaccurate",
          "Both some industries generate a high level of negative posting regardless of performance AND sentiment coding is sometimes inaccurate",
          "None of these are correct"
        ],
        answer:
          "Both some industries generate a high level of negative posting regardless of performance AND sentiment coding is sometimes inaccurate",
        explanation:
          "Certain industries attract more complaints by nature, and automated sentiment analysis can misclassify posts, so sentiment alone can misrepresent performance."
      },
      {
        topic: "Web Analytics",
        question: "What enables a website to recognize a computer as a return visitor?",
        options: [
          "The IP address",
          "The computer configuration",
          "A cookie",
          "The computer's physical location"
        ],
        answer: "A cookie",
        explanation:
          "Cookies are small data files stored in the browser that allow a site to recognize returning devices and restore sessions or preferences."
      },
      {
        topic: "Amazon Add-ons",
        question: "When Amazon recommends add-on products in the cart, the primary goal is to:",
        options: [
          "Increase traffic",
          "Increase the conversion rate",
          "Increase revenue"
        ],
        answer: "Increase revenue",
        explanation:
          "Cross-selling and upselling complementary products increases average order value, which directly increases revenue."
      },
      {
        topic: "Affiliate Marketing Definition",
        question: "What is affiliate marketing, according to the presenter?",
        options: [
          "A form of performance-based marketing",
          "The most popular way to sell a product",
          "A form of sales steroids",
          "The best way to grow a company"
        ],
        answer: "A form of performance-based marketing",
        explanation:
          "Affiliate marketing pays affiliates only when they generate a measurable result (sale, lead, etc.), so it is performance-based."
      },
      {
        topic: "Who Are Affiliates?",
        question: "What are affiliates?",
        options: [
          "Potential legal personnel referring buyers on your website",
          "Potential buyers of your product or service",
          "The people who refer potential buyers to your website",
          "People associated with potentially buying your product or service"
        ],
        answer: "The people who refer potential buyers to your website",
        explanation:
          "Affiliates are partners who promote your offers and send potential buyers using tracked links. They earn commission when their referrals convert."
      },
      {
        topic: "Pizza Example",
        question: "In the presenter's example, what role did the pizza place play?",
        options: [
          "The provider",
          "The affiliate",
          "The customer",
          "The merchant"
        ],
        answer: "The merchant",
        explanation:
          "The pizza shop was the business selling the product; in affiliate terms, that makes it the merchant/advertiser."
      },
      {
        topic: "Commission Models",
        question: "Which of the following is a popular commission model?",
        options: [
          "CPM (Cost Per Mille)",
          "PPCall (Pay Per Call)",
          "CPA (Cost Per Acquisition)",
          "CPI (Cost Per Install)"
        ],
        answer: "CPA (Cost Per Acquisition)",
        explanation:
          "CPA is widely used in affiliate marketing because affiliates are paid when a specific action, such as a sale or signup, occurs."
      },
      {
        topic: "Sought-After Affiliates",
        question: "Which of the following affiliates is the most sought after?",
        options: [
          "Speakers",
          "Paid-search affiliates",
          "Opinion leaders",
          "Content producers"
        ],
        answer: "Opinion leaders",
        explanation:
          "Opinion leaders (influencers, experts) have highly trusted audiences, so their recommendations convert especially well."
      },
      {
        topic: "CPS Model",
        question: "Why is the CPS (Cost Per Sale) model profitable?",
        options: [
          "You have nothing to lose because you don't pay until you get a sale",
          "You only have to pay your affiliates once per season",
          "You get paid every time an email is sent"
        ],
        answer:
          "You have nothing to lose because you don't pay until you get a sale",
        explanation:
          "With CPS, merchants only pay when revenue is actually generated, so the risk of wasted ad spend is very low."
      },
      {
        topic: "Affiliate Software vs Network",
        question: "What is the advantage of using affiliate software instead of an affiliate network?",
        options: [
          "You don't have to go find affiliates to market your product",
          "You don't have to pay a commission to an affiliate network",
          "You will have immediate access to thousands of affiliates all around the world",
          "You won't have to hire people with technical expertise to build your affiliate platform"
        ],
        answer: "You don't have to pay a commission to an affiliate network",
        explanation:
          "Running your own program with software avoids network/platform fees; you only pay commissions directly to affiliates."
      },
      {
        topic: "Executing Affiliate Programs",
        question: "Which of the following is NOT a 'must-have' when executing an affiliate program?",
        options: [
          "Affiliate agreement",
          "Affiliate manager",
          "Consistent communication with affiliates",
          "Answers to frequently asked questions"
        ],
        answer: "Affiliate manager",
        explanation:
          "A dedicated manager is helpful but not strictly required, especially for smaller programs. Clear terms, communication, and FAQ answers are essential."
      },
      {
        topic: "Steve Krug Usability",
        question: "Which of the following is NOT a principle of Steve Krug's design-for-usability paradigm?",
        options: [
          "Create effective visual hierarchies",
          "Break pages up into clearly defined areas",
          "Format content to support scanning",
          "Use complementary colors"
        ],
        answer: "Use complementary colors",
        explanation:
          "Krug emphasizes hierarchy, grouping, and scan-friendly formatting. Color harmony is a visual design concern, not one of his core usability principles."
      },
      {
        topic: "Oli Gardner – Clarity",
        question: "Oli Gardner's principle of clarity has been violated if:",
        options: [
          "A website visitor sees multiple calls to action on the same page",
          "A visitor has no idea where a link leads",
          "The website provides no reason to believe in the website's credibility",
          "A visitor converts but does not realize that he/she has completed the action"
        ],
        answer: "A visitor has no idea where a link leads",
        explanation:
          "Clarity requires that users instantly understand what will happen when they click. Ambiguous links break clarity and hurt conversions."
      },
      {
        topic: "NSAMCWADLP",
        question: "NSAMCWADLP means that whenever you create an online marketing campaign, you should also create:",
        options: [
          "A separate line in the accounting ledger to independently track revenues from the campaign",
          "A new analytics account to track the results of the campaign",
          "A new email broadcast to inform customers of the marketing campaign",
          "A dedicated landing page designed specifically for that campaign"
        ],
        answer: "A dedicated landing page designed specifically for that campaign",
        explanation:
          "The acronym is often remembered as: 'Never Start A Marketing Campaign Without A Dedicated Landing Page.'"
      },
      {
        topic: "Principles of Conversion",
        question: "Which is NOT one of the seven principles of conversion?",
        options: [
          "Context",
          "Clarity",
          "Control",
          "Congruence"
        ],
        answer: "Control",
        explanation:
          "Oli Gardner’s seven principles are Attention, Context, Clarity, Congruence, Credibility, Closing, and Continuance. Control is not one of them."
      },
      {
        topic: "Attention-Driven Design",
        question: "Which of these is NOT a principle of attention-driven design?",
        options: [
          "Alliteration",
          "Anomaly",
          "Proximity",
          "Consistency"
        ],
        answer: "Alliteration",
        explanation:
          "Attention-driven design deals with visual behaviour (anomaly, proximity, consistency). Alliteration is a writing device, not a visual design principle."
      },
      {
        topic: "Attention vs Conversion",
        question: "As attention rates go __, conversion rates go __.",
        options: [
          "Down, up",
          "Up, down"
        ],
        answer: "Up, down",
        explanation:
          "If a page demands attention for many competing elements, users get distracted from the main call-to-action, so conversions usually decrease."
      },
      {
        topic: "Principle of Context",
        question: "What does the principle 'Context' mean?",
        options: [
          "The context of the page needs a low attention ratio",
          "Designing post-click experiences that are consistent with the data or promise established prior to the click",
          "Clearly communicating your unique value proposition in your context",
          "Aligning every element on your landing page with your campaign goal"
        ],
        answer:
          "Designing post-click experiences that are consistent with the data or promise established prior to the click",
        explanation:
          "Context is about message match: the ad or link promise and the landing page must feel like one continuous experience."
      },
      {
        topic: "Copy & Design Principle",
        question: "Copy informs, not the other way around.",
        options: [
          "Design",
          "Text",
          "Knowledge",
          "Content"
        ],
        answer: "Design",
        explanation:
          "This principle means that the message (content/copy) should drive the design, not the other way around. You first decide what needs to be communicated, and then design the layout to support and enhance that message."
      },
      {
        topic: "Attention-Driven Design",
        question: "True or False: Proximity relates to Closing in that the words in close proximity of your CTA will influence the conversion.",
        options: [
          "True",
          "False"
        ],
        answer: "True",
        explanation:
          "Proximity means that elements placed close together are perceived as related. Words placed near a CTA strongly influence how users interpret the action and directly affect whether they convert."
      },
      {
        topic: "Post-Conversion Experience",
        question: "True or False: During the user's post conversion experience, you should not ask them to do something else.",
        options: [
          "True",
          "False"
        ],
        answer: "True",
        explanation:
          "After a user converts, their mental task is complete. Asking them to immediately take another action creates friction, confusion, and regret. Post-conversion should focus on confirmation, reassurance, and positive reinforcement—not new demands."
      },
      {
        topic: "Web Analytics",
        question: "An analytics package records all of the following information from visitors EXCEPT:",
        options: [
          "The timing of the visit/click",
          "Browser being used",
          "Location of the visitor",
          "Hard disk space of the computer"
        ],
        answer: "Hard disk space of the computer",
        explanation:
          "Analytics platforms can track timing, browser type, and approximate visitor location through IP data. They cannot access private hardware information like a visitor’s hard disk space due to privacy and security restrictions."
      },
      {
        question: "What is a message match fail?",
        options: [
          "When you have multiple messages in your ad",
          "When you fail to match the message in your ad with the searcher's intent",
          "When you fail at writing an awesome ad",
          "When your landing page does not match the message of your ad"
        ],
        answer: "When your landing page does not match the message of your ad",
        explanation:
          "A message match fail happens when users click an ad expecting one thing but the landing page delivers something different, breaking trust and hurting conversions."
      },
      {
        question:
          "True or False: The third principle of clarity is clearly communicating your unique campaign proposition so users understand what the page is about.",
        options: ["True", "False"],
        answer: "True",
        explanation:
          "The third clarity principle ensures users instantly understand the page’s purpose and value."
      },
      {
        question: "What is Information Hierarchy?",
        options: [
          "The most important information must be bolded",
          "The order of the information on the landing page",
          "Aligning every element with the campaign goal",
          "Only important people can write website information"
        ],
        answer: "The order of the information on the landing page",
        explanation:
          "Information hierarchy controls how users visually and mentally process content in priority order."
      },
      {
        question:
          "True or False: Proximity relates to closing in that words near a CTA influence conversions.",
        options: ["True", "False"],
        answer: "True",
        explanation:
          "Text placed near a CTA strongly affects user behavior and decision-making."
      },
      {
        question:
          "True or False: During post-conversion, you should not ask users to do something else.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Asking for additional actions during post-conversion reduces completion confidence."
      },
      {
        question: "An analytics package records all of the following EXCEPT:",
        options: [
          "Timing of the visit/click",
          "Browser being used",
          "Location of the visitor",
          "Hard disk space of the computer"
        ],
        answer: "Hard disk space of the computer",
        explanation:
          "Analytics tools track user behavior and context, not private hardware storage."
      },
      {
        question: "Analysis paralysis occurs when:",
        options: [
          "The sheer volume of data overwhelms a manager and causes inaction",
          "A manager makes too many good inferences",
          "An analyst goes on vacation",
          "An analytics package is improperly installed"
        ],
        answer: "The sheer volume of data overwhelms a manager and causes inaction",
        explanation: "Too much data without clarity prevents decision-making."
      },
      {
        question: "Which is higher: the site bounce rate or the homepage bounce rate?",
        options: ["The site bounce rate", "The homepage bounce rate"],
        answer: "The site bounce rate",
        explanation: "The site includes bounces from all pages, making it typically higher."
      },
      {
        question: "What is the site bounce rate?",
        options: ["40%", "30%", "20%", "50%"],
        answer: "40%",
        explanation: "200 total bounces out of 500 sessions equals 40%."
      },
      {
        question:
          "Were 2,000 paid sessions profitable with $20,000 in revenue and $10,000 in ad cost?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "Revenue exceeded the advertising cost, making the campaign profitable."
      },
      {
        question: "What is the conversion rate and close rate?",
        options: ["8%; 25%", "8%; 20%"],
        answer: "8%; 25%",
        explanation:
          "80 leads from 1,000 visitors = 8% conversion. 20 bookings from 80 leads = 25% close."
      },
      {
        question: "A low conversion rate can be caused by all EXCEPT:",
        options: [
          "Poor web design",
          "Poor audience selection",
          "Technical glitches",
          "Overly responsive design"
        ],
        answer: "Overly responsive design",
        explanation: "Responsive design improves performance, not reduces it."
      },
      {
        question: "Channel analysis allows:",
        options: [
          "Best ad copy identification",
          "Best traffic quality investigation",
          "Counterfactual prediction",
          "Shifting paid to unpaid traffic"
        ],
        answer: "Best traffic quality investigation",
        explanation: "Channel analysis compares performance across acquisition sources."
      },
      {
        question: "The most reliable way to measure advertising effectiveness is:",
        options: [
          "Stop advertising",
          "Google data-driven attribution",
          "Linear attribution",
          "Conduct a controlled experiment"
        ],
        answer: "Conduct a controlled experiment",
        explanation: "Only controlled tests accurately isolate ad impact."
      },
      {
        question: "Organic search results are displayed:",
        options: [
          "On page 2",
          "At the top of the SERP",
          "Below the paid ads",
          "Interspersed with sponsored ads"
        ],
        answer: "Below the paid ads",
        explanation: "Paid results are always placed above organic listings."
      },
      {
        question: "For a search engine, relevance refers to:",
        options: [
          "Content matching query",
          "User visit history",
          "Website traffic volume",
          "Internal page links"
        ],
        answer: "Content matching query",
        explanation: "Relevance measures content alignment with user intent."
      },
      {
        question: "Best SEO-friendly maternity URL:",
        options: [
          "https://jane.com/category5",
          "https://maternity.jane.com/",
          "https://jane.maternity.com/",
          "https://jane.com/maternity"
        ],
        answer: "https://jane.com/maternity",
        explanation: "Clean, keyword-rich directories are best for SEO."
      },
      {
        question: "Including 'maternity' in image alt tags also helps because:",
        options: [
          "Better organization",
          "Improved image search rankings",
          "Other categories rank better",
          "Product pages auto-optimize"
        ],
        answer: "Improved image search rankings",
        explanation: "Alt text directly supports Google Image Search visibility."
      },
      {
        question: "A highly relevant keyword may not be worth targeting if:",
        options: [
          "It is long",
          "It has no traffic",
          "It has synonyms",
          "It is often misspelled"
        ],
        answer: "It has no traffic",
        explanation: "No traffic means no opportunity for growth."
      },
      {
        question: "Long tail keywords are:",
        options: [
          "Lower volume than fat-head keywords",
          "Low-conversion keywords",
          "Mobile-only searches",
          "Niche category searches"
        ],
        answer: "Lower volume than fat-head keywords",
        explanation: "They are more specific with less competition."
      },
      {
        question: "Which keyword to optimize first: ranks 1, 9, 98, 112?",
        options: ["#1", "#9", "#98", "#112"],
        answer: "#9",
        explanation: "Small improvements near page one yield the biggest wins."
      },
      {
        question: "The benefit of keyword mapping is:",
        options: [
          "Correct page ranking",
          "SEO organization",
          "Avoiding keyword cannibalization",
          "All of these"
        ],
        answer: "All of these",
        explanation: "Keyword mapping improves SEO clarity and performance."
      },
      {
        question: "Why is a high bounce rate bad?",
        options: [
          "Wastes server bandwidth",
          "Indicates click fraud",
          "Indicates user dissatisfaction",
          "Means low conversion ranking"
        ],
        answer: "Indicates user dissatisfaction",
        explanation: "Users leave because expectations were not met."
      },
      {
        question: "First step for local SEO is:",
        options: [
          "Register with Google My Business",
          "Ask for Yelp reviews",
          "Start paid ads",
          "Rename company"
        ],
        answer: "Register with Google My Business",
        explanation: "Local visibility depends on verified business listings."
      },
      {
        question: "What is anchor text?",
        options: ["<a href>", "\"http://jane.com\"", "Fashion deals", "</a>"],
        answer: "Fashion deals",
        explanation: "Anchor text is the clickable descriptive text."
      },
      {
        question: "How does search treat a nofollow link?",
        options: [
          "Opens new tab",
          "No authority passed",
          "Image link",
          "Unsecured link"
        ],
        answer: "No authority passed",
        explanation: "Nofollow prevents ranking power from transferring."
      },
      {
        question: "How do category page backlinks affect homepage?",
        options: ["Damage", "No effect", "Improve", "Impact only red widgets"],
        answer: "Improve",
        explanation: "Authority flows through internal linking."
      },
      {
        question: "Which site ranks higher with newer backlinks?",
        options: ["Website A", "Website B", "Random", "Legacy dominance"],
        answer: "Website B",
        explanation: "Fresh links weigh more in modern SEO."
      },
      {
        question: "Why is link diversity important?",
        options: [
          "Higher link diversity",
          "Social sharing",
          "Black-hat signal",
          "Only one link counts"
        ],
        answer: "Higher link diversity",
        explanation: "Search engines value varied domains over repeated sources."
      },
      {
        question: "An editorial link is:",
        options: [
          "Newspaper editor link",
          "Directory submission",
          "Quid pro quo",
          "Voluntary link from another site"
        ],
        answer: "Voluntary link from another site",
        explanation: "Editorial links are earned naturally through content value."
      },
      {
        question: "Press release links are considered:",
        options: [
          "Editorial links",
          "Manual links",
          "Manufactured links",
          "Nofollow links"
        ],
        answer: "Editorial links",
        explanation: "They result from independent editorial decisions."
      },
      {
        question:
          "A lead generation website received 1,000 visitors, gained 80 leads, and booked jobs with 20 of those leads. What is the conversion rate and what is the close rate?",
        options: ["8%; 25%", "8%; 20%", "10%; 20%", "20%; 8%"],
        answer: "8%; 25%",
        explanation: "Conversion rate = 80 ÷ 1000 = 8%. Close rate = 20 ÷ 80 = 25%."
      },
      {
        question: "A low conversion rate can be caused by all of the following EXCEPT:",
        options: ["Poor web design", "Poor audience selection", "Technical glitches", "Overly responsive design"],
        answer: "Overly responsive design",
        explanation: "Responsive design improves usability and typically increases conversions."
      },
      {
        question: "Channel analysis enables an analytics user to:",
        options: [
          "Determine which ad copy produced the highest click-through rate",
          "Investigate which traffic source produced the best-quality traffic",
          "Conduct counterfactual analyses of increased marketing investment",
          "Find ways to shift paid traffic to unpaid traffic"
        ],
        answer: "Investigate which traffic source produced the best-quality traffic",
        explanation: "Channel analysis focuses on comparing traffic sources and their performance."
      },
      {
        question: "The most reliable way to measure advertising effectiveness is to:",
        options: [
          "Stop advertising altogether",
          "Use Google’s data-driven attribution tool",
          "Use linear attribution",
          "Conduct a carefully controlled experiment"
        ],
        answer: "Conduct a carefully controlled experiment",
        explanation: "Controlled experiments isolate cause and effect."
      },
      {
        question: "Organic search results are typically displayed:",
        options: ["On page 2", "At the top of the SERP", "Below the paid ads", "Interspersed with paid ads"],
        answer: "Below the paid ads",
        explanation: "Paid ads appear first; organic listings appear underneath."
      },
      {
        question: 'For a search engine, "relevance" refers to:',
        options: [
          "The extent to which a web page's content matches the searcher's query",
          "Whether a website has been visited before",
          "The traffic level of the website",
          "How many pages on the website link internally"
        ],
        answer: "The extent to which a web page's content matches the searcher's query",
        explanation: "Relevance measures how well content matches user intent."
      },
      {
        question: "Jane.com sells clothing and accessories. Which URL should the maternity category page use?",
        options: [
          "https://jane.com/category5",
          "https://maternity.jane.com/",
          "https://jane.maternity.com/",
          "https://jane.com/maternity"
        ],
        answer: "https://jane.com/maternity",
        explanation: "Best SEO practice is to use descriptive subfolders."
      },
      {
        question:
          'Including the word "maternity" in alt text and file names improves relevance. What other benefit can result?',
        options: [
          "The website will be better organized",
          "Images are more likely to appear in image search",
          "Other categories rank better",
          "Products are automatically optimized"
        ],
        answer: "Images are more likely to appear in image search",
        explanation: "Alt text is used in image search rankings."
      },
      {
        question: "Even a highly relevant keyword may not be worth pursuing in SEO if:",
        options: [
          "The keyword is too long",
          "The keyword has no traffic",
          "The keyword is synonymous",
          "The keyword is often misspelled"
        ],
        answer: "The keyword has no traffic",
        explanation: "No traffic means no potential audience."
      },
      {
        question: '"Long tail keywords" are:',
        options: [
          "Lower volume than fat head keywords",
          "Low conversion terms",
          "Mobile-only searches",
          "Niche product searches"
        ],
        answer: "Lower volume than fat head keywords",
        explanation: "They are longer, more specific, and lower volume."
      },
      {
        question: "If your website ranks 1, 9, 98, and 112, which keyword should you target first?",
        options: [
          "#1 ranking",
          "#9 ranking",
          "#98 ranking",
          "#112 ranking"
        ],
        answer: "#9 ranking",
        explanation: "Page one rankings deliver the fastest gains with minimal effort."
      },
      {
        question: "Why is a high bounce rate a negative quality signal?",
        options: [
          "It wastes server bandwidth",
          "It indicates click fraud",
          "The user did not like or find what they wanted",
          "It lowers conversion rate directly"
        ],
        answer: "The user did not like or find what they wanted",
        explanation: "Users leaving quickly signals poor content match."
      },
      {
        question: "A company wishing to rank for local searches should first:",
        options: [
          "Register on Google My Business",
          "Ask for Yelp reviews",
          "Start advertising",
          "Change business name"
        ],
        answer: "Register on Google My Business",
        explanation: "Google Business Profile is required for local SEO."
      },
      {
        question: "What is the anchor text of this link: Fashion deals?",
        options: ["<a href>", "http://jane.com", "Fashion deals", "</a>"],
        answer: "Fashion deals",
        explanation: "Anchor text is the clickable text in a hyperlink."
      },
      {
        question: "How will this link be treated differently by search engines?",
        options: [
          "It opens a new window",
          "It will not pass link authority",
          "It will be treated as an image",
          "It will be unsecured"
        ],
        answer: "It will not pass link authority",
        explanation: "This implies a nofollow link."
      },
      {
        question: "100 links are earned to a category page but none to homepage. Effect?",
        options: [
          "Homepage rankings drop",
          "No effect on homepage",
          "Homepage rankings improve",
          "Homepage improves only for red widgets"
        ],
        answer: "Homepage rankings improve",
        explanation: "Link authority flows internally via site structure."
      },
      {
        question: "Two competing sites have equal links. Which ranks higher today?",
        options: [
          "Website A (earlier links)",
          "Website B (fresh links)",
          "They rank equally",
          "Website A due to legacy"
        ],
        answer: "Website B (fresh links)",
        explanation: "Link freshness is a ranking factor."
      },
      {
        question: "Why is 100 links from 10 websites better than 100 from one?",
        options: [
          "Higher link diversity",
          "More social sharing",
          "Many same-site links is black-hat",
          "Only one link is counted"
        ],
        answer: "Higher link diversity",
        explanation: "More unique referring domains improves authority."
      },
      {
        question: "Writing a guest blog post with your own links provides:",
        options: [
          "Editorial links",
          "Manual links",
          "Manufactured links",
          "Nofollow links"
        ],
        answer: "Manual links",
        explanation: "You manually place the links during guest posting."
      },
      {
        question: "Content marketing differs from advertising in that:",
        options: [
          "It is illegal to pay for distribution of content marketing",
          "Content marketing is meant to entice readership/viewership on its own merits",
          "Advertising content requires more time and energy to create",
          "Content marketing cannot contain calls to action"
        ],
        answer: "Content marketing is meant to entice readership/viewership on its own merits",
        explanation:
          "Content marketing focuses on providing value that naturally attracts an audience, rather than directly paying for exposure like traditional advertising."
      },
      {
        question:
          "A major advantage of creating content specifically with the goal of ranking well for a popular search phrase is that:",
        options: [
          "The content is not likely to have any competition",
          "Earning high organic rankings typically happens instantaneously",
          "A high conversion rate is almost guaranteed from search engine traffic",
          "The content will have built-in distribution"
        ],
        answer: "The content will have built-in distribution",
        explanation:
          "Ranking for a popular search phrase gives the content automatic exposure to people already searching for that topic."
      },
      {
        question: "Which of the following is NOT a match type for selecting search ad targets?",
        options: ["Precise match", "Phrase match", "Broad match", "Exact match"],
        answer: "Precise match",
        explanation: "Google Ads supports broad, phrase, and exact match types; precise match is not valid."
      },
      {
        question: "Were the 2,000 paid sessions profitable?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "$20,000 revenue minus $10,000 ad cost leaves $10,000 profit."
      },
      {
        question: "A keyword may not be worth pursuing if:",
        options: ["Too long", "Has no traffic", "Is synonymous", "Often misspelled"],
        answer: "Has no traffic",
        explanation: "No search volume means no opportunity to gain visitors."
      },
      {
        question: '"Long tail keywords" are:',
        options: ["Lower volume terms", "Low conversion terms", "Mobile searches", "Niche product terms"],
        answer: "Lower volume terms",
        explanation: "They are specific, lower-volume queries."
      },
      {
        question: "Which SEO rank should you target first?",
        options: ["#1", "#9", "#98", "#112"],
        answer: "#9",
        explanation: "Small gains near page one yield the fastest traffic improvements."
      },
      {
        question: "Why is a high bounce-back rate bad?",
        options: ["Wastes bandwidth", "Indicates click fraud", "User didn't like content", "Low conversion"],
        answer: "User didn't like content",
        explanation: "A bounce suggests the page failed to meet user expectations."
      },
      {
        question: "To rank for local searches, a company should first:",
        options: ["Register with Google My Business", "Ask for Yelp reviews", "Run ads", "Rename business"],
        answer: "Register with Google My Business",
        explanation: "Verification in Google Business Profile is foundational for local SEO visibility."
      },
      {
        question: "How will 100 links to blue widgets affect homepage ranking?",
        options: ["Damage rankings", "No effect", "Improve rankings", "Help red but hurt yellow"],
        answer: "Improve rankings",
        explanation: "Authority gained on category pages can flow to the homepage via internal links."
      },
      {
        question: "Which site ranks higher with fresher links?",
        options: ["Website A", "Website B", "Random", "Legacy ranking"],
        answer: "Website B",
        explanation: "Link freshness is a ranking signal that favors newer links."
      },
      {
        question: "Why are links from 10 different sites better than 100 from one?",
        options: ["Higher link diversity", "More social", "Black-hat signal", "Only one counted"],
        answer: "Higher link diversity",
        explanation: "Search engines value varied referring domains more than many links from one site."
      },
      {
        question: "Guest blogging backlinks are:",
        options: ["Editorial", "Manual", "Manufactured", "Nofollow"],
        answer: "Manual",
        explanation: "You intentionally place these links in your contributed posts."
      },
      {
        question: "Content marketing differs from advertising because:",
        options: [
          "It is illegal to distribute content",
          "It attracts users on its own value",
          "It takes more time than ads",
          "It cannot have calls to action"
        ],
        answer: "It attracts users on its own value",
        explanation: "Content marketing pulls audiences in with useful material rather than interrupting them."
      },
      {
        question: "SEO-focused content has a major advantage because:",
        options: [
          "It has no competition",
          "It ranks instantly",
          "It guarantees conversions",
          "It has built-in distribution"
        ],
        answer: "It has built-in distribution",
        explanation: "Search demand supplies ongoing traffic without paid promotion once you rank."
      },
      {
        question: "Which is NOT a Google Ads keyword match type?",
        options: ["Precise match", "Phrase match", "Broad match", "Exact match"],
        answer: "Precise match",
        explanation: "Google offers exact, phrase, and broad match options."
      },
      {
        question: "Which match type is the middle ground?",
        options: ["Exact match", "Precise match", "Broad match", "Phrase match"],
        answer: "Phrase match",
        explanation: "Phrase match sits between exact and broad in reach and control."
      },
      {
        question: "To prevent the word 'cheap' from triggering ads, an advertiser should:",
        options: [
          "Add it as a negative keyword",
          "Use only exact match",
          "Switch phrase to broad match",
          "Change exact to phrase match"
        ],
        answer: "Add it as a negative keyword",
        explanation: "Negative keywords block ads from showing on unwanted queries."
      },
      {
        question: "Why were eBay brand ads unprofitable?",
        options: [
          "Low ROAS",
          "Users clicked organic results",
          "Brand keywords are expensive",
          "Ads generated no clicks"
        ],
        answer: "Users clicked organic results",
        explanation:
          "Most paid clicks on brand terms would have been free organic clicks, so ad spend was wasted."
      },
      {
        question: "Why is the final URL the most important part of a search ad?",
        options: [
          "It is bolded",
          "It determines Quality Score alone",
          "If wrong, users can't reach site",
          "It takes the most space"
        ],
        answer: "If wrong, users can't reach site",
        explanation: "A bad final URL breaks the user journey regardless of ad copy quality."
      },
      {
        question: "Which is NOT recommended in a search ad?",
        options: ["Reference to competitors", "Keywords", "Unique value proposition", "Call to action"],
        answer: "Reference to competitors",
        explanation: "Search ads should highlight your offer and CTA, not competitors."
      },
      {
        question: "With 5 responsive ad headlines, what shows?",
        options: [
          "Subset rotates dynamically",
          "Only first two",
          "Only first three sometimes",
          "Only best written"
        ],
        answer: "Subset rotates dynamically",
        explanation: "Responsive search ads mix and match provided headlines to optimize performance."
      },
      {
        question: "Which is NOT part of Quality Score?",
        options: ["Expected CTR", "Ad relevance", "Landing page experience", "Organic ranking"],
        answer: "Organic ranking",
        explanation: "Quality Score uses expected CTR, ad relevance, and landing page experience."
      },
      {
        question: "ROAS cannot be calculated unless:",
        options: [
          "Conversion tracking is connected",
          "Minimum $250 weekly spend",
          "50 monthly conversions",
          "6 months of account history"
        ],
        answer: "Conversion tracking is connected",
        explanation: "Return on ad spend needs revenue data from properly connected conversion tracking."
      },
      {
        question: "Where are location, bidding, budget, and extensions set?",
        options: ["Campaign level", "Ad group level", "Ad level", "Keyword level"],
        answer: "Campaign level",
        explanation: "Targeting, bids, budgets, and extensions are configured at the campaign level."
      },
      {
        question:
          "Return on Advertising Spend (ROAS) cannot be calculated within a Google Ads account unless:",
        options: [
          "Conversion tracking is set up properly in analytics (or Tag Manager) and connected to the Google Ads account",
          "The advertiser spends a minimum of $250 per week on search ads",
          "The advertiser has achieved at least 50 conversions within the past month",
          "The advertiser has a six month history with Google Ads"
        ],
        answer:
          "Conversion tracking is set up properly in analytics (or Tag Manager) and connected to the Google Ads account",
        explanation:
          "ROAS requires revenue data from conversions; without tracking connected to Google Ads it cannot be computed."
      },
      {
        question:
          "An ad's location, bid strategy, daily budget, ad extensions, and more are all determined at what level within the Google Ads account?",
        options: ["The campaign level", "The ad group level", "The ad level", "The keyword level"],
        answer: "The campaign level",
        explanation:
          "Settings like location targeting, bidding strategy, budgets, and extensions are configured per campaign."
      },
      {
        question: "Advertisers on a display network can pay through each of the following methods EXCEPT:",
        options: ["CPM (cost per mille)", "CPC (cost per click)", "CPA (cost per action)", "Flat fee"],
        answer: "Flat fee",
        explanation: "Standard display platforms support CPM, CPC, and CPA pricing but not flat fees."
      },
      {
        question: "Which of the following is NOT a targeting method available on the Google Display Ad Network?",
        options: ["Demographics", "Affinity", "Life events", "Past visits to competitors' websites"],
        answer: "Past visits to competitors' websites",
        explanation:
          "You can target demographics, affinity, and life events, but not visits to specific competitor sites."
      },
      {
        question:
          'A website that sells high-end ties notices that its ads are showing up for searches that include "cheap." Because its ties are expensive, it does not want its ads to show up for searchers using the word "cheap." What should this advertiser do?',
        options: [
          "Add the word 'cheap' to its negative keyword list",
          "Use only exact match in its keyword lists",
          "Change any phrase match keywords to broad match keywords",
          "Change exact match keywords to phrase match keywords"
        ],
        answer: "Add the word 'cheap' to its negative keyword list",
        explanation:
          "Adding 'cheap' as a negative keyword prevents the ads from showing on queries containing that term."
      },
      {
        question:
          "An experiment at eBay showed that advertising on brand keywords (searches that included 'eBay') were not profitable because:",
        options: [
          "eBay's analytics showed that the ROAS was low",
          "Searchers clicked the organic listing when the advertised listing was not available",
          "Brand keywords are especially expensive on search engines",
          "Search advertisements generated almost no clicks"
        ],
        answer: "Searchers clicked the organic listing when the advertised listing was not available",
        explanation:
          "Most branded paid clicks would have gone to eBay organically, so the ads paid for traffic they would have received anyway."
      },
      {
        question: "In what way is the final URL the most important part of a search ad?",
        options: [
          "The final URL is bolded for users, so it most readily entices a click",
          "Quality score is calculated based exclusively on the final URL",
          "If the final URL is wrong, searchers cannot reach the website properly",
          "As the longest part of the search ad, it takes up the most space"
        ],
        answer: "If the final URL is wrong, searchers cannot reach the website properly",
        explanation:
          "A broken or incorrect final URL prevents users from reaching the intended page, nullifying the ad."
      },
      {
        question: "Which of the following is NOT recommended to be shown in a search ad?",
        options: ["Reference to competitors", "Keywords", "Unique value proposition", "Call to action"],
        answer: "Reference to competitors",
        explanation:
          "Search ads should highlight your value, relevant keywords, and a clear CTA, not competitor mentions."
      },
      {
        question: "If I write five headlines for a Responsive search ad, which headlines will show up in the ad?",
        options: [
          "Every ad impression will include a subset of the headlines, but all five headlines will be selected from",
          "Only the first two headlines",
          "Sometimes the first two headlines will be displayed and sometimes the first three headlines will be displayed",
          "Only the best-written headlines will be shown"
        ],
        answer:
          "Every ad impression will include a subset of the headlines, but all five headlines will be selected from",
        explanation:
          "Responsive search ads rotate subsets of the provided headlines and optimize combinations over time."
      },
      {
        question: "Which of the following is NOT used when calculating an ad's Quality Score?",
        options: ["Expected CTR", "Ad relevance", "Landing page experience", "Organic search ranking"],
        answer: "Organic search ranking",
        explanation: "Quality Score excludes organic rank; it uses expected CTR, relevance, and landing page experience."
      },
      {
        question:
          "A website that sells suits has created two custom segments: one called 'Working Professionals' and another called 'Luxury.' It would like to execute an advertising campaign targeted to people who belong to BOTH segments. How can it accomplish this?",
        options: [
          "Create a third custom audience that includes all of the target segments from both custom segments",
          "Create a combined audience with the OR specification",
          "Create a combined audience with the AND specification",
          "Create a combined audience with the NOT specification"
        ],
        answer: "Create a combined audience with the AND specification",
        explanation: "Using the AND rule shows ads only to users who are in both custom segments simultaneously."
      },
      {
        question:
          "A furniture seller believes that people who have just moved are more likely to need new furniture. What targeting dimension should this furniture seller use for their ad campaign?",
        options: ["Demographics", "Life events", "Custom audience", "Combined audience segment"],
        answer: "Life events",
        explanation: "Life events targeting reaches users during milestones like moving."
      },
      {
        question:
          "An advertiser bids $10 CPM, achieves a 1% CTR, and achieves a 5% conversion rate. What would an equivalent CPA bid for this advertiser be?",
        options: ["$10", "$20", "$100", "$200"],
        answer: "$20",
        explanation:
          "$10 CPM buys 1,000 impressions; 1% CTR yields 10 clicks; 5% CVR yields 0.5 conversions, so CPA = $10 / 0.5 = $20."
      },
      {
        question: "Good display ad copy does everything EXCEPT:",
        options: [
          "Attract attention",
          "Communicate a value proposition",
          "Invite action",
          "Pre-convert the consumer"
        ],
        answer: "Pre-convert the consumer",
        explanation:
          "Display ads introduce, attract, and encourage action, but conversion should happen on the landing page."
      },
      {
        question:
          "To determine whether a new ad copy is better at attracting attention, an advertiser should conduct an A/B test and measure:",
        options: [
          "the click-through rate",
          "the conversion rate",
          "the impression volume",
          "the ROAS"
        ],
        answer: "the click-through rate",
        explanation:
          "Click-through rate (CTR) directly measures how effectively an ad attracts attention and motivates users to click."
      },
      {
        question:
          "When a consumer clicks on a display ad, the landing page should match the ad's:",
        options: [
          "Value proposition",
          "Color scheme",
          "Imagery",
          "All of these are correct"
        ],
        answer: "All of these are correct",
        explanation:
          "For the best user experience and higher conversion rates, the landing page should align with the ad’s message, visual style, and imagery to ensure consistency and trust."
      },
      {
        question: "Retail websites can most advisedly grow their email list by:",
        options: [
          "Automatically putting all customers on the broadcast email list",
          "Allowing customers to sign up for the email list during the checkout procedure",
          "Putting an email sign-up pop-up advertisement on every page of the website",
          "Requiring an email sign-up before allowing customers to shop on the site"
        ],
        answer: "Allowing customers to sign up for the email list during the checkout procedure",
        explanation:
          "Opt-in during checkout is effective and ethical because customers are engaged and consent is explicit."
      },
      {
        question: "The primary advantage of a short email sign-up form is that:",
        options: [
          "Only customers with serious interest are likely to sign up",
          "It attracts a higher volume of sign-ups than a longer form",
          "The company will have more information about customers to enable improved email content targeting",
          "Marketing automation is only possible with short email forms"
        ],
        answer: "It attracts a higher volume of sign-ups than a longer form",
        explanation:
          "Shorter forms reduce friction and effort for users, which increases the likelihood that more people will complete the sign-up process."
      },
      {
        question: "A B2B services company is likely to use email marketing to:",
        options: [
          "Drive immediate conversions",
          "Pursue corporate recruiting",
          "Broadcast messages to its employees",
          "Engage in lead nurturing"
        ],
        answer: "Engage in lead nurturing",
        explanation:
          "B2B cycles are long and complex, so email is best used to educate, build trust, and nurture leads over time."
      },
      {
        question: "Email marketing can be especially effective for a search engine like Kayak or Expedia because:",
        options: [
          "It typically has information about deals that might interest its customers",
          "Search engines are not allowed to utilize other marketing channels",
          "Search engines typically generate no other form of direct traffic",
          "People cannot put emails from search engines in a separate commercial folder within their email account"
        ],
        answer: "It typically has information about deals that might interest its customers",
        explanation:
          "Travel search engines constantly collect price and route data, letting them send timely, relevant deal emails aligned to user interests."
      },
      {
        question: "Email marketers can target different segments by:",
        options: [
          "Sending emails only to specific segments of the email list",
          "Changing portions of content for each segment within an email",
          "Both sending emails only to specific segments of the email list AND changing portions of content for each segment within an email",
          "None of these are correct"
        ],
        answer:
          "Both sending emails only to specific segments of the email list AND changing portions of content for each segment within an email",
        explanation:
          "Email segmentation allows marketers to target groups either by sending to certain segments or by dynamically changing content for different segments."
      },
      {
        question:
          "A company sends out a broadcast email to its entire email list informing the list about Black Friday deals. At 6:00 pm on Black Friday, the company sends out an email only to members of its email list that (1) clicked on the previous email and (2) did not make a purchase. This second email is an example of:",
        options: ["A broadcast email", "A transactional email", "A triggered email", "An onboarding email"],
        answer: "A triggered email",
        explanation:
          "The second email fires based on specific user behavior—clicked but did not purchase—so it is a triggered email."
      },
      {
        question: "To determine the winner of an A/B test on a subject line, an email marketer should use:",
        options: ["The open rate", "The click-through rate", "The conversion rate", "The churn rate"],
        answer: "The open rate",
        explanation:
          "Subject lines primarily influence opens, so open rate is the right metric to evaluate subject line tests."
      },
      {
        question:
          "Why should email marketers remove from their email list any consumers who have not opened an email for several months?",
        options: [
          "Including these recipients drives down email metrics and makes the email marketer look bad",
          "Only recipients who have made a purchase within the last month have any chance of ever purchasing again",
          "Including these recipients puts the company at risk of being blocked by spam filters",
          "Large databases are difficult to manage, so a company should try to keep email lists as small as possible"
        ],
        answer: "Including these recipients puts the company at risk of being blocked by spam filters",
        explanation:
          "Continuing to email inactive recipients hurts engagement rates and sender reputation, increasing spam filtering risk."
      },
      {
        question:
          "After a B2B services company closes a deal with Company X, email marketing may still be useful for purposes of:",
        options: [
          "Training the employees within Company X",
          "Nurturing leads from Company X",
          "Generating leads from Company X",
          "Qualifying leads from Company X"
        ],
        answer: "Training the employees within Company X",
        explanation:
          "Post-sale, email is useful for onboarding, training, and support; lead generation and qualification are no longer needed for that customer."
      },
      {
        question:
          "If an email marketer has a good email list and lots of information about the users on this list, marketing automation would be useful for:",
        options: [
          "Revamping the segmentation system",
          "Automatically creating new content for emails",
          "Creating new onboarding email copy",
          "Targeting emails to the right users based on their ongoing behavior"
        ],
        answer: "Targeting emails to the right users based on their ongoing behavior",
        explanation:
          "Marketing automation leverages behavioral data to trigger and target messages; it doesn’t write the content or rebuild segmentation on its own."
      },
      {
        question: "Posting on a company's social media profiles can improve company profit by:",
        options: [
          "Facilitating purchases from first-time customers",
          "Increasing loyalty of past and current customers",
          "Improving SEO and thereby facilitating first-time customer purchases",
          "All of these are correct"
        ],
        answer: "All of these are correct",
        explanation:
          "Social media can attract new customers, nurture loyalty with existing ones, and bolster SEO visibility—all of which contribute to profit."
      },
      {
        question: "What advantage does a social network have over a display network for paid advertising?",
        options: [
          "Social media networks typically have more intimate knowledge of their users' interests",
          "Ads on social media command more attention than banner ads on a display network",
          "Ads on social media provide a great number of engagement options",
          "All of these are correct"
        ],
        answer: "All of these are correct",
        explanation:
          "Social networks combine detailed user data, higher attention levels, and multiple engagement formats, making them powerful for paid campaigns."
      },
      {
        question:
          "Social listening usually entails (1) scraping all public mentions of a company on social media, (2) coding those mentions as positive, negative, or neutral, and (3):",
        options: [
          "Monetizing this information",
          "Summarizing average sentiment about the company",
          "Responding to all social media statements with a form letter",
          "Making excuses for negative statements"
        ],
        answer: "Summarizing average sentiment about the company",
        explanation:
          "Social listening aggregates and codes mentions to report on overall sentiment; it is not about monetization or automated responses."
      },
      {
        question: "Which of the following steps is NOT a part of the social media plan?",
        options: [
          "Register the company on all social platforms",
          "Determine the objective",
          "Plan the content",
          "Measure success"
        ],
        answer: "Register the company on all social platforms",
        explanation:
          "A sound social plan sets objectives, plans content, and measures results; registering everywhere is not required."
      },
      {
        question: "Instagram can be a top social platform for generating first-time customers because:",
        options: [
          "Posts from corporate entities are not handicapped heavily on Instagram",
          "Companies can use Instagram influencers to reach potential customers",
          "Both posts from corporate entities are not handicapped heavily on Instagram AND companies can use Instagram influencers to reach potential customers",
          "None of these are correct"
        ],
        answer:
          "Both posts from corporate entities are not handicapped heavily on Instagram AND companies can use Instagram influencers to reach potential customers",
        explanation:
          "Instagram still offers organic brand reach and robust influencer partnerships, making it strong for acquiring new customers."
      },
      {
        question: "Curated social media content refers to content that:",
        options: [
          "Is created by a company for its own social media profiles",
          "Is created by two or more companies in a partnership",
          "Is collected from a variety of other content creators",
          "Was first posted more than one year earlier and is being posted a second time"
        ],
        answer: "Is collected from a variety of other content creators",
        explanation:
          "Curated content is sourced from other creators and shared with your audience, rather than produced by the brand itself."
      },
      {
        question: "Creating a post with a discount for a product is an example of providing:",
        options: [
          "Utilitarian value",
          "Entertainment value",
          "Social value",
          "Identity value"
        ],
        answer: "Utilitarian value",
        explanation:
          "A discount delivers practical, functional benefit to the audience, which is utilitarian value."
      },
      {
        question: "Why is the engagement of social media followers more important than the number of followers?",
        options: [
          "Seeing a company's posts cannot positively affect customers unless they also click the Like button",
          "Most social media platforms do not show company content to followers who are not highly engaged",
          "Having a large number of unengaged followers decreases SEO rankings",
          "Having a large number of unengaged followers suppresses earned media"
        ],
        answer: "Most social media platforms do not show company content to followers who are not highly engaged",
        explanation:
          "Platforms prioritize showing content to users who interact; engagement drives reach far more than raw follower counts."
      },
      {
        question:
          "If a company's social media followers exhibit greater purchase frequency than non-followers, this could be a sign that the company's social media efforts are producing good results. Alternately, it may only reflect the fact that:",
        options: [
          "More loyal customers are more likely to follow the company on social media",
          "The company's analytics are not properly installed",
          "The social media platform is exaggerating its own performance",
          "The indirect effect of social media is more dramatic than the direct effect"
        ],
        answer: "More loyal customers are more likely to follow the company on social media",
        explanation:
          "Existing loyal customers are more inclined to follow the brand, so higher purchase frequency among followers can be correlation, not causation."
      },
      {
        question:
          "In addition to posts from friends and paid-for advertisements, what other two types of content are found in a Facebook News Feed (though with much lower frequency)?",
        options: [
          "Posts from Liked pages and actions from friends",
          "News articles and event notices",
          "Live video and pre-recorded video",
          "Mobile application download suggestions and financial advice"
        ],
        answer: "Posts from Liked pages and actions from friends",
        explanation:
          "Facebook occasionally shows posts from pages a user has liked and activities their friends have taken, alongside friend posts and paid ads."
      },
      {
        question: "In the original EdgeRank formula, affinity score referred to:",
        options: [
          "Users' tendency to watch videos or like image posts",
          "Users' frequency of logging in to Facebook",
          "Users' liking of public versus private posts",
          "Users' liking of the friend or page making the post"
        ],
        answer: "Users' liking of the friend or page making the post",
        explanation:
          "EdgeRank affinity measured how connected a user was to the friend or page posting the content."
      },
      {
        question: "On Facebook, custom audiences allows advertisers to:",
        options: [
          "Create target audiences from the typical targeting methods and then save these audiences as a custom audience",
          "Use demographics in combination with interests to customize their audience targeting",
          "Customize the ad content to match each user's interests",
          "Upload email addresses of current customers and target users with similar characteristics"
        ],
        answer: "Upload email addresses of current customers and target users with similar characteristics",
        explanation:
          "Custom Audiences are built by uploading customer data (emails, phone numbers, site visitors) so you can target them or lookalike audiences."
      },
      {
        question: "The purpose of hashtags is to:",
        options: [
          "Make posts (tweets) searchable",
          "Add humorous commentary to a post",
          "Exceed the 280-character limit",
          "Replace the need for images"
        ],
        answer: "Make posts (tweets) searchable",
        explanation:
          "Hashtags categorize content so posts are discoverable by topic across social platforms."
      },
      {
        question:
          "On Twitter, Partner Audiences allow advertisers to target potential customers based on behaviors that occur outside Twitter. How does Twitter get this information?",
        options: [
          "The Twitter app hacks this information from other apps on the user's phone",
          "Twitter has partnered with third-party data providers to access this information",
          "Twitter users voluntarily provide this information when they register with Twitter",
          "Twitter partners with governments to access this information from census data"
        ],
        answer: "Twitter has partnered with third-party data providers to access this information",
        explanation:
          "Partner Audiences rely on third-party data about off-Twitter behavior that Twitter licenses for ad targeting."
      },
      {
        question:
          "Twitter consumption is fast-paced because of the short nature of tweets. Pinterest consumption is even faster-paced because:",
        options: [
          "The Pinterest feed automatically scrolls",
          "Pins disappear after only five seconds on the screen",
          "The Pinterest feed shows multiple columns of images",
          "Columns are organized by topic"
        ],
        answer: "The Pinterest feed shows multiple columns of images",
        explanation:
          "Pinterest’s multi-column layout lets users scan many visuals at once, speeding consumption compared to single-column feeds like Twitter."
      },
      {
        question: "Which of the following is NOT a payment method for advertising on Pinterest?",
        options: [
          "Cost per engagement (CPE)",
          "Cost per click (CPC)",
          "Cost per video view (CPV)",
          "Cost per mille (CPM)"
        ],
        answer: "Cost per engagement (CPE)",
        explanation:
          "Pinterest supports CPC, CPM, and CPV bidding; CPE is not a standard pricing option on the platform."
      },
      {
        question: "Which type of YouTube ad lasts exactly six seconds?",
        options: [
          "Overlay ads",
          "Skippable video ads",
          "Long, non-skippable video ads",
          "Bumper ads"
        ],
        answer: "Bumper ads",
        explanation:
          "Bumper ads are non-skippable six-second spots used for quick, high-impact brand messages on YouTube."
      },
      {
        question: "Which platform has an advertisement type that is most similar to email marketing?",
        options: ["Twitter", "Pinterest", "LinkedIn", "Snapchat"],
        answer: "LinkedIn",
        explanation:
          "LinkedIn Message Ads (formerly Sponsored InMail) deliver direct messages to user inboxes, closely mirroring email marketing."
      },
      {
        question: "What led to a thriving ecosystem of influencers on Instagram?",
        options: [
          "Instagram actively recruited influencers early on",
          "Paid advertisements came relatively late to Instagram",
          "Instagram was programmed to allow influencers to avoid FTC compliance",
          "Influencers contribute a fixed percentage of their earnings to Instagram"
        ],
        answer: "Paid advertisements came relatively late to Instagram",
        explanation:
          "With ads arriving later, brands leaned on influencers for organic reach, fueling Instagram's influencer ecosystem."
      },
      {
        question: "Which of the following is NOT an example of reputation management?",
        options: [
          "A company hires a public relations firm to attract news stories about the company so that its homepage ranks better on search results",
          "A company hires a public relations firm to attract news stories about the company so that searches on the company's name will bring up links to the positive news stories instead of negative links",
          "A company uses Google Alerts to monitor web mentions of its company and its top executives",
          "A company uses its customer service team to respond to negative comments about the company online"
        ],
        answer:
          "A company hires a public relations firm to attract news stories about the company so that its homepage ranks better on search results",
        explanation:
          "This action is focused on SEO rankings, not on monitoring or addressing reputation-related issues."
      },
      {
        question:
          "A company like Apple generates so much online commentary that it would be too labor-intensive to monitor it all. But Apple still wants to be on the lookout for negative press. It should therefore:",
        options: [
          "Look at 10 randomly selected results from Google Alerts per day",
          "Examine Google Alerts once per month",
          "Actively monitor crucial alerts like \"Apple + fraud\" and \"Apple + scam\"",
          "Monitor blogs only and ignore news sites, discussion forums, etc."
        ],
        answer: "Actively monitor crucial alerts like \"Apple + fraud\" and \"Apple + scam\"",
        explanation:
          "Focusing on high-risk keyword alerts surfaces serious issues without requiring monitoring every mention."
      },
      {
        question: "In general, the proper response to a negative review on an online review site is to:",
        options: [
          "Ignore it",
          "Explain how the company is not at fault",
          "Send discounts or coupons in recompense for the failure",
          "Understand the situation and take responsibility where appropriate"
        ],
        answer: "Understand the situation and take responsibility where appropriate",
        explanation:
          "Best practice is to acknowledge the issue empathetically and take responsibility when warranted to protect and rebuild reputation."
      },
      {
        question: "How many responses are optimal for negative reports on scam reporting websites?",
        options: ["0", "1", "2", "3 or more"],
        answer: "3 or more",
        explanation:
          "Providing multiple professional responses shows transparency and active engagement, which bolsters credibility on scam-reporting sites."
      },
      {
        question: "Who is liable when false information is posted online?",
        options: [
          "Google and any other search engine that links to the false information",
          "The company that maintains the website on which the false information is posted",
          "Practically nobody",
          "The web hosting company that maintains the website's servers"
        ],
        answer: "The company that maintains the website on which the false information is posted",
        explanation:
          "Liability typically falls on the publisher or owner of the site hosting the false information, not search engines or hosting providers."
      },
      {
        question: "Which is NOT one of the three T's of negative publicity?",
        options: ["Take down", "Timeliness", "Transparency", "Training"],
        answer: "Training",
        explanation:
          "The three T's are usually Timeliness, Transparency, and Taking responsibility (or Truth); Training is not part of this framework."
      },
      {
        question:
          "A nonprofit organization has generated a following of people who have created websites about the organization. Most of these sites are positive, and only a few are negative. The organization begins buying some of the positive sites and redirecting those URLs to their home URL. What is the downside of this strategy?",
        options: [
          "Redirecting the URLs to the nonprofit organization's URL will weaken the organization's URL and prevent it from ranking well on search engines",
          "By redirecting the URLs, those URLs will no longer rank independently on search engines, moving other (potentially negative) sites up higher in the rankings",
          "Redirecting websites is never a good idea, because it creates extra copies of content that damage search engine rankings",
          "Search engines view redirects with suspicion, and having multiple redirects could generate a manual penalty from Google"
        ],
        answer:
          "By redirecting the URLs, those URLs will no longer rank independently on search engines, moving other (potentially negative) sites up higher in the rankings",
        explanation:
          "When positive third-party sites are redirected, they drop from the SERPs, which can leave room for negative sites to rise."
      },
      {
        question:
          "All of the following activities are more difficult on a mobile device than on a desktop computer EXCEPT:",
        options: [
          "Scrolling",
          "Viewing information",
          "Typing",
          "Clicking"
        ],
        answer: "Scrolling",
        explanation:
          "Scrolling is generally easier on mobile due to touch swiping; typing, clicking, and detailed viewing are typically harder on smaller screens."
      },
      {
        question: "The accelerated mobile pages project is trying to address what shortcoming of mobile devices?",
        options: ["Difficult clicking", "Poor mobile web design", "Slow loading of web pages", "Immobility of desktop computers"],
        answer: "Slow loading of web pages",
        explanation:
          "AMP focuses on streamlining pages for fast loads on mobile, tackling the common problem of slow page speed."
      },
      {
        question: "On which of the following dimensions are mobile users equal to desktop users?",
        options: [
          "Patience",
          "Length of internet usage sessions",
          "Effectiveness of video",
          "Importance of location"
        ],
        answer: "Effectiveness of video",
        explanation:
          "Mobile and desktop users respond similarly well to video; patience, session length, and location importance differ."
      },
      {
        question: 'Mobile users engage in more "snacking" than desktop users. This means that:',
        options: [
          "Mobile users make smaller, more frequent purchases",
          "Mobile users have shorter, more frequent usage sessions",
          "Mobile users find restaurants more frequently from their phones",
          "Mobile users spill crumbs on the phones more readily than on their desktop keyboards"
        ],
        answer: "Mobile users have shorter, more frequent usage sessions",
        explanation:
          "Snacking describes quick, repeated interactions on mobile—shorter but more frequent sessions throughout the day."
      },
      {
        question:
          "If I pay to advertise on Google's ad network and I notice a low conversion rate from mobile users despite having a mobile-optimized website, it is likely that:",
        options: [
          "Mobile traffic is poorly qualified (e.g., consisting of many fat-finger clicks)",
          "Mobile users prefer to convert a different way (e.g., purchasing in-store or on a different device)",
          "Both mobile traffic is poorly qualified (e.g., consisting of many fat-finger clicks) AND mobile users prefer to convert a different way (e.g., purchasing in-store or on a different device)",
          "None of these are correct"
        ],
        answer:
          "Both mobile traffic is poorly qualified (e.g., consisting of many fat-finger clicks) AND mobile users prefer to convert a different way (e.g., purchasing in-store or on a different device)",
        explanation:
          "Mobile campaigns can suffer from accidental clicks and deferred/offline conversions, depressing measured mobile conversion rates."
      },
      {
        question:
          "I do a search for \"restaurants near me\" and I see an ad for a local Thai restaurant only if I am within 400 meters of the restaurant's location. This location-based ad strategy is called:",
        options: [
          "Temporal training",
          "Locavore targeting",
          "Hyper-targeting",
          "Geo-fencing"
        ],
        answer: "Geo-fencing",
        explanation:
          "Geo-fencing targets users within a defined physical boundary (e.g., 400 meters), using location data to limit who sees the ad."
      },
      {
        question:
          "Targeting consumers based on their location is not as effective as targeting them based on their location and:",
        options: ["Their past behavior", "Timing", "Both past behavior and timing", "None of these are correct"],
        answer: "Both past behavior and timing",
        explanation:
          "Combining location with behavioral and temporal signals makes targeting far more relevant and effective."
      },
      {
        question: "Which of the following developments will make consumers more tolerant of notification-based advertising?",
        options: [
          "Notifications will be controlled biometrically",
          "Ad targeting will improve so that only informative and welcome notifications will be sent",
          "Consumers will have their bank accounts connected to notifications so that they will be charged by the notification automatically",
          "Consumers will be unable to turn off notifications from any apps"
        ],
        answer: "Ad targeting will improve so that only informative and welcome notifications will be sent",
        explanation:
          "Better targeting that surfaces relevant, useful notifications makes users more tolerant of notification-based ads."
      },
      {
        question:
          "A commuter's evening routine is very rigid except for Friday evenings, when she often makes extra stops for shopping on the way home. Advertisers would most likely find success if they targeted her with advertisements:",
        options: [
          "During her morning commute",
          "At the end of her evening commute",
          "During the weekend",
          "At the beginning of her evening commute"
        ],
        answer: "At the beginning of her evening commute",
        explanation:
          "Reaching her at the start of the Friday commute influences shopping decisions before she chooses where to stop."
      },
      {
        question: "Which of the following is a valid use of browser Bluetooth for a large retailer like Target or Walmart?",
        options: [
          "Providing location-based information to shoppers",
          "Improving Wi-Fi signals in-store",
          "Making audio broadcast announcements in the store",
          "Automating checkout procedures"
        ],
        answer: "Providing location-based information to shoppers",
        explanation:
          "Browser Bluetooth via beacons is typically used to detect in-store location and push relevant info or offers to shoppers."
      },
      {
        question: "Which of the following reflects product-centric (as opposed to brand-centric) demand?",
        options: [
          "\"really need a way to stay warmer when I ski\"",
          "\"I need new ski gloves\"",
          "\"I really want The North Face's new ski gloves\"",
          "\"I only shop at L. L. Bean for winter clothes\""
        ],
        answer: "\"I need new ski gloves\"",
        explanation: "Product-centric demand focuses on the product need without referencing a specific brand."
      },
      {
        question: "A new company with no existing customers should likely focus on:",
        options: ["Demand generation", "Demand harvesting", "Loyalty building", "Its return policy"],
        answer: "Demand generation",
        explanation: "A new company must first create awareness and interest before it can harvest demand or build loyalty."
      },
      {
        question:
          "A company has focused all its efforts on demand harvesting for a long while. It should now shift its efforts to include:",
        options: ["Demand generation", "More demand harvesting", "Loyalty building", "Paid search"],
        answer: "Demand generation",
        explanation:
          "Harvesting captures existing demand; sustainable growth also needs creating new interest through demand generation."
      },
      {
        question:
          "All else being equal, a marketing channel that has a high cost per exposure will have a return on investment:",
        options: ["High", "Low"],
        answer: "Low",
        explanation:
          "Higher cost per exposure means paying more to reach the same audience, which lowers ROI when performance is otherwise equal."
      },
      {
        question: "A random sample of consumers will likely have a low customer concentration for Porsche because:",
        options: [
          "Porsche is not a respected brand",
          "Porsche only appeals to young males",
          "Porsche actively tries to prevent most people from buying its cars",
          "Most people cannot afford such an expensive car"
        ],
        answer: "Most people cannot afford such an expensive car",
        explanation:
          "Porsche serves a small, affluent segment, so few people in a random sample can realistically afford the brand."
      },
      {
        question:
          "A consumer sees an ad and purchases the product featured in the ad, but he would have purchased the product anyway even if he hadn't seen the ad. The ad is:",
        options: [
          "Effective because the consumer purchased the product",
          "Effective because the ad caused the consumer to purchase",
          "Not effective because the ad did not influence his behavior",
          "Not effective because the ad was poorly targeted"
        ],
        answer: "Not effective because the ad did not influence his behavior",
        explanation:
          "If the purchase would have happened anyway, the ad didn’t change behavior, so it wasn’t truly effective."
      },
      {
        question: "An ad that commands a consumer's direct attention is likely to be:",
        options: [
          "More effective than an ad that does not command direct attention",
          "Ineffective in almost all circumstances",
          "Effective for all audiences",
          "Less effective than an ad that is only seen in a consumer's peripheral vision"
        ],
        answer: "More effective than an ad that does not command direct attention",
        explanation:
          "Direct attention increases the chance an ad influences memory, attitudes, and behavior versus peripheral-only exposure."
      },
      {
        question: "An advantage of paid search marketing is that:",
        options: [
          "It is the least expensive channel on a cost-per-exposure basis",
          "The high start-up costs make it difficult for competitors to bid on profitable keywords",
          "There is very little competition for the highest-value keywords",
          "Returns are typically seen immediately"
        ],
        answer: "Returns are typically seen immediately",
        explanation:
          "Paid search can start delivering traffic and conversions as soon as campaigns go live, unlike slower organic tactics."
      },
      {
        question: "Display advertising has a low exposure effectiveness, but it may still be cost-effective because:",
        options: [
          "The cost per exposure is low",
          "It requires only a flat fee",
          "Display ads cost the same regardless of exposure frequency",
          "Customer concentration is 100%"
        ],
        answer: "The cost per exposure is low",
        explanation:
          "Despite low per-exposure impact, very low CPMs can make large-scale display campaigns cost-effective."
      },
      {
        question:
          "A mobile application that gets installed and used regularly by a large number of customers may still not be profitable if:",
        options: [
          "It produces conversions from a new group of customers",
          "The conversions on the application are higher-value than on the website",
          "The convenience of using the app increases visit frequency",
          "Using the app does not increase users' spending"
        ],
        answer: "Using the app does not increase users' spending",
        explanation:
          "Even with high adoption, an app must drive incremental spending or higher-value conversions to be profitable."
      }
    ];
