import React from "react";
import { Menu, Avatar } from "@mantine/core";
import profileMenu from "../assets/images/profileMenu.png";
import { LogOut } from "lucide-react";
import { Link } from "react-router";

export const ProfileMenu: React.FC = () => {
	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<Avatar src={profileMenu} className="cursor-pointer" />
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item>Profil Saya</Menu.Item>
				<Menu.Item>Kelas Saya</Menu.Item>
				<Menu.Item>Pesanan Saya</Menu.Item>
				<Menu.Item color="red">
					<Link to={"/"} className="flex gap-2 items-center">
						<span>Keluar</span> <LogOut size={20} />
					</Link>
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};

export interface MobileMenuProps {
	isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
	return (
		<div
			className={
				isOpen
					? "fixed w-full flex flex-col gap-3 py-3 bg-white border-b border-gray-500 z-10"
					: "hidden"
			}
		>
			<button className="text-start px-4 text-gray-800/80">Profil Saya</button>
			<button className="text-start px-4 text-gray-800/80">Kelas Saya</button>
			<button className="text-start px-4 text-gray-800/80">Pesanan Saya</button>
			<button className="flex gap-2 px-4 text-start text-red-500 hover:bg-gray-100">
				<span>Keluar</span> <LogOut />
			</button>
		</div>
	);
};
