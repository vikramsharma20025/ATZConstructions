import Dashboard from "@/components/Dashboard";
import NavigationTop from "@/components/Navbar/Navbar";
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center justify-between">
            {/* <NavigationTop /> */}
            <div className="w-11/12 h-[90%] my-auto border-4 flex flex-col justify-center py-16 border-[#922f25]">
                <div className="h-20 w-20 mx-auto">
                    <ReportProblemRoundedIcon className="w-full h-full" />
                </div>
                <div className="md:text-4xl text-2xl  md:leading-normal font-extrabold mx-auto w-fit mt-5 text-center">
                    <h1>At ATZ Constructions We Are <br /> Committed To Safety</h1>
                </div>
                <div className="w-10/12 text-center mx-auto mt-5">
                    <p>Rest assured, when you partner with ATZ Constructions, you get what you need, when you need it, and in the safest way possible. Our mission? To make every site incident-free every time. All our employees are educated in CPR, First Aid, Blood Borne Pathogens and OSHA 10 and 30, as well as receiving training for individual equipment and specific jobsite requirements. Contact us today to learn out more.</p>
                </div>
                <button className="bg-[#922f25] mx-auto capitalize text-xl text-white font-bold rounded-full w-52 px-8 hover:bg-black mx-auto mt-5 h-14">
                    CONTACT US
                </button>
            </div>
        </div>
    );
}
