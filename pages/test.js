import Footer from '@components/Footer'
import Header from '@components/Header'
import { attributes } from '../content/pages/test.md';

export default function Test() {
  const { test_title, test_description } = attributes;  

  return (
    <div className="container">      
      <main>
        <Header title={test_title} />        

        <p className="description">
          {test_description} 
        </p>
      </main>

      <Footer />
    </div>
  )
}