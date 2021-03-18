import { UrlShortener } from 'pages/url-shortener/url-shortener'
import React from 'react'
import { Layout } from './layout/layout'

export const App: React.FC = () => (
  <Layout>
    <UrlShortener />
  </Layout>
)
