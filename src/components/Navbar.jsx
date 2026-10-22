import vidioBelajarLogo from "../assets/images/logo.png";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-20 w-full border-b border-white border-b-gray-300 bg-white">
			<div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-30">
				<a href="/">
					<img src={vidioBelajarLogo} alt="vidio-belajar-logo" />
				</a>

				<div>
					
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
