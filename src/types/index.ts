export type ServiceTypeKey = 'landing' | 'company' | 'ecommerce' | 'portfolio' | 'custom';

export interface ServiceItem {
  id: ServiceTypeKey;
  title: string;
  category: string;
  tagline: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
  startingPrice: number;
  deliveryDays: string;
  badge?: string;
  accentColor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  tags: string[];
  highlights: string[];
  isFeatured?: boolean;
}

export interface EstimatorOptions {
  serviceType: ServiceTypeKey;
  pageCount: number;
  interactiveLevel: 'standard' | 'interactive' | 'custom3d';
  needCms: boolean;
  needSeoOptimization: boolean;
  needPaymentGateway: boolean;
  needFastDelivery: boolean;
}

export interface EstimationResult {
  basePrice: number;
  estimatedTotal: number;
  timelineDays: number;
  breakdown: { item: string; cost: number }[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}
