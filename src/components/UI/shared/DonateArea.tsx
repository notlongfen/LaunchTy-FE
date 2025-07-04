import { useState } from 'react'
import Button from '../button/Button'
import useCharityTokenAmountStore from '@/store/launchpad/LaunchpadDetailStore'
import Image from 'next/image'

interface CharityAreaProps {
	enabled?: boolean
	handleDonate?: () => void
}
const StakeArea: React.FC<CharityAreaProps> = ({ enabled, handleDonate }) => {
	const { tokenAmount, setTokenAmount } = useCharityTokenAmountStore()
	const isButtonDisabled = !enabled || tokenAmount <= 0
	return (
		<div className="">
			<div className="glass-component-1 p-12 text-white rounded-xl h-[400px]">
				<div className="glass-component-1 rounded-xl h-44">
					<div className="font-orbitron font-bold text-base mt-6 mb-10 ml-4 text-[#C2C6CC]">
						Number of locked token
					</div>

					<div className="flex flex-row items-center justify-between pr-5">
						<input
							type="number"
							className="ml-6 text-white text-2xl font-bold bg-transparent outline-none w-2/3
							[&::-webkit-inner-spin-button]:appearance-none 
    						[&::-webkit-outer-spin-button]:appearance-none"
							placeholder="--USDT"
							onChange={(e) => {
								setTokenAmount(parseInt(e.target.value) || 0)
							}}
							disabled={!enabled} // vô hiệu hoá input nếu không được phép
						/>
						<div className="w-1/3 flex flex-row items-center justify-end">
							{/* <svg
								width="50"
								height="50"
								viewBox="0 0 66 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_326_5679)">
									<path
										d="M65.9412 32.9882C65.9412 51.1234 51.2406 65.824 33.1054 65.824C14.9708 65.824 0.269531 51.1234 0.269531 32.9882C0.269531 14.8533 14.9708 0.152344 33.1054 0.152344C51.2406 0.152344 65.9412 14.8533 65.9412 32.9882Z"
										fill="#1BA27A"
									/>
									<path
										d="M48.5161 16.71H17.4238V24.2162H29.2168V35.2491H36.7231V24.2162H48.5161V16.71Z"
										fill="white"
									/>
									<path
										d="M33.0418 36.4248C23.2863 36.4248 15.3772 34.8808 15.3772 32.976C15.3772 31.0715 23.286 29.5273 33.0418 29.5273C42.7974 29.5273 50.7062 31.0715 50.7062 32.976C50.7062 34.8808 42.7974 36.4248 33.0418 36.4248ZM52.8763 33.551C52.8763 31.0948 43.9962 29.104 33.0418 29.104C22.0878 29.104 13.207 31.0948 13.207 33.551C13.207 35.7139 20.093 37.5159 29.2178 37.9152V53.7532H36.7234V37.9214C45.9184 37.5346 52.8763 35.725 52.8763 33.551Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0_326_5679">
										<rect width="66" height="66" fill="white" />
									</clipPath>
								</defs>
							</svg> */}
							<div className="relative w-12 h-12 rounded-full overflow-hidden">
								<Image
									src="https://s3.coinmarketcap.com/static-gravity/image/fecbf806c893460cbc5241d4e902b039.png"
									alt="Project Logo"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className=" flex flex-row gap-2 mt-10 w-full">
					{/* stake button */}
					<Button
						className={`w-full font-extrabold transition ${
							isButtonDisabled ? 'bg-gray-500' : 'bg-gradient glass-component-1'
						}`}
						disabled={isButtonDisabled}
						onClick={() => {
							handleDonate?.()
						}}
					>
						Donate
					</Button>
				</div>
			</div>
		</div>
	)
}

export default StakeArea
