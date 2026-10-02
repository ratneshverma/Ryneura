// All site content — edit this file to update text/data without touching components

export const NAV_LINKS = [
  { label: 'Overview', to: 'overview' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years of AI Innovation' },
]

export const WHY_US = [
  { icon: '🔬', title: 'Research-Backed AI', desc: 'Every solution grounded in proven research' },
  { icon: '⚙️', title: 'Production-Grade', desc: 'Built to scale in real-world environments' },
  { icon: '🚀', title: 'Fast Iteration', desc: 'Rapid prototyping with continuous delivery' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'Security-first architecture by default' },
]

export const SERVICES = [
  {
    id: 1,
    icon: 'Brain',
    title: 'AI Strategy & Consulting',
    desc: 'End-to-end AI roadmap design, feasibility assessments, and technology stack recommendations tailored to your business goals.',
    tags: ['Strategy', 'Roadmap', 'PoC'],
    glowColor: 'rgba(59,110,245,0.4)',
    iconBg: 'from-blue-600 to-cyan-400',
  },
  {
    id: 2,
    icon: 'Network',
    title: 'Machine Learning Development',
    desc: 'Custom ML models, data pipelines, model training and fine-tuning, and MLOps deployment on cloud infrastructure.',
    tags: ['Python', 'PyTorch', 'MLflow', 'AWS'],
    glowColor: 'rgba(0,212,255,0.4)',
    iconBg: 'from-cyan-500 to-blue-400',
  },
  {
    id: 3,
    icon: 'Eye',
    title: 'Computer Vision Systems',
    desc: 'Real-time object detection, facial recognition, image segmentation, and video analytics for industrial and consumer applications.',
    tags: ['OpenCV', 'YOLO', 'TensorFlow', 'ONNX'],
    glowColor: 'rgba(0,229,160,0.4)',
    iconBg: 'from-emerald-500 to-teal-400',
  },
  {
    id: 4,
    icon: 'Layers',
    title: 'SaaS Product Engineering',
    desc: 'Full-stack SaaS product development — from UI/UX design to scalable backend architecture, auth, billing, and multi-tenancy.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    glowColor: 'rgba(168,85,247,0.4)',
    iconBg: 'from-purple-600 to-violet-400',
  },
  {
    id: 5,
    icon: 'Sparkles',
    title: 'Generative AI Integration',
    desc: 'LLM integration, RAG pipelines, custom chatbots, AI copilots, and prompt engineering for enterprise workflows.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Vector DB'],
    glowColor: 'rgba(245,158,11,0.4)',
    iconBg: 'from-amber-500 to-orange-400',
  },
  {
    id: 6,
    icon: 'Cloud',
    title: 'Cloud & MLOps Infrastructure',
    desc: 'CI/CD for ML, containerized model serving, autoscaling inference APIs, monitoring, and cost-optimized cloud deployments.',
    tags: ['Docker', 'Kubernetes', 'GCP', 'Terraform'],
    glowColor: 'rgba(56,189,248,0.4)',
    iconBg: 'from-sky-500 to-blue-300',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Deep-dive into your business problem, data landscape, and success metrics to define the right solution.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Architect the AI/ML solution, select models, design the data pipeline, and plan the tech stack.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Rapid, iterative development with continuous feedback loops, demos, and quality checks at every step.',
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    desc: 'Production deployment, monitoring, performance tuning, and ongoing optimization as you grow.',
  },
]

export const FLOATING_TAGS = [
  { label: '🧠 Neural Net', delay: 0 },
  { label: '👁 Vision AI', delay: 1 },
  { label: '⚡ Real-Time', delay: 2 },
  { label: '☁ Cloud SaaS', delay: 1.5 },
]

export const METRICS = [
  { label: 'Models Deployed', value: '142' },
  { label: 'Accuracy Rate', value: '98.7%' },
  { label: 'SaaS Uptime', value: '99.9%' },
]

export const SERVICE_DROPDOWN = [
  'AI Strategy & Consulting',
  'Machine Learning Development',
  'Computer Vision Systems',
  'SaaS Product Engineering',
  'Generative AI Integration',
  'Cloud & MLOps Infrastructure',
  'Other',
]

export const CONTACT_INFO = {
  // Public company details displayed across the website
  publicEmail: 'Ashish81sonukumar@gmail.com',
  publicPhone: '+91 9771315072',
  publicWhatsAppNumber: '919771315072',
  whatsappMessage: 'Hi Ryneura team, I am reaching out from your website regarding an AI/Software project.',

  // Background notification & receiving destinations (NEVER exposed in UI)
  adminRecipientEmail: 'meetratnesh@gmail.com',
  adminNotificationPhone: '919901045437',

  // Official Meta WhatsApp Cloud API Integration
  metaWhatsApp: {
    phoneNumberId: '1401333779719378',
    accessToken:
      'EAAcrcDX5qXYBSsO8WzLmfKjZAOtdLP801Mwu1gfZCxKeNQW9PhhAPHAMErcd0qg3BsXhFJYOxaVbX4ZAJM543F04rIHYgTVK2CRQN6s7f4sPRHlZBIBLpoZApST5XmqLCZB9ghQff4nSQkfaY97fYl3DRPlUftvZC5oB8ShlCZASpfWF6Ar4PYRhwLhFQgySGsBoolwwjT89xdBrvOOtmj7ZARI8ZAjDPeMpM2Up5F91fnwp2xJ012ZCvsBpgxbS9863tcr755F3MDMmXYCLyRVWZCbHqovtEaLW4XdB',
    recipientPhone: '919901045437',
  },
}

