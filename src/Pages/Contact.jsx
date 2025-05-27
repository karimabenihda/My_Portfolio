import React,{useState} from 'react'
import Magnet from '../Components/Magnet'
import { Github, Linkedin, Mail, MessageCircle, Phone, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
function Contact() {
    const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="!mt-10">
       <div className="!mb-4 flex flex-col items-center justify-center gap-4 text-center">
  <h1 className="text-4xl font-bold">{t("contact.title")}</h1>
  <p className="!text-gray-400">{t("contact.p")}</p>

    </div>
    <div className="sec1 flex flex-col md:flex-row w-full gap-6">
 
 
      <div className="sec1 font-bold text-center md:w-1/2 w-full !mt-6">
{t("contact.div")}
      <div className="flex flex-row justify-center !py-4 gap-5">
<Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full transition duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
            <a href="https://github.com/karimabenihda"
          target="_blank"
          rel="noopener noreferrer">
                 <Github />
          </a>
               </Magnet>
               <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full transition duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
                   <a href="mailto:karimabenihda@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail />
                   </a>
               </Magnet>

               <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
                 
                 <a href="https://www.linkedin.com/in/karima-benihda-3004ba326"
          target="_blank"
          rel="noopener noreferrer" >
                <Linkedin />
               </a>
              </Magnet>
               <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
               <a 
                 href="https://wa.me/212675600489" 
                target="_blank" 
                rel="noopener noreferrer" 
               >   <Phone /> </a>
            
              </Magnet>

      </div>
      </div>

<div className="sec2 w-full md:1/2 rounded-xl bg-[#18181b] transition duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-900/60 hover:-translate-y-1 hover:scale-100  !p-4">
      <div className="font-bold !pb-2 md:w-1/2 w-full !mt-2">{t("contact.info")}</div>
              <form
  action="https://formspree.io/f/mnnjjdpg"
  method="POST">
    
 
   <div className="relative w-full !my-3">
  <span className="absolute left-2 top-2">
                    <User />
                  </span>
    <input type="email" placeholder={t("contact.name_placeholder")} name="name" 
 className="!pl-12 h-10 w-full border border-[#223] bg-[#F6B5790A] focus:outline-none  flex
placeholder:text-placeholder rounded-xl 
focus-visible:border-indigo-400 focus-visible:border-1 
disabled:cursor-not-allowed  md:text-sm font-medium"
    />
  </div>


  <div className="relative w-full ">
  <span className="absolute left-2 top-2">
                    <Mail />
                  </span>
    <input type="email" placeholder={t("contact.email_placeholder")} name="email" 
 className="!pl-12 h-10 w-full focus-visible:border-indigo-400 bt-[#ffff] bg-[#F6B5790A] focus:outline-none  flex 
               placeholder:text-placeholder 
               rounded-xl px-3   focus-visible:border-1 disabled:cursor-not-allowed  md:text-sm font-medium"
    />
  </div>
    {/* <MdEmail className='form-icon'/> */}
  <div className="relative w-full !my-3">
     <span className="absolute left-2 top-2">
                    <MessageCircle />
                  </span>
    <textarea name="message" placeholder={t("contact.message_placeholder")} 
 className="w-full focus-visible:border-indigo-400  !pt-2 h-24 font-medium bg-[#F6B5790A]  placeholder:pl-10 !placeholder:pt-2 rounded-xl"
></textarea>
  </div>
<button type="submit"
     
      className="relative w-full !bg-indigo-500 font-medium
        flex items-center justify-center gap-2
       rounded-xl !p-2 !my-3 overflow-hidden transition-transform duration-500 hover:opacity-90 hover:scale-105  "
    >
      <div className="text-md !text-[#ffff] !py-1 !px-2">{t("contact.button")}</div>
          <Send />
   

</button>
</form>
      </div>
</div>
<div className="!pt-10">
<div className='text-gray-800 border border-gray-800' />
     <div className='text-sm text-center font-semibold text-gray-300 !py-6' > © 2025 Karima BENIHDA. {t("contact.copy")}</div>
</div >

    </div>
  )
}

export default Contact

