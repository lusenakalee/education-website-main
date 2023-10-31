import AboutHeader from "../components/AboutHeader"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/container/Footer"

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Established in 2006, the Social and Economic Research Foundation (SERF) has emerged as a leading institution dedicated to advancing knowledge in policy options and development management. SERF was founded on the critical assumption that there was a pressing need for a deeper understanding of complex policy issues, coupled with a lack of capacity in this area.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'At SERF, our core objectives revolve around intensive policy and economic management research, targeted capacity development across various sectors related to policy and socio-economic matters, and efficient knowledge management. Over a span of seventeen years, we have honed our expertise and established ourselves as a pioneering think tank, delving into the intricacies of policy options and development management challenges.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Our commitment to empowering professionals and decision-makers sets us apart. Through comprehensive training programs and knowledge dissemination initiatives, we equip individuals with the insights and skills needed to make informed decisions. Moreover, our dedication to transparent knowledge management ensures our research findings are widely accessible, enriching communities and fostering evidence-based practices.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  

  // More posts...
]

export default function AboutPage() {
  return (
    <div>
      <Navbar/>
          <AboutHeader/>
    <div className="bg-white pb-12 lg:pb-12  ">
      <div className="mx-auto max-w-7xl px-6 pt-0 lg:px-8">
      
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
             
            </article>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
