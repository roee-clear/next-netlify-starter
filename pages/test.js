import Footer from '@components/Footer'
import Header from '@components/Header'

export default function Test() {
  return (
    <div className="container">      
      <main>
        <Header title="This is test!" />

        <p className="description">
          Some test description 
        </p>
      </main>

      <Footer />
    </div>
  )
}