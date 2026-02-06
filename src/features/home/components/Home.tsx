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
import Man from '@/components/icons/man'
import Star from '@/components/icons/star'
import Slideicon from '@/components/icons/slideicon'
import Menuicon from '@/components/icons/menuicon'
import SearchIcon from '@/components/icons/searchicon'

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
                    <div className=' right-0 absolute w-[550px] h-[600px]'>
                        <div className='absolute top-0 right-0'>
                            <EllipseWhite />
                        </div>
                        {/* search menu div */}
                        <div className='absolute z-50 w-[361px] h-[53px] right-[90px] top-[79px] flex items-center justify-evenly'>
                            <div className='flex items-center gap-2 w-[146px] h-[53px] px-4 border-2 border-transparent rounded-full bg-[linear-gradient(#334B35,#334B35),linear-gradient(150deg,rgba(255,255,255,0.75),transparent,rgba(255,255,255,0.75))] bg-origin-border [background-clip:padding-box,border-box] relative'>
                                <SearchIcon size={50} />
                                <input type="text" placeholder="" className='bg-transparent border-none outline-none text-white text-[16px] w-full relative z-10' />
                            </div>
                            <p className='text-white text-[20px]'
                                style={{
                                    fontFamily: Theme.fonts.default,
                                    fontWeight: Theme.fonts.weight.medium,
                                }}
                            >Menu</p>
                            <Menuicon />

                        </div>
                        {/* <div className='bg-amber-300 w-[415px] h-[267px] top-[302px] right-[42px] absolute flex justify-end items-end'> */}
                        <div className='  w-[415px] h-[267px] top-[200px] right-[42px] absolute flex justify-end items-end z-0'>
                            <div className=' mb-[-7px] mr-[-30px] z-20'>
                                <Man />
                            </div>
                            {/* bg div */}
                            <div className='absolute h-[112px] w-[367px] z-10 bottom-0 left-0 border-2 border-transparent rounded-[15px] bg-[linear-gradient(#1B371F,#1B371F),linear-gradient(150deg,rgba(255,255,255,0.75),transparent,rgba(255,255,255,0.75))] bg-origin-border [background-clip:padding-box,border-box]'>
                                <div className='ml-[34px] mt-[-15px] w-[78px] h-[28px] bg-[#066400] rounded-[4px] text-center text-[14px] flex justify-center items-center'>
                                    <p
                                        style={{
                                            fontFamily: Theme.fonts.default,
                                            fontWeight: Theme.fonts.weight.semiNormal,
                                        }}
                                    >Available</p>
                                </div>
                                <div className=' w-[172px] h-[60px] mt-[20px] ml-[34px]'>
                                    <p className='text-[18px]'
                                        style={{
                                            fontFamily: Theme.fonts.default,
                                            fontWeight: Theme.fonts.weight.semiNormal,
                                        }}>
                                        Garden maintainer
                                    </p>
                                    <div className='w-fit h-fit flex items-center gap-2'>
                                        <p className='text-white text-[16px]'>4.4</p>
                                        <Star size={18} />
                                        <div className='w-px h-[13px] bg-white mx-[23px]'></div>
                                        <p className='text-white text-[16px]'>1.1k</p>
                                        😄
                                    </div>
                                </div>
                                <div className='absolute top-1/2 right-[34px] -translate-y-1/2'>
                                    <Slideicon />
                                </div>
                            </div>
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