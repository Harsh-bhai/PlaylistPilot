import React from 'react'

const Tst = () => {
  return (
    <div><div class="overflow-hidden">
    <div class="bg-gradient-rotate text-white py-10">
      <div class="max-w-3xl mx-auto px-4">
        <h1 class="text-4xl font-bold">Example text</h1>
        <p class="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <style jsx>{`
        @layer utilities {
            .bg-gradient-rotate {
              background: linear-gradient(45deg, #F87171, #34D399, #60A5FA);
              /* adjust the gradient colors and angles to your liking */
            }
          }
          `}</style>
      </div>
      
    </div>
  </div>
  </div>
  )
}

export default Tst