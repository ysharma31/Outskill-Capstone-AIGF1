import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsCards from './components/StatsCards';
import OrdersTable from './components/OrdersTable';
import LiveFeed from './components/LiveFeed';
import OrderModal from './components/OrderModal';
import { sampleOrders, liveActivities, Order } from './data/sampleData';

function App() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Stats Cards */}
          <div className="lg:col-span-3">
            <StatsCards />
          </div>
          
          {/* Middle Column - Orders Table */}
          <div className="lg:col-span-6">
            <OrdersTable 
              orders={sampleOrders} 
              onOrderClick={handleOrderClick}
            />
          </div>
          
          {/* Right Column - Live Feed */}
          <div className="lg:col-span-3">
            <LiveFeed activities={liveActivities} />
          </div>
        </div>
      </div>

      <OrderModal 
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;