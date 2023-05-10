import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PortfolioLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
            <div key='miau' className="gradient_dia dark:text-blancon dark:gradient_noche relative min-h-screen flex flex-col justify-between" >
                <div>
                    <Header />
                    <div className="pb-[7rem] tablet:pb-[5rem]" >
                <div className='top-0 h-20 tablet:h-[6.8rem]'>
                </div>
                <div className='mx-auto tablet:mx-auto laptop:ml-[27%] desktop:ml-[380px] laptop:mr-auto w-[89%] tablet:w-[82.6%] laptop:w-[67%] desktop:w-[64.7%]'>

                {children}
                        {/* <SideMenu 
                        projects={projects} 
                        outside={outside} 
                        nextData={nextData}
                        blogEntries={blogEntries}/> */}

                </div>
            </div>
                        
                 
                </div>
                <Footer />
            </div>
    );
  }