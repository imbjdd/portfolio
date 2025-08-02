import { Project } from '@/interfaces/project';

export const projectsData: Project[] = [
  {
    slug: 'clash-of-clout',
    image: '/coc.jpg',
    imageAlt: 'ETHGlobal Agents award',
    title: 'Gaia and Collab.Land - Most Viral Agent & Flow Best AI Agents for Consumers 3rd place',
    description: 'ETHGlobal Agents — $3,500',
    delay: 0.2,
    fullWidth: false,
    link: 'https://github.com/juSt-jeLLy/Clash-of-Clout',
    tags: ['AI', 'Web3', 'Hackathon'],
    longDescription: 'Clash of Clout is an innovative AI-powered social media platform that leverages blockchain technology to create a decentralized content ecosystem. The platform uses AI agents to curate and promote high-quality content while rewarding creators through a unique tokenomics system.',
    technologies: ['React', 'Solidity', 'AI/ML', 'IPFS', 'Ethereum'],
    features: [
      'AI-powered content curation',
      'Decentralized content storage',
      'Token-based reward system',
      'Social media integration',
      'Real-time content ranking'
    ],
    challenges: [
      'Integrating AI with blockchain technology',
      'Scaling content curation algorithms',
      'Ensuring fair token distribution',
      'Building user-friendly interface for complex features'
    ],
    learnings: [
      'Advanced AI integration techniques',
      'Blockchain scalability solutions',
      'User experience design for Web3 applications',
      'Tokenomics design principles'
    ],
    demoLink: 'https://clash-of-clout.vercel.app',
    githubLink: 'https://github.com/juSt-jeLLy/Clash-of-Clout',
    team: ['Lead Developer', 'AI Engineer', 'Blockchain Developer'],
    duration: '48 hours',
    role: 'Full-stack Developer & AI Integration'
  },
  {
    slug: 'ethglobal-brussels',
    image: '/ddd.jpg',
    imageAlt: 'ETHGlobal Brussels award',
    title: 'The Graph - Best Use of Subgraph 2nd place',
    description: 'ETHGlobal Brussels — $1,500',
    delay: 0.4,
    fullWidth: false,
    link: 'https://github.com/imbjdd/ethglobal-brussels',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A decentralized data platform that leverages The Graph protocol to provide real-time indexing and querying of blockchain data. The project focuses on creating efficient subgraphs for complex DeFi protocols.',
    technologies: ['GraphQL', 'Solidity', 'The Graph', 'React', 'TypeScript'],
    features: [
      'Real-time blockchain data indexing',
      'GraphQL API for data queries',
      'DeFi protocol integration',
      'Data visualization dashboard',
      'Automated subgraph deployment'
    ],
    challenges: [
      'Optimizing subgraph performance',
      'Handling large-scale blockchain data',
      'Ensuring data accuracy and consistency',
      'Complex query optimization'
    ],
    learnings: [
      'The Graph protocol deep dive',
      'Subgraph development best practices',
      'GraphQL optimization techniques',
      'DeFi data architecture'
    ],
    demoLink: 'https://ethglobal-brussels.vercel.app',
    githubLink: 'https://github.com/imbjdd/ethglobal-brussels',
    team: ['Backend Developer', 'Frontend Developer', 'Data Engineer'],
    duration: '48 hours',
    role: 'Subgraph Developer & API Design'
  },
  {
    slug: 'alphavibe-compliance',
    image: '/amsterdam.jpeg',
    imageAlt: 'Legal Frontier Hackathon award',
    title: 'Legal Frontier Hackathon - 2nd place',
    description: 'Amsterdam — 2025',
    delay: 0.2,
    fullWidth: false,
    link: 'https://github.com/imbjdd/alphavibe-compliance',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A compliance automation platform that uses blockchain technology to streamline legal processes and ensure regulatory compliance in the digital asset space. The platform provides automated KYC/AML verification and legal document management.',
    technologies: ['Solidity', 'React', 'Node.js', 'MongoDB', 'AWS'],
    features: [
      'Automated KYC/AML verification',
      'Smart contract-based compliance',
      'Legal document management',
      'Regulatory reporting dashboard',
      'Multi-jurisdiction support'
    ],
    challenges: [
      'Ensuring regulatory compliance across jurisdictions',
      'Integrating with multiple KYC providers',
      'Handling sensitive legal data securely',
      'Automating complex legal processes'
    ],
    learnings: [
      'Regulatory compliance in Web3',
      'Legal tech integration',
      'Data privacy and security',
      'Cross-border legal frameworks'
    ],
    demoLink: 'https://alphavibe-compliance.vercel.app',
    githubLink: 'https://github.com/imbjdd/alphavibe-compliance',
    team: ['Legal Tech Developer', 'Compliance Specialist', 'Frontend Developer'],
    duration: '48 hours',
    role: 'Smart Contract Developer & Compliance Integration'
  },
  {
    slug: 'www-winner',
    image: '/www.png',
    imageAlt: 'World Wild Web Hackathon award',
    title: 'World Wild Web - 3rd place',
    description: 'Paris — 2025',
    delay: 0.2,
    fullWidth: false,
    link: 'https://github.com/imbjdd/www-winner',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A decentralized web platform that aims to democratize internet access and content creation. The project focuses on creating a censorship-resistant web infrastructure using blockchain technology.',
    technologies: ['IPFS', 'Solidity', 'React', 'Web3.js', 'ENS'],
    features: [
      'Decentralized content hosting',
      'Censorship-resistant domains',
      'Peer-to-peer content delivery',
      'User-owned data storage',
      'Decentralized identity management'
    ],
    challenges: [
      'Building scalable P2P infrastructure',
      'Ensuring content availability',
      'User experience for decentralized apps',
      'Integration with existing web standards'
    ],
    learnings: [
      'Decentralized web architecture',
      'IPFS implementation',
      'P2P networking',
      'Web3 user experience design'
    ],
    demoLink: 'https://www-winner.vercel.app',
    githubLink: 'https://github.com/imbjdd/www-winner',
    team: ['P2P Developer', 'Frontend Developer', 'Blockchain Developer'],
    duration: '48 hours',
    role: 'P2P Infrastructure Developer'
  },
  {
    slug: 'db3-decentralized',
    image: '/db3.png',
    imageAlt: 'ETHShangai award',
    title: 'DB3 - Building a decentralized application with DB3',
    description: 'ETHShangai — $300',
    delay: 0.2,
    fullWidth: false,
    link: 'https://github.com/orgs/SoveiLive/repositories',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A decentralized database application built on DB3 protocol that provides secure, scalable, and censorship-resistant data storage. The project demonstrates the potential of decentralized databases in real-world applications.',
    technologies: ['DB3', 'Solidity', 'React', 'TypeScript', 'Web3.js'],
    features: [
      'Decentralized data storage',
      'Encrypted data access',
      'Permission-based data sharing',
      'Real-time data synchronization',
      'Cross-chain data compatibility'
    ],
    challenges: [
      'Optimizing database performance',
      'Ensuring data consistency',
      'Implementing encryption at scale',
      'Cross-chain data interoperability'
    ],
    learnings: [
      'Decentralized database design',
      'DB3 protocol implementation',
      'Data encryption techniques',
      'Cross-chain development'
    ],
    demoLink: 'https://db3-demo.vercel.app',
    githubLink: 'https://github.com/orgs/SoveiLive/repositories',
    team: ['Database Engineer', 'Blockchain Developer', 'Frontend Developer'],
    duration: '48 hours',
    role: 'Database Architect & Smart Contract Developer'
  },
  {
    slug: 'privlend',
    image: '/privlend.jpg',
    imageAlt: 'ETHGlobal Trifecta award',
    title: 'Privlend',
    description: 'ETHGlobal Trifecta',
    delay: 0.4,
    fullWidth: false,
    link: 'https://github.com/imbjdd/privlend-front',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A privacy-focused lending platform that uses zero-knowledge proofs to enable secure lending without exposing sensitive financial information. The platform combines DeFi lending with advanced privacy technologies.',
    technologies: ['Zero-Knowledge Proofs', 'Solidity', 'React', 'Circom', 'Web3.js'],
    features: [
      'Private lending pools',
      'Zero-knowledge credit scoring',
      'Collateralized lending',
      'Privacy-preserving transactions',
      'Decentralized governance'
    ],
    challenges: [
      'Implementing zero-knowledge proofs',
      'Balancing privacy with regulatory compliance',
      'Optimizing gas costs for complex operations',
      'Building user-friendly privacy features'
    ],
    learnings: [
      'Zero-knowledge proof implementation',
      'Privacy-preserving DeFi design',
      'Advanced cryptography in Web3',
      'Regulatory considerations for privacy protocols'
    ],
    demoLink: 'https://privlend.vercel.app',
    githubLink: 'https://github.com/imbjdd/privlend-front',
    team: ['Cryptography Engineer', 'Smart Contract Developer', 'Frontend Developer'],
    duration: '48 hours',
    role: 'Zero-Knowledge Proof Developer & Smart Contract Architect'
  },
  {
    slug: 'climate-compass',
    image: '/climate.png',
    imageAlt: 'ETHPrague 2024',
    title: 'Climate Compass',
    description: 'ETHPrague 2024',
    delay: 0.2,
    fullWidth: false,
    link: 'https://github.com/orgs/Climate-Compass/repositories',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A blockchain-based platform that tracks and incentivizes climate-positive actions. The project uses smart contracts to reward individuals and organizations for sustainable practices and carbon offset initiatives.',
    technologies: ['Solidity', 'React', 'IPFS', 'The Graph', 'Web3.js'],
    features: [
      'Carbon footprint tracking',
      'Sustainable action rewards',
      'Carbon credit marketplace',
      'Environmental impact visualization',
      'Community governance'
    ],
    challenges: [
      'Verifying environmental impact data',
      'Creating accurate carbon calculations',
      'Building trust in sustainability claims',
      'Scaling impact measurement'
    ],
    learnings: [
      'Environmental data verification',
      'Carbon credit market mechanics',
      'Sustainability tokenomics',
      'Impact measurement methodologies'
    ],
    demoLink: 'https://climate-compass.vercel.app',
    githubLink: 'https://github.com/orgs/Climate-Compass/repositories',
    team: ['Environmental Data Scientist', 'Smart Contract Developer', 'Frontend Developer'],
    duration: '48 hours',
    role: 'Smart Contract Developer & Impact Measurement'
  },
  {
    slug: 'click-and-collect',
    image: '/clickandcollect.png',
    imageAlt: 'Hackathon Campus Fund x Albert School x 42',
    title: 'Click and Collect',
    description: 'Hackathon Campus Fund x Albert School x 42',
    delay: 0.4,
    fullWidth: false,
    link: 'https://github.com/imbjdd/marketplace',
    tags: ['Web3', 'Hackathon'],
    longDescription: 'A decentralized marketplace platform that enables secure peer-to-peer transactions with integrated escrow services. The platform focuses on creating a trustless environment for buying and selling goods and services.',
    technologies: ['Solidity', 'React', 'IPFS', 'Web3.js', 'MetaMask'],
    features: [
      'Peer-to-peer marketplace',
      'Escrow smart contracts',
      'Dispute resolution system',
      'Reputation management',
      'Secure payment processing'
    ],
    challenges: [
      'Building trust in P2P transactions',
      'Implementing effective dispute resolution',
      'Creating scalable escrow system',
      'User experience for complex transactions'
    ],
    learnings: [
      'Marketplace platform design',
      'Escrow contract implementation',
      'Dispute resolution mechanisms',
      'User trust building in Web3'
    ],
    demoLink: 'https://click-and-collect.vercel.app',
    githubLink: 'https://github.com/imbjdd/marketplace',
    team: ['Smart Contract Developer', 'Frontend Developer', 'UX Designer'],
    duration: '48 hours',
    role: 'Smart Contract Developer & Marketplace Architect'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projectsData;
} 