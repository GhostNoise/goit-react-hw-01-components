import React from 'react';
import userAssets from '../assets/userProfile';
import statsAssets from '../assets/statsInfo';
import pricingPlanItems from '../assets/pricing-plan.json';
import transactions from '../assets/transactions.json';

import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import PricingPlan from './Pricing/PricingPlan';
import TransactionHistory from './Transactions/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile user={userAssets} />
      <Stats title="Upload stats" stats={statsAssets} />
      <PricingPlan items={pricingPlanItems} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
