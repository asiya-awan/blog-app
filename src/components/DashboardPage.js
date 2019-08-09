import React from 'react';
import BlogsSummary from '../components/BlogsSummary';
import BlogListFilters from '../components/BlogListFilters';
import BlogList from '../components/BlogList';

const DashboardPage = () => (
  <div>
    <BlogsSummary />
    <BlogListFilters />
    <BlogList />
  </div>
);

export default DashboardPage;
