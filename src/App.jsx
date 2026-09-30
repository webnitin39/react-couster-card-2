import Center from "./components/Section-1/Center"
import Navbar from "./components/Section-1/Navbar"


const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'A working professional who values simple and reliable financial services.',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1605973149643-5d9e1cf4a139?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmtpbmclMjBob3QlMjBnaXJsfGVufDB8fDB8fHww',
      intro: 'A customer looking for better access to convenient and affordable services.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1728485297948-7a86ffb7a1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMzfHx3b3JraW5nJTIwaG90JTIwZ2lybCUyMHByb2Zhc3Rpb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      color:'orange',
      intro: 'A customer who has limited access to traditional banking and financial products.',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'pink',
      intro: 'A young customer who prefers modern, convenient and easy-to-use services',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1616065297556-f05bc00c9a3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc3fHx3b3JraW5nJTIwaG90JTIwZ2lybCUyMHByb2Zhc3Rpb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'An everyday customer with average needs who prefers a straightforward experience.',
      color:'black',
      tag:'Average'
    }
  ]

function App() {
  return (
   <div className="w-full h-full ">
    <Navbar />
    <Center users={users} />
   </div>
  )
}

export default App