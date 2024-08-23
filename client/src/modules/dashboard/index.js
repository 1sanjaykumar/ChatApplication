import React from "react"
import avata from "../../components/avatar.png"
import Input2 from "../../components/input/input2"
const Dashborad = () => {
    const contects=[
        {
            name:'Shailesh Dewangan',
            status:'available',
            img:avata
        },
        {
            name:'Aditi Sharma',
            status:'available',
            img:avata
        },
        {
            name:'Anshu Sao',
            status:'available',
            img:avata
        },
        {
            name:'Amit Kumar',
            status:'available',
            img:avata
        },
        {
            name:'Nisha Saw',
            status:'available',
            img:avata
        },
        {
            name:'Isha Chandrakar',
            status:'available',
            img:avata
        },
        // {
        //     name:'Harsh Dewangan',
        //     status:'available',
        //     img:avata
        // },
        // {
        //     name:'Deep Shukla',
        //     status:'available',
        //     img:avata
        // },
        // {
        //     name:'Shekhar Gupta',
        //     status:'available',
        //     img:avata
        // },
    ]
  return (
    <div className="w-full h-screen flex ">
      <div className="w-[25%] h-screen  bg-blue-100">
    <div className="flex pl-7 items-center gap-7 ">
        <img src={avata} className="w-[60px] rounded-full my-5"/>
        <div>
            <h3 className="text-2xl font-semibold">Developer</h3>
            <p className="text-xl font-light">My Account</p>
        </div>
    </div>
    <hr/>
    <div className="pl-7 p-5 text-xl text-blue-400">Massages</div>
    <div className="flex flex-col justify-center items-center">
        {
            contects.map(({name,status,img})=>{
                return(
                    <div className=" pl-7 w-full flex items-center gap-7 border-b border-slate-300">
        <img src={img} className="cursor-pointer w-[40px] rounded-full my-5"/>
        <div>
            <h3 className="cursor-pointer text-xl font-semibold">{name}</h3>
            <p className="cursor-pointer text-lg font-light text-gray-600">{status}</p>
        </div>
    </div>
                )
            })
        }
    </div>
        </div>          
      <div className="w-[50%] h-screen flex flex-col items-center overflow-hidden">
        <div className="w-full  flex items-center justify-center shadow-lg shadow-slate-300">
                    <div className="w-[75%] rounded-full bg-blue-100 h-[80px] flex justify-between m-5 shadow-sm shadow-black">
                            <div className=" flex items-center px-4 gap-7">
                                <img src={avata} className="cursor-pointer w-[60px] rounded-full "/>
                                    <div>
                                        <h3 className="cursor-pointer text-2xl font-semibold">Villiem Butcher</h3>
                                        <p className="cursor-pointer text-xl font-light">Online</p>
                                    </div>
                                </div>
                            <div className="p-7 cursor-pointer">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 6h6m-3 -3v6" /></svg>
                        </div>
                </div>
                </div>
                <div className="w-full h-[75%] overflow-y-scroll ">
                    <div className="w-full  py-5 px-5">
                        <div className="p-2 w-max max-w-[45%] bg-slate-300 rounded-bl-xl rounded-tr-xl rounded-br-xl text-lg">
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="text-lg p-2 max-w-[45%] bg-blue-500 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto">
                            chheenk kapak dam dam bro
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="p-2 w-max max-w-[45%] bg-slate-300 rounded-bl-xl rounded-tr-xl rounded-br-xl text-lg">
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="text-lg p-2 max-w-[45%] bg-blue-500 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto">
                            chheenk kapak dam dam bro
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="p-2 w-max max-w-[45%] bg-slate-300 rounded-bl-xl rounded-tr-xl rounded-br-xl text-lg">
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="text-lg p-2 max-w-[45%] bg-blue-500 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto">
                            chheenk kapak dam dam bro
                            it's been a long day without
                        </div>
                        <div className="p-2 w-max max-w-[45%] bg-slate-300 rounded-bl-xl rounded-tr-xl rounded-br-xl text-lg">
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="text-lg p-2 max-w-[45%] bg-blue-500 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto">
                            chheenk kapak dam dam bro
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="p-2 w-max max-w-[45%] bg-slate-300 rounded-bl-xl rounded-tr-xl rounded-br-xl text-lg">
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="text-lg p-2 max-w-[45%] bg-blue-500 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto">
                            chheenk kapak dam dam bro
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="p-2 w-max max-w-[45%] bg-slate-300 rounded-bl-xl rounded-tr-xl rounded-br-xl text-lg">
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                        <div className="text-lg p-2 max-w-[45%] bg-blue-500 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto">
                            chheenk kapak dam dam bro
                            it's been a long day without you my friend.
                            chheenk kapak dam dam bro
                        </div>
                    </div>
                </div>
                <div className="w-max flex items-center h-[80px] border-t gap-5">
                    <Input2 className="bg-blue-100 text-black px-5 w-[35vw] shadow-lg outline-none rounded-full" placeholder="Type Massage Here" name="Type massage" type="text" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                    <svg className="cursor-pointer"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-photo-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" /><path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                </div>
        </div>   
      <div className="w-[25%] h-screen "></div>                                                  
    </div>
  )
};

export default Dashborad;
