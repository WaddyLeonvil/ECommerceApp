import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'

export default function Home() {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
		</div>
	)
}
