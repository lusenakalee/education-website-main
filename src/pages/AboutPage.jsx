import {
  ChevronUpDownIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BeakerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Footer, Navbar } from "../components";

const features = [
  {
    name: "Strategic Research.",
    description:
    `Strategic Research, conducted by the Social and Economic Research Foundation (SERF), serves as the cornerstone of informed decision-making in the area of policy formulation and analysis. At SERF, we engage in rigorous policy research and analysis, aiming to enhance stakeholders’ understanding by generating robust research evidence. This evidence, a pivotal input, influences economic, social, and various policy-making processes. Our strategic research methodology is multifaceted, encompassing both demand and supply-driven research initiatives. These efforts are meticulously planned and implemented to address the ever-changing socio-economic landscape. We focus on key areas of national, regional, and global significance, adapting our approach to respond effectively to emerging economic policies, the dynamics of political governance, and the social-economic challenges arising from shifts in the economic environment.
    SERF's research agenda is not static; it dynamically evolves in response to the changing paradigms of economic policies and the intricacies of political governance. Moreover, we remain attuned to the global stage, where emerging issues increasingly demand research-backed evidence. Consequently, our strategic research initiatives are not only locally relevant but also globally informed, ensuring that our findings resonate on an international scale.
    By aligning our research processes with the evolving economic and political landscape, SERF contributes significantly to addressing contemporary challenges. Our research-driven insights empower policymakers and stakeholders, fostering a more informed, responsive, and adaptive approach to policy formulation and implementation. Through our strategic research, we continue to shape the discourse on economic policies and social development, making a lasting impact on both national and global levels.
    `,
    
    icon: ChartBarIcon,
  },
  {
    name: "Custom-made Research.",
    description:
      `At SERF, our core mission revolves around conducting demand-driven research and providing advisory services to a diverse spectrum of stakeholders. Our fundamental activities encompass conducting targeted policy research tailored to specific demands, preparing comprehensive proposals and expressions of interest for consultancy assignments, proficiently managing projects, and disseminating the resulting consultancy reports.
      Our expertise lies in an array of crucial areas including policy formulation and review, sector strategy development, impact assessment studies, and the development of country strategies for various programs. Additionally, we engage in conducting baseline surveys, feasibility studies, strategic plans, and a variety of socio-economic policy research projects. Through these initiatives, we actively contribute to shaping informed policies and strategies that foster positive socio-economic change.
      By adhering to a demand-driven approach, SERF ensures that our research and advisory services directly address the unique needs and challenges faced by our stakeholders. Through meticulous project management and the widespread dissemination of our research findings, we empower decision-makers with valuable insights. Our commitment lies in bridging the gap between research and practical application, fostering effective policy formulation and implementation processes that drive meaningful development outcomes.
      SERF's dedication to providing high-quality, evidence-based solutions remain unwavering. Through our specialized research and advisory services, we continue to make significant contributions to the fields of policy development, strategy formulation, and socio-economic progress, ultimately shaping a better, more informed future for our stakeholders and communities.
      `,
    icon: BeakerIcon,
  },
  {
    name: "Knowledge and Innovation.",
    description:
     `A central pillar of SERF's mission is to provide vital support not only to the Foundation but also to our nation and the broader region. We accomplish this through our core functions, which include rigorous policy analysis, effective development management, and impactful research communication. Our focus extends beyond mere analysis; we actively work to adapt innovations to our local environment, ensuring relevance and applicability.
     Furthermore, SERF plays a crucial role in disseminating the wealth of knowledge accumulated by the Foundation and our collaborative partners. Through our robust online platforms and physical channels, we facilitate the widespread sharing of insights and discoveries. By doing so, we broaden the reach of valuable information, ensuring that it reaches diverse audiences. This commitment to effective communication is integral to our mandate, promoting informed decision-making and contributing to positive change within our society and the broader region.
     `,
    icon: AcademicCapIcon,
  },
  {
    name: "Governance and Capacity Development.",
    description:
     `SERF plays a pivotal role in Governance and Capacity Development, aligning with the core objectives of the Foundation. One of our primary mandates is to bolster the national workforce in the field of policy analysis and development management. To achieve this, SERF undertakes a diverse array of activities aimed at enhancing capacities for policy analysis at various levels, including macro, sectoral, and local government levels.
     Our role extends beyond traditional boundaries. SERF is dedicated to building the capacities of an extensive range of development stakeholders within the country. This includes researchers and policymakers, ensuring they are equipped with the necessary knowledge and skills. By facilitating capacity strengthening, we empower key categories of development stakeholders. These include the Government, Academia and Higher Learning Institutions, Civil Society and Non-Governmental Organizations, UN Agencies and International Organizations, the private sector, the media, and faith-based organizations.
     Through targeted training programs, workshops, and knowledge-sharing initiatives, SERF actively contributes to the growth and proficiency of these stakeholders. By fostering a comprehensive understanding of policy analysis and development management, we enable a more informed, skilled, and adaptable workforce. This, in turn, enhances the effectiveness of governance structures and promotes sustainable development practices. SERF's commitment lies in shaping capable and knowledgeable leaders and professionals who can navigate the complexities of policy analysis and contribute meaningfully to the socio-economic progress.
     `,
    icon: ArrowTrendingUpIcon,
  },
];

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  About SERF
                </h2>
               
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Established in 2006, the Social and Economic Research
                  Foundation (SERF) has emerged as a leading institution
                  dedicated to advancing knowledge in policy options and
                  development management. SERF was founded on the critical
                  assumption that there was a pressing need for a deeper
                  understanding of complex policy issues, coupled with a lack of
                  capacity in this area. 
                  <br/>
                  <br/>
                 
                  
                  At SERF, our core objectives revolve
                  around intensive policy and economic management research,
                  targeted capacity development across various sectors related
                  to policy and socio-economic matters, and efficient knowledge
                  management. Over a span of seventeen years, we have honed our
                  expertise and established ourselves as a pioneering think
                  tank, delving into the intricacies of policy options and
                  development management challenges. 
                  <br/>
                  <br/>
                  Our commitment to
                  empowering professionals and decision-makers sets us apart.
                  Through comprehensive training programs and knowledge
                  dissemination initiatives, we equip individuals with the
                  insights and skills needed to make informed decisions.
                  Moreover, our dedication to transparent knowledge management
                  ensures our research findings are widely accessible, enriching
                  communities and fostering evidence-based practices. 
                  <br/>
                  <br/>
                  SERF’s
                  legacy is defined by its unwavering dedication to bridging
                  knowledge gaps. By disseminating valuable insights, we
                  contribute significantly to informed policy discourse and
                  decision-making processes. Explore our website to discover our
                  publications, workshops, and collaborations, and join us in
                  our mission to shape a future rooted in informed, effective
                  policies.
                </p>
                
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/2946979/pexels-photo-2946979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="mx-24 my-24">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  WHAT WE DO
                </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
      </div>
      <Footer />
    </div>
  );
}
