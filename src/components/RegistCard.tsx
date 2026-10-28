import React from "react";
import { PasswordInput, Input, Select } from "@mantine/core";
import googleLogo from "../assets/images/google-logo.png";
import { Link } from "react-router";

const RegistCard: React.FC = () => {
	return (
		<div className="w-full max-w-147.5 rounded-2xl bg-white p-5 sm:p-7 md:p-9">
			<div className="mb-6 flex flex-col items-center text-center sm:mb-8">
				<h1 className="font-poppins text-2xl font-semibold text-[#222325] sm:text-[32px]">
					Pendaftaran Akun
				</h1>
				<p className="text-sm text-[#333333AD] sm:text-base">
					Yuk, daftarkan akunmu sekarang juga!
				</p>
			</div>
			<form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
				<div className="grid">
					<label htmlFor="fullname" className="text-[#4A505C]">
						Nama Lengkap <span className="text-red-500">*</span>
					</label>
					<Input type="text" id="fullname" size="md" />
				</div>
				<div className="grid">
					<label htmlFor="email" className="text-[#4A505C]">
						E-mail <span className="text-red-500">*</span>
					</label>
					<Input type="email" id="email" size="md" />
				</div>
				<div className="grid">
					<label htmlFor="gender" className="text-[#4A505C]">
						Jenis Kelamin <span className="text-red-500">*</span>
					</label>
					<Select id="gender" size="md" data={["Pria", "Wanita"]} />
				</div>
				<div className="grid">
					<label htmlFor="no-hp" className="text-[#4A505C]">
						No. Hp <span className="text-red-500">*</span>
					</label>
					<div className="flex gap-3">
						<Select size="md" data={["+62"]} defaultValue="+62" className="w-1/3" />
						<Input type="tel" id="no-hp" size="md" className="w-full" />
					</div>
				</div>
				<div className="grid">
					<label htmlFor="password" className="text-[#4A505C]">
						Kata Sandi <span className="text-red-500">*</span>
					</label>
					<PasswordInput id="password" size="md" />
				</div>
				<div className="grid">
					<label htmlFor="password-confirmation" className="text-[#4A505C]">
						Konfirmasi Kata Sandi <span className="text-red-500">*</span>
					</label>
					<PasswordInput id="password-confirmation" size="md" />
				</div>
				<div className="text-end">
					<a href="#" className="text-[#4A505C]">
						Lupa Password?
					</a>
				</div>
				<button
					type="submit"
					className="w-full rounded-xl bg-primary py-2 text-white sm:py-2.5"
				>
					Daftar
				</button>
				<Link
					to="/"
					className="w-full text-center rounded-xl bg-[#E2FCD9CC] py-2 text-primary sm:py-2.5"
				>
					Masuk
				</Link>
				<div className="my-2 flex items-center">
					<div className="grow border-t border-gray-200"></div>
					<span className="px-4 text-sm text-gray-500">atau</span>
					<div className="grow border-t border-gray-200"></div>
				</div>
				<button
					type="button"
					className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-2 text-sm font-bold text-gray-800 sm:py-2.5 sm:text-base"
				>
					<img src={googleLogo} alt="google-logo" width={20} />
					<span>Daftar dengan Google</span>
				</button>
			</form>
		</div>
	);
};

export default RegistCard;
