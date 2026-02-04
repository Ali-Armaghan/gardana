import Ellips01 from '@/components/icons/ellips01'
import Ellips02 from '@/components/icons/ellips02'
import Image from 'next/image'
// import ExcludeImg from '@/assets/images/Exclude.png'
import ExcludeImg from '@/assets/images/CenterTree.png'
import WingsImg from '@/assets/images/pngwing.png'
import Logo from '@/components/icons/logo'


const Home = () => {
    return (
        // parent
        <div>
            {/* section 01 */}
            <div className='w-full h-screen bg-[#113014] overflow-hidden'>
                {/* layer 1 */}
                <div className='relative flex w-full justify-center h-screen'>
                    <div className='absolute left-0 z-0'><Ellips01 /></div>
                    {/* logo */}
                    <div className='absolute flex items-center gap-2 top-[64px] left-[74px] z-10'>
                        <Logo />
                        <p className='text-white text-[28px] font-poppins'>Gardena</p>
                    </div>
                    {/* center tree */}
                    <div className='absolute top-0 z-10 hidden lg:block'>
                        <Image
                            src={ExcludeImg}
                            alt="tree"
                            width={508}
                            height={724}
                            priority
                        />

                    </div>
                    <div className='absolute top-0 z-0'>
                        <Ellips02 />
                    </div>
                    {/* wings */}
                    <div className='absolute left-[25%] z-10 hidden lg:block'>
                        <div>
                            <Image
                                src={WingsImg}
                                alt="tree"
                                width={623}
                                height={623}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home