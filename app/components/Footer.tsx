

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 py-7">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-4 items-center text-center sm:text-left">
      <p>© 2024 Rent a Car. All rights reserved.</p>
      
       {/* Social media links */} 
       <div className="flex space-x-4">
         <a href="#" className="text-white hover:text-gray-300">Facebook</a>
         <a href="#" className="text-white hover:text-gray-300">Twitter</a>
         <a href="#" className="text-white hover:text-gray-300">Instagram</a>
       </div>
       </div>
    </footer>
    


  )
}

export default Footer