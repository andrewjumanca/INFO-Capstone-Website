import '../style/Test.css'
import { useEffect, useState} from 'react';


function Test() {
  const [shown, setShown] = useState(false);

  useEffect (() => {
    const TestBox = document.querySelector('.Test-box');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShown(true);
          TestBox.classList.add('Test-box--visible');
        }
      });
    }, options);


    observer.observe(TestBox);

    return () => observer.observe(TestBox);
  }, []);
    return (
      <div className={`Test-box${shown ? ' Test-box--visible':''}`}>
        <div className="Test-inner-box">
            <h3 className='Test-heading'>Test</h3>
            <h4 className='Test-sub-heading'>Verfying API Functionality</h4>
        </div> 

        <div className='cards-container'>
            <div class="cards">
                <div class="card product-pages">
                    <p class="tip">Product Pages</p>
                </div>
                <div class="card duplicates">
                    <p class="tip">Duplicates</p>
                </div>
                <div class="card relevency">
                    <p class="tip">Relevancy</p>
                </div>
            </div>
            <p className='description'>Our testing process has confirmed a 100% success rate for each returned link. Verified using AI.</p>
        </div>

      
        
        <div className='Test-section-divider'></div>
      </div>
    );
  }
  
  export default Test;