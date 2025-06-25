import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"

const Navbar = ({ dark, setDark }) => {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0()
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef()

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="w-full flex justify-center fixed top-4 z-50">
            <div className="w-[95%] md:w-[90%] lg:w-[80%] bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 rounded-2xl shadow-lg flex justify-between items-center">
                {/* Logo as Home link */}
                <button onClick={() => setShowDropdown(false)}>
                    <Link to="/" className="text-xl font-bold">StriAiVer</Link>
                </button>

                {/* Right section */}
                <div className="relative flex items-center gap-6" ref={dropdownRef}>
                    {/* Resources Dropdown */}
                    <Link to="/chat" className="px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                        AI Chat
                    </Link>
                    <div >
                        <button
                            className="flex items-center gap-1 font-semibold hover:text-orange-500"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            Resources <ChevronDown size={16} />
                        </button>

                        {showDropdown && (
                            <div className="absolute top-full mt-2 bg-white dark:bg-zinc-700 border dark:border-zinc-600 rounded-xl shadow-lg w-48 p-2 space-y-1 z-10">
                                <Link to="/dsa" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded">DSA Sheet</Link>
                                <Link to="/design" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded">Design Sheet</Link>
                                <Link to="/core" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded">Core Subjects</Link>
                                <Link to="/cp" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded">Competitive Programming</Link>
                            </div>
                        )}
                    </div>

                    {/* Dark Mode Toggle */}
                    <button onClick={() => setDark(!dark)}>
                        {dark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <div className="flex items-center gap-4">
                        {!isLoading && isAuthenticated ? (
                            <>
                                <span className="text-sm font-medium">
                                    👋 {user.name}
                                </span>
                                <button
                                    onClick={() =>
                                        logout({
                                            logoutParams: {
                                                returnTo: window.location.origin,
                                            },
                                        })
                                    }
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={loginWithRedirect}
                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar