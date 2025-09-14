export interface Order {
  id: string;
  poNumber: string;
  supplierCompany: string;
  endCustomer: string;
  totalValue: number;
  status: 'sent' | 'processing' | 'failed';
  buyerCompany: string;
  buyerContact: string;
  supplierEmail: string;
  consigneeAddress: string;
  poDate: string;
  revisionStatus: string;
  urgencyLevel: string;
  productCategory: string;
  primaryGrade: string;
  technicalSpecs: string;
  manufacturingFacility: string;
  unitOfMeasure: string;
  totalQuantity: string;
  basicRate: number;
  agreedRate: number;
  currency: string;
  buyerGST: string;
  supplierGST: string;
  deliveryTimeline: string;
  originalMessage: string;
  generatedEmail: string;
  createdAt: string;
}

export const sampleOrders: Order[] = [
  {
    id: '1',
    poNumber: 'PO-468',
    supplierCompany: 'Greentex Paper Mill',
    endCustomer: 'Indore Packaging',
    totalValue: 245000,
    status: 'sent',
    buyerCompany: 'H.G. Hawa & Co',
    buyerContact: 'Afroz',
    supplierEmail: 'greentexrpl@gmail.com',
    consigneeAddress: 'Gat No. 94, Bhalekar Chowk, Pune - 412114',
    poDate: '21.08.2025',
    revisionStatus: 'Revised',
    urgencyLevel: 'Urgent',
    productCategory: 'Paper',
    primaryGrade: '16BF',
    technicalSpecs: '120GSM, dimensions: 32", 34", 38", 40", 46", 49.5", 62"',
    manufacturingFacility: 'Greentex Paper Mill',
    unitOfMeasure: 'Reels',
    totalQuantity: '30 Reels',
    basicRate: 30.00,
    agreedRate: 28.50,
    currency: 'INR',
    buyerGST: '27AAAFH3584L1Z3',
    supplierGST: '[To be filled]',
    deliveryTimeline: 'Urgent dispatch required',
    originalMessage: 'To Greentex, Agreed 28.50 / basic rate 30, 16bf/120gsm, 1) 32 - 3 Reel, 2) 34 - 10 Reel, 3) 38 - 4 Reel, 4) 40 - 5 Reel, 5) 46 - 3 Reel, 6) 49.5 - 2 Reel, 7) 62 - 3 Reel. Total 30 Reel. PO 468 dt 21.08.25 revised. End customer: Indore Packaging Industries. Consignee: Gat No. 94, Bhalekar Chowk, Pune - 412114. Urgent.',
    generatedEmail: `Subject: Purchase Order #468 - Urgent Dispatch Required\n\nDear Greentex Paper Mill Team,\n\nWe are pleased to place the following purchase order:\n\nPO Details:\n- PO Number: 468\n- Date: 21.08.2025\n- Status: Revised\n- Buyer: H.G. Hawa & Co\n- Contact: Afroz\n\nProduct Specifications:\n- Grade: 16BF/120GSM\n- Quantities:\n  * 32" - 3 Reels\n  * 34" - 10 Reels\n  * 38" - 4 Reels\n  * 40" - 5 Reels\n  * 46" - 3 Reels\n  * 49.5" - 2 Reels\n  * 62" - 3 Reels\n- Total: 30 Reels\n\nCommercial Terms:\n- Agreed Rate: ₹28.50/kg\n- Basic Rate: ₹30.00/kg\n- Total Value: ₹2,45,000\n\nDelivery Details:\n- End Customer: Indore Packaging Industries\n- Consignee: Gat No. 94, Bhalekar Chowk, Pune - 412114\n- Timeline: Urgent dispatch required\n\nPlease confirm receipt and provide dispatch timeline.\n\nBest regards,\nH.G. Hawa & Co`,
    createdAt: '2025-01-27T10:30:00Z'
  },
  {
    id: '2',
    poNumber: 'PO-467',
    supplierCompany: 'Sankalp Paper',
    endCustomer: 'Saisha Enterprises',
    totalValue: 189500,
    status: 'sent',
    buyerCompany: 'H.G. Hawa & Co',
    buyerContact: 'Rahul',
    supplierEmail: 'sales@sankalppapers.com',
    consigneeAddress: 'Plot 45, Industrial Area, Nagpur - 440008',
    poDate: '21.08.2025',
    revisionStatus: 'Original',
    urgencyLevel: 'Standard',
    productCategory: 'Paper',
    primaryGrade: '18BF',
    technicalSpecs: '110GSM, dimensions: 36", 42", 48"',
    manufacturingFacility: 'Sankalp Paper Mill',
    unitOfMeasure: 'Reels',
    totalQuantity: '25 Reels',
    basicRate: 32.00,
    agreedRate: 30.50,
    currency: 'INR',
    buyerGST: '27AAAFH3584L1Z3',
    supplierGST: '27BBBSP1234M1Z5',
    deliveryTimeline: 'Within 7 days',
    originalMessage: 'To Sankalp Paper, Agreed 30.50 / basic rate 32, 18bf/110gsm, 1) 36 - 8 Reel, 2) 42 - 10 Reel, 3) 48 - 7 Reel. Total 25 Reel. PO 467 dt 21.08.25. End customer: Saisha Enterprises.',
    generatedEmail: 'Generated email content for PO-467...',
    createdAt: '2025-01-27T09:15:00Z'
  },
  {
    id: '3',
    poNumber: 'PO-466',
    supplierCompany: 'Aryan Paper Mill',
    endCustomer: 'Mumbai Traders',
    totalValue: 312000,
    status: 'processing',
    buyerCompany: 'H.G. Hawa & Co',
    buyerContact: 'Priya',
    supplierEmail: 'info@aryanpapers.in',
    consigneeAddress: 'Warehouse 12, Bhiwandi - 421302',
    poDate: '21.08.2025',
    revisionStatus: 'Original',
    urgencyLevel: 'High',
    productCategory: 'Paper',
    primaryGrade: '20BF',
    technicalSpecs: '130GSM, dimensions: 44", 52"',
    manufacturingFacility: 'Aryan Paper Mill',
    unitOfMeasure: 'Reels',
    totalQuantity: '40 Reels',
    basicRate: 28.00,
    agreedRate: 26.50,
    currency: 'INR',
    buyerGST: '27AAAFH3584L1Z3',
    supplierGST: '[Pending]',
    deliveryTimeline: 'Within 5 days',
    originalMessage: 'To Aryan Paper Mill, Agreed 26.50 / basic rate 28, 20bf/130gsm, 1) 44 - 25 Reel, 2) 52 - 15 Reel. Total 40 Reel. PO 466 dt 21.08.25. End customer: Mumbai Traders.',
    generatedEmail: 'Generated email content for PO-466...',
    createdAt: '2025-01-27T08:45:00Z'
  },
  {
    id: '4',
    poNumber: 'PO-465',
    supplierCompany: 'Best Paper Mill',
    endCustomer: 'Delhi Packaging',
    totalValue: 156800,
    status: 'sent',
    buyerCompany: 'H.G. Hawa & Co',
    buyerContact: 'Amit',
    supplierEmail: 'orders@bestpapermill.com',
    consigneeAddress: 'Sector 58, Noida - 201301',
    poDate: '20.08.2025',
    revisionStatus: 'Original',
    urgencyLevel: 'Standard',
    productCategory: 'Paper',
    primaryGrade: '14BF',
    technicalSpecs: '100GSM, dimensions: 30", 35"',
    manufacturingFacility: 'Best Paper Mill',
    unitOfMeasure: 'Reels',
    totalQuantity: '20 Reels',
    basicRate: 25.00,
    agreedRate: 23.50,
    currency: 'INR',
    buyerGST: '27AAAFH3584L1Z3',
    supplierGST: '09CCCBP5678N1Z2',
    deliveryTimeline: 'Within 10 days',
    originalMessage: 'To Best Paper Mill, Agreed 23.50 / basic rate 25, 14bf/100gsm, 1) 30 - 12 Reel, 2) 35 - 8 Reel. Total 20 Reel. PO 465 dt 20.08.25.',
    generatedEmail: 'Generated email content for PO-465...',
    createdAt: '2025-01-26T16:20:00Z'
  },
  {
    id: '5',
    poNumber: 'PO-464',
    supplierCompany: 'Krafton Mills',
    endCustomer: 'Pune Industries',
    totalValue: 278400,
    status: 'failed',
    buyerCompany: 'H.G. Hawa & Co',
    buyerContact: 'Neha',
    supplierEmail: 'sales@kraftonmills.com',
    consigneeAddress: 'Hinjewadi Phase 2, Pune - 411057',
    poDate: '20.08.2025',
    revisionStatus: 'Original',
    urgencyLevel: 'Medium',
    productCategory: 'Paper',
    primaryGrade: '22BF',
    technicalSpecs: '140GSM, dimensions: 38", 45"',
    manufacturingFacility: 'Krafton Mills',
    unitOfMeasure: 'Reels',
    totalQuantity: '35 Reels',
    basicRate: 31.00,
    agreedRate: 29.50,
    currency: 'INR',
    buyerGST: '27AAAFH3584L1Z3',
    supplierGST: '[Invalid Email]',
    deliveryTimeline: 'Within 6 days',
    originalMessage: 'To Krafton Mills, Agreed 29.50 / basic rate 31, 22bf/140gsm, 1) 38 - 20 Reel, 2) 45 - 15 Reel. Total 35 Reel. PO 464 dt 20.08.25.',
    generatedEmail: 'Failed to generate - invalid supplier email',
    createdAt: '2025-01-26T14:10:00Z'
  }
];

export const liveActivities = [
  { id: 1, icon: '📱', message: 'WhatsApp received from +91810...', timestamp: '2 min ago' },
  { id: 2, icon: '🔍', message: "Extracting supplier: 'Greentex Paper Mill'", timestamp: '2 min ago' },
  { id: 3, icon: '🤖', message: 'AI processing: 16BF/120GSM, 112 Tons total', timestamp: '2 min ago' },
  { id: 4, icon: '✉️', message: 'Email draft created for greentexrpl@gmail.com', timestamp: '1 min ago' },
  { id: 5, icon: '✅', message: 'Sent to supplier successfully', timestamp: '1 min ago' },
  { id: 6, icon: '📱', message: 'WhatsApp received from +91987...', timestamp: '5 min ago' },
  { id: 7, icon: '🔍', message: "Extracting supplier: 'Sankalp Paper'", timestamp: '4 min ago' },
  { id: 8, icon: '✅', message: 'Order PO-467 processed successfully', timestamp: '3 min ago' }
];