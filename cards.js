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
        answer: "Content",
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
        question: "Copy informs, not the other way around.",
        options: ["Design", "Text", "Knowledge", "Content"],
        answer: "Design",
        explanation:
          "Design must follow the message and purpose of the copy, not override it."
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
        answer: "Investigate which traffic source produced the best quality traffic",
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
        answer: "The extent to which a web page's content matches the search query",
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
        answer: "Images rank better in image search",
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
        question: "The benefit of keyword mapping is:",
        options: [
          "Ensure best page ranks",
          "Organize SEO efforts",
          "Prevent keyword cannibalization",
          "All of the above"
        ],
        answer: "All of the above",
        explanation: "All listed advantages are true."
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
        question: "An editorial link is:",
        options: [
          "A link created by a newspaper editor",
          "Submitted to a directory",
          "A quid pro quo agreement",
          "A voluntary link because of content value"
        ],
        answer: "A voluntary link because of content value",
        explanation: "Editorial links are natural and earned."
      },
      {
        question: "Press release links are considered:",
        options: [
          "Editorial links",
          "Manual links",
          "Manufactured links",
          "Nofollow links"
        ],
        answer: "Manufactured links",
        explanation: "They are created intentionally via promotion."
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
        question: "Which is higher: the site bounce rate or the homepage's bounce rate?",
        options: ["The site bounce rate", "The homepage's bounce rate"],
        answer: "The homepage's bounce rate",
        explanation: "Homepage bounce rate is 100/200 = 50%. Site bounce rate is (100+100)/500 = 40%, so homepage is higher."
      },
      {
        question: "What is the site bounce rate?",
        options: ["40%", "30%", "20%", "50%"],
        answer: "40%",
        explanation: "200 total bounces out of 500 sessions equals 40%."
      },
      {
        question: "Were the 2,000 paid sessions profitable?",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "$20,000 revenue minus $10,000 ad cost leaves $10,000 profit."
      },
      {
        question: "What is the conversion rate and close rate?",
        options: ["8%; 25%", "8%; 20%", "10%; 20%", "20%; 8%"],
        answer: "8%; 25%",
        explanation: "80 leads from 1,000 visitors = 8% conversion; 20 bookings from 80 leads = 25% close."
      },
      {
        question: "A low conversion rate can be caused by all EXCEPT:",
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
        explanation: "Channel analysis compares traffic sources and their performance quality."
      },
      {
        question: "The most reliable way to measure advertising effectiveness is:",
        options: [
          "Stop advertising altogether",
          "Use Google's data-driven attribution tool",
          "Use linear attribution",
          "Conduct a carefully controlled experiment"
        ],
        answer: "Conduct a carefully controlled experiment",
        explanation: "Controlled experiments isolate cause and effect for ad impact."
      },
      {
        question: "Organic search results are typically displayed:",
        options: ["On page 2", "At the top of the SERP", "Below the paid ads", "Interspersed with paid ads"],
        answer: "Below the paid ads",
        explanation: "Paid ads appear above organic listings."
      },
      {
        question: 'For a search engine, "relevance" refers to:',
        options: [
          "How well content matches the searcher's query",
          "Whether a website has been visited before",
          "The traffic level of the website",
          "How many pages on the website link internally"
        ],
        answer: "How well content matches the searcher's query",
        explanation: "Relevance measures how well the page content aligns with user intent."
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
        explanation: "A clean, descriptive subfolder is best for SEO and user clarity."
      },
      {
        question: 'Including the word "maternity" in image alt text also helps:',
        options: [
          "Better organization",
          "Images show in image search",
          "Other pages rank",
          "Product pages auto-optimize"
        ],
        answer: "Images show in image search",
        explanation: "Alt text improves relevance for image search visibility."
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
        question: "The benefit of keyword mapping is:",
        options: [
          "Correct page per query",
          "Organize SEO",
          "Prevents cannibalization",
          "All of the above"
        ],
        answer: "All of the above",
        explanation: "Mapping aligns queries to pages, keeps SEO organized, and prevents overlap."
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
        question: "What is the anchor text of this link: Fashion deals?",
        options: ["<a href>", "http://jane.com", "Fashion deals", "</a>"],
        answer: "Fashion deals",
        explanation: "Anchor text is the clickable text shown to users."
      },
      {
        question: "How will this link be treated differently by search engines?",
        options: [
          "Opens new window",
          "Will not pass link authority",
          "Used for image",
          "Shows unsecured"
        ],
        answer: "Will not pass link authority",
        explanation: "A nofollow link does not transfer ranking equity."
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
        question: "An editorial link is:",
        options: [
          "Created by editor",
          "Directory submission",
          "Quid pro quo",
          "Voluntary content-based link"
        ],
        answer: "Voluntary content-based link",
        explanation: "Editorial links are earned naturally because content merits them."
      },
      {
        question: "Press release backlinks are considered:",
        options: ["Editorial", "Manual", "Manufactured", "Nofollow"],
        answer: "Editorial",
        explanation: "They come from independent coverage generated by the press release."
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
      }
    ];
