const Footer = () =>{
    return(
    <section className="c-space pt-7 pb-3 border-3 border-black-300 flex justify-between items-center flex-wrap">
        <div className="text-white-500 flex gap-2">
            <p className="flex flex-row gap-2">Made with <img src="/assets/lcode.svg" alt="code" className="w-6 h-6"/>by <span className="text-white font-semibold">Sagar Raj</span></p>
        </div>
        <div className="flex gap-3">
            <div className="social-icon">
                <a href="https://github.com/sagargse" className="flex items-center justify-center"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/></a>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sagar-raj-a910711b2/" className="flex items-center justify-center"><img src="/assets/linkedin.svg" alt="github" className="w-1/2 h-1/2"/></a>
            </div>
            <div className="social-icon">
                <a href="https://x.com/sagarastic_" className="flex items-center justify-center"><img src="/assets/twitter.svg" alt="github" className="w-1/2 h-1/2"/></a>
            </div>
        </div>
        <p className="text-white-500">© 2025 Sagar Raj. All rights reserved.</p>
    </section>
    )
}

export default Footer;