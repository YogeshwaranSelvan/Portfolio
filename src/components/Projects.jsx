import React from 'react'
import Krish from '../assets/Krish.png'
import Netflix from '../assets/Netflix.png'
import EcommerceSite from '../assets/EcommerceSite.png'
import AdminDashboard from '../assets/AdminDashboard.png'
import ProductStore from '../assets/ProductStore.png'
import Portfolio from '../assets/Portfolio.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Krish Photography Studio',
          desc: 'Krish Photography is a fully responsive static webpage, crafted with HTML, CSS and JavaScript, showcasing stunning visuals for a photography studio.',
          image: Krish,
          live: "https://yogeshwaranselvan.github.io/krish-photography/",
          github: "https://github.com/YogeshwaranSelvan/krish-photography"
        },
        {
          title: 'Portfolio',
          desc: 'Portfolio Website is a responsive React application designed to showcase projects, offering a sleek and professional online presence.',
          image: Portfolio,
          github: ""
        },
        {
          title: 'Netflix Clone',
          desc: 'Netflix Clone is a React app with a landing page, authentication, and sections for Movies, TV Shows, and Search History management.',
          image: Netflix,
          live: "https://netflix-clone-z0rf.onrender.com/",
          github: "https://github.com/YogeshwaranSelvan/netflix-clone"
        },
        {
          title: 'E-Commerce Store',
          desc: 'E-Commerce Store is a React application offering user authentication, product shopping, Stripe-integrated purchases, and admins for product management.',
          image: EcommerceSite,
          live: "https://ecommerce-store-zpzv.onrender.com/",
          github: "https://github.com/YogeshwaranSelvan/ecommerce-store"
        },
        {
          title: 'Admin Dashboard',
          desc: 'React Admin Dashboard is a responsive template leveraging Tailwind, Framer Motion, and Recharts for sleek design, animations, and data visualization.',
          image: AdminDashboard,
          live: "https://react-admin-dashboard-git-main-yogeshwaran-selvans-projects.vercel.app/",
          github: "https://github.com/YogeshwaranSelvan/react-admin-dashboard"
        },
        {
          title: 'Product Store',
          desc: 'Product Store is a simple MERN app allowing users to create, update, and delete products. Designed for efficiency and responsive design. ',
          image: ProductStore,
          live: "https://product-store-u02d.onrender.com/",
          github: "https://github.com/YogeshwaranSelvan/product-store"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items} key={items} />
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects