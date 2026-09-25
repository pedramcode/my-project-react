export function HomePage() {
    return (
        <div className="
            w-dvw 
            h-dvh 
            flex
            flex-col
            bg-gray-900
        ">
            <div className="
            bg-blue-50
            w-[80%]
            py-10
            mx-auto
            my-10
            rounded-2xl
            flex
            flex-col
            px-20
            ">
                <nav className="
                    flex
                    flex-col
                    w-full
                    mb-5
                ">
                    <ul className="
                        flex
                        flex-row
                        m-0
                        p-0
                        w-full
                        justify-end
                        gap-10
                    ">
                        <li className=""><a href="#" className="text-xl">Home</a></li>
                        <li><a href="#" className="text-xl">About Me</a></li>
                        <li><a href="#" className="text-xl">Contact</a></li>
                        <li><a href="#" className="text-xl">Resume</a></li>
                    </ul>
                </nav>
                <header className="
                    flex
                    flex-col
                    gap-3
                    my-10
                ">
                    <div className="
                        text-6xl
                        text-blue-800
                        font-bold
                    ">John Doe</div>
                    <div className="
                        text-3xl
                        font-thin
                        text-blue-600
                    ">Full-stack developer</div>
                </header>
                <div className="w-full h-[1px] rounded-full bg-blue-900 my-10"></div>
            </div>
        </div>
    )
}