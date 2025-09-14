import React from 'react';
import { X, Building, User, Mail, MapPin, Calendar, Package, DollarSign, FileText, MessageSquare, ChevronDown, ChevronRight } from 'lucide-react';
import { Order } from '../data/sampleData';

interface OrderModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ order, isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({
    business: true,
    metadata: true,
    product: true,
    commercial: true,
    administrative: false,
    whatsapp: false,
    email: false
  });

  if (!isOpen || !order) return null;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const SectionHeader: React.FC<{ title: string; icon: React.ReactNode; sectionKey: string }> = ({ title, icon, sectionKey }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {expandedSections[sectionKey] ? (
        <ChevronDown className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronRight className="h-5 w-5 text-gray-500" />
      )}
    </button>
  );

  const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between py-2">
      <span className="text-sm text-gray-600">{label}:</span>
      <span className="text-sm text-gray-900 font-medium">{value}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Order Details - {order.poNumber}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6 space-y-6">
          {/* Core Business Entities */}
          <div>
            <SectionHeader 
              title="Core Business Entities" 
              icon={<Building className="h-5 w-5 text-blue-600" />}
              sectionKey="business"
            />
            {expandedSections.business && (
              <div className="mt-4 bg-white border rounded-lg p-4 space-y-2">
                <InfoRow label="Buyer Company" value={order.buyerCompany} />
                <InfoRow label="Buyer Contact" value={order.buyerContact} />
                <InfoRow label="Supplier Company" value={order.supplierCompany} />
                <InfoRow label="Supplier Email" value={order.supplierEmail} />
                <InfoRow label="End Customer" value={order.endCustomer} />
                <InfoRow label="Consignee Address" value={order.consigneeAddress} />
              </div>
            )}
          </div>

          {/* Purchase Order Metadata */}
          <div>
            <SectionHeader 
              title="Purchase Order Metadata" 
              icon={<FileText className="h-5 w-5 text-green-600" />}
              sectionKey="metadata"
            />
            {expandedSections.metadata && (
              <div className="mt-4 bg-white border rounded-lg p-4 space-y-2">
                <InfoRow label="PO Number" value={order.poNumber.replace('PO-', '')} />
                <InfoRow label="PO Date" value={order.poDate} />
                <InfoRow label="Revision Status" value={order.revisionStatus} />
                <InfoRow label="Urgency Level" value={order.urgencyLevel} />
              </div>
            )}
          </div>

          {/* Product Specifications */}
          <div>
            <SectionHeader 
              title="Product Specifications" 
              icon={<Package className="h-5 w-5 text-purple-600" />}
              sectionKey="product"
            />
            {expandedSections.product && (
              <div className="mt-4 bg-white border rounded-lg p-4 space-y-2">
                <InfoRow label="Product Category" value={order.productCategory} />
                <InfoRow label="Primary Grade" value={order.primaryGrade} />
                <InfoRow label="Technical Specs" value={order.technicalSpecs} />
                <InfoRow label="Manufacturing Facility" value={order.manufacturingFacility} />
                <InfoRow label="Unit of Measure" value={order.unitOfMeasure} />
                <InfoRow label="Total Quantity" value={order.totalQuantity} />
              </div>
            )}
          </div>

          {/* Commercial Terms */}
          <div>
            <SectionHeader 
              title="Commercial Terms" 
              icon={<DollarSign className="h-5 w-5 text-green-600" />}
              sectionKey="commercial"
            />
            {expandedSections.commercial && (
              <div className="mt-4 bg-white border rounded-lg p-4 space-y-2">
                <InfoRow label="Basic Rate" value={`₹${order.basicRate.toFixed(2)}/kg`} />
                <InfoRow label="Agreed Rate" value={`₹${order.agreedRate.toFixed(2)}/kg`} />
                <InfoRow label="Currency" value={order.currency} />
                <InfoRow label="Total Value" value={formatCurrency(order.totalValue)} />
              </div>
            )}
          </div>

          {/* Administrative Details */}
          <div>
            <SectionHeader 
              title="Administrative Details" 
              icon={<User className="h-5 w-5 text-orange-600" />}
              sectionKey="administrative"
            />
            {expandedSections.administrative && (
              <div className="mt-4 bg-white border rounded-lg p-4 space-y-2">
                <InfoRow label="Buyer GST" value={order.buyerGST} />
                <InfoRow label="Supplier GST" value={order.supplierGST} />
                <InfoRow label="Delivery Timeline" value={order.deliveryTimeline} />
              </div>
            )}
          </div>

          {/* Original WhatsApp Message */}
          <div>
            <SectionHeader 
              title="Original WhatsApp Message" 
              icon={<MessageSquare className="h-5 w-5 text-green-500" />}
              sectionKey="whatsapp"
            />
            {expandedSections.whatsapp && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-gray-800 whitespace-pre-wrap">{order.originalMessage}</p>
              </div>
            )}
          </div>

          {/* Generated Email Preview */}
          <div>
            <SectionHeader 
              title="Generated Email Preview" 
              icon={<Mail className="h-5 w-5 text-blue-600" />}
              sectionKey="email"
            />
            {expandedSections.email && (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">{order.generatedEmail}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;