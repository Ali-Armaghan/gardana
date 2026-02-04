import Ellips01 from '@/components/icons/ellips01'
import Image from 'next/image'
// import ExcludeImg from '@/assets/images/Exclude.png'
import ExcludeImg from '@/assets/images/CenterTree.png'
import WingsImg from '@/assets/images/pngwing.png'
import Logo from '@/components/icons/logo'
import { Theme } from '@/lib/theme'
import Button from '@/components/ui/Button'
import PlayIcon from '@/components/icons/playicon'
import EllipseWhite from '@/components/icons/ellipswhite'


const Home = () => {
    return (
        // parent
        <div>
            {/* Hero Section => section 01 */}
            <div className='w-full h-screen bg-[#113014] overflow-hidden'>
                {/* layer 1 */}
                <div className='relative flex w-full justify-center'>
                    <div className='absolute left-0 z-0'><Ellips01 /></div>
                    {/* logo */}
                    <div className='absolute flex gap-2 top-[64px] left-[74px] z-10'>
                        <Logo />
                        <p className='text-white text-[28px] mt-7'
                            style={{
                                fontFamily: Theme.fonts.default,
                                fontWeight: Theme.fonts.weight.semibold,
                            }}
                        >Gardena</p>
                    </div>
                    {/* center tree */}
                    <div className='absolute top-0 z-10 hidden lg:block'>
                        <Image
                            src={ExcludeImg}
                            alt="tree"
                            width={608}
                            height={824}
                            priority
                        />
                    </div>

                    <div className='absolute top-60 right-40 z-0 opacity-80'>
                        <Ellips01 />
                    </div>
                    {/* wings */}
                    <div className='absolute left-[20%] z-10 hidden lg:block'>
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
                    {/* heading */}
                    <div className='absolute text-[80px] w-[410px] left-[87px] top-[278px]'>
                        <h1 className='text-white leading-[106%]'
                            style={{
                                fontFamily: Theme.fonts.default,
                                fontWeight: Theme.fonts.weight.semiNormal,
                            }}
                        >
                            Keep Your
                            Plant Alive
                        </h1>
                    </div>
                    {/* paragraph */}
                    <div className='absolute text-[18px] w-[476px] left-[87px] top-[474px]'>
                        <p className='text-white leading-[127%]' style={{
                            fontFamily: Theme.fonts.default,
                            fontWeight: Theme.fonts.weight.normal,
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam,                        </p>
                    </div>
                    {/* Action Buttons */}
                    <div className='absolute left-[87px] top-[570px] w-[410px] flex items-center gap-6'>
                        <Button text="Grow Now"
                            width={146}
                            height={60}
                        />
                        <div className='flex items-center gap-4'>
                            <PlayIcon />
                            <p className='text-white text-[18px]'
                                style={{
                                    fontFamily: Theme.fonts.default,
                                    fontWeight: Theme.fonts.weight.semibold,
                                }}
                            >Demo...</p>
                        </div>
                    </div>
                    {/* ellipse */}
                    <div className='absolute left-0 top-[798px] z-0'>
                        <Ellips01 />
                    </div>
                    {/* right side */}
                    {/* <div className='bg-yellow-300 right-0 absolute w-[550px] h-[600px]'> */}
                    <div className=' right-0 absolute w-[550px] h-[600px]'>
                        <div className='absolute top-0 right-0'>
                            <EllipseWhite />
                        </div>
                        <div className='bg-amber-300 w-[415px] h-[267px] top-[302px] right-[42px] absolute'>

                        </div>
                    </div>
                </div>
            </div>
            {/* section 02 */}
            <div className='w-full h-screen bg-[#113014]'>

            </div>
        </div >
    )
}

export default Home