import { IProject } from '@/types';

export const PROJECTS: IProject[] = [
    {
        title: 'QuickShow: Movie Ticket Booking Platform',
        slug: 'quickshow',
        liveUrl: 'https://quickshow-movie-tickets.vercel.app/',
        year: 2025,
        description: `
      Developed a full-stack movie ticket booking platform using React and Node.js with real-time seat selection and user authentication. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🏗️ Full-Stack Architecture: Built with React, Node.js, Express.js, and MongoDB</li>
        <li>🔒 Secure Auth: Integrated Clerk for secure and seamless user authentication</li>
        <li>💳 Payment Integration: Integrated Stripe for smooth and secure payment processing</li>
        <li>⚡ Automation: Used Inngest to automate background jobs and cron tasks</li>
        <li>🚀 Performance: Deployed on Vercel ensuring high performance and scalability</li>
      </ul>
      `,
        role: `
      Lead Full-Stack Developer <br/>
      <ul>
        <li>Designed end-to-end user workflows for movie discovery and seat reservation</li>
        <li>Developed a robust backend to handle concurrent bookings efficiently</li>
        <li>Styled responsive UI using Tailwind CSS for cross-device compatibility</li>
      </ul>
      `,
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Stripe', 'Inngest', 'Tailwind CSS'],
        thumbnail: '/projects/quickshow/Home-Page.png',
        longThumbnail: '/projects/quickshow/Home-Page.png',
        images: [
            '/projects/quickshow/Home-Page.png',
            '/projects/quickshow/Ticket-Selection.png',
            '/projects/quickshow/My-Bookings.png',
        ],
    },
    {
        title: 'IdeaSphere: Ai Powered project topic finder',
        slug: 'ai-topic-finder',
        liveUrl: '',
        year: 2025,
        description: `
      Developed a web application to suggest personalized project topics using OpenAI's language model. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 AI Integration: Leveraged OpenAI API to generate smart, interest-based project ideas</li>
        <li>⚙️ Dynamic Backend: Built with Django and SQLite for reliable data persistence and logic flow</li>
        <li>🎨 Responsive Design: Designed an intuitive UI with Bootstrap and JavaScript for enhanced engagement</li>
      </ul>
      `,
        role: `
      Frontend & AI Integration Developer <br/>
      <ul>
        <li>Integrated AI models to provide real-time suggestions based on user input</li>
        <li>Designed a responsive and accessible frontend for a wide range of users</li>
        <li>Managed data flow and state using Django's powerful backend features</li>
      </ul>
      `,
        techStack: ['Django', 'Python', 'OpenAI API', 'SQLite', 'Bootstrap', 'JavaScript'],
        thumbnail: '/projects/ai_topic_finder/Topic-Finder-Full.png',
        longThumbnail: '/projects/ai_topic_finder/Topic-Finder-Full.png',
        images: [
            '/projects/ai_topic_finder/Topic-Finder-1.jpg',
            '/projects/ai_topic_finder/Topic-Finder-2.jpg',
            '/projects/ai_topic_finder/Topic-Finder-3.jpg',
        ],
    },
    {
        title: 'LearnHub: Smart Learning Platform',
        slug: 'lets-learn',
        liveUrl: '',
        year: 2024,
        description: `
      A collaborative learning platform designed to facilitate knowledge sharing and interactive education. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>📚 Resource Library: Organized collection of learning materials and study guides</li>
        <li>🤝 Interactive Forums: Space for users to discuss topics and share insights</li>
        <li>🚀 Performance: Built for speed and reliability to ensure an optimal learning experience</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Developed a intuitive and accessible interface for learners of all levels</li>
        <li>Integrated collaborative features to foster community engagement</li>
        <li>Ensured responsive design for consistent experience across devices</li>
      </ul>
      `,
        techStack: ['React', 'Tailwind CSS', 'Next.js'],
        thumbnail: '/projects/lets-learn/Lets-learn-home.png',
        longThumbnail: '/projects/lets-learn/Lets-learn-home.png',
        images: ['/projects/lets-learn/Lets-learn-home.png'],
    },
    {
        title: 'DicePlay: Interactive Dice Game Platform',
        slug: 'dice-game',
        liveUrl: '',
        year: 2024,
        description: `
      An interactive and engaging Dice Game built with React, focusing on state management and game logic. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🎲 Interactive Gameplay: Dynamic dice rolling and score tracking</li>
        <li>🎨 Modern UI: Styled with Tailwind CSS for a sleek, responsive design</li>
        <li>⚡ State Management: Used React hooks for efficient game state handling</li>
      </ul>
      `,
        role: `
      Lead Developer <br/>
      <ul>
        <li>Designed and implemented the core game mechanics and scoring system</li>
        <li>Built a responsive, user-friendly interface for seamless interaction</li>
        <li>Optimized component performance for smooth gaming experience</li>
      </ul>
      `,
        techStack: ['React', 'Tailwind CSS', 'JavaScript'],
        thumbnail: '/projects/dice-game/Dice-Home-Page.png',
        longThumbnail: '/projects/dice-game/Dice-Home-Page.png',
        images: [
            '/projects/dice-game/Dice-Play-Page.png',
            '/projects/dice-game/play-page-with-rules.png',
        ],
    },
    {
        title: 'ShopEase: E-Commerce Shopping Application',
        slug: 'shop-app',
        liveUrl: '',
        year: 2024,
        description: `
      A feature-rich e-commerce shop application with cart functionality and product filtering. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🛒 Shopping Cart: Fully functional cart for adding and managing items</li>
        <li>🔍 Product Filtering: Advanced filtering for easy product discovery</li>
        <li>💳 Secure Checkout: Integrated secure payment processes for user safety</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Built the end-to-end shopping experience from product listing to checkout</li>
        <li>Developed a robust backend for inventory management and order processing</li>
        <li>Designed a responsive, conversion-focused UI with Tailwind CSS</li>
      </ul>
      `,
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        thumbnail: '/projects/shop-app/Shop-Home-Page.png',
        longThumbnail: '/projects/shop-app/Shop-Home-Page.png',
        images: [
            '/projects/shop-app/Shop-Home-Page.png',
            '/projects/shop-app/Cart-Page.png',
        ],
    },
];
