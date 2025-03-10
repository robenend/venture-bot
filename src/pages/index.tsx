import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle, FaLock } from "react-icons/fa";
import "./main.css";

// Define the available rooms and their status
const rooms = [
	{
		id: "basics",
		name: "Programming Basics",
		difficulty: "Easy",
		status: "available",
		position: "top-1/4 left-1/4",
		description:
			"Learn the fundamentals of programming and software development.",
	},
	{
		id: "web-dev",
		name: "Web Development",
		difficulty: "Easy",
		status: "available",
		position: "top-1/3 right-1/4",
		description: "Master HTML, CSS, JavaScript and modern web frameworks.",
	},
	{
		id: "backend",
		name: "Backend Development",
		difficulty: "Medium",
		status: "available",
		position: "bottom-1/3 left-1/3",
		description: "Build robust server-side applications and APIs.",
	},
	{
		id: "algorithms",
		name: "Algorithms & Data Structures",
		difficulty: "Medium",
		status: "locked",
		position: "top-1/2 right-1/3",
		description: "Solve complex problems with efficient algorithms.",
	},
	{
		id: "architecture",
		name: "System Architecture",
		difficulty: "Hard",
		status: "locked",
		position: "bottom-1/4 right-1/4",
		description: "Design scalable and maintainable software systems.",
	},
];

const MapPage = () => {
	const navigate = useNavigate();
	const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
	const [showTooltip, setShowTooltip] = useState<string | null>(null);

	// Get difficulty color
	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "green";
			case "Medium":
				return "yellow";
			case "Hard":
				return "red";
			default:
				return "blue";
		}
	};

	const handleRoomClick = (roomId: string, status: string) => {
		if (status === "available") {
			navigate(`/room/${roomId}`);
		}
	};

	const getPositionStyle = (position: string) => {
		const positions = position.split(" ");
		const style: any = {};

		positions.forEach((pos) => {
			if (pos.includes("top")) {
				style.top = pos.split("-")[1];
			} else if (pos.includes("bottom")) {
				style.bottom = pos.split("-")[1];
			} else if (pos.includes("left")) {
				style.left = pos.split("-")[1];
			} else if (pos.includes("right")) {
				style.right = pos.split("-")[1];
			}
		});

		return style;
	};

	return (
		<div className="map-page">
			<header className="page-header">
				<h1 className="page-title">Learning Path</h1>
				<p className="page-subtitle">
					Navigate through software engineering topics
				</p>
			</header>

			<main className="map-container">
				<div className="map">
					{/* Map grid lines */}
					<div className="map-grid">
						{Array.from({ length: 12 }).map((_, i) => (
							<div key={`col-${i}`} className="grid-col"></div>
						))}
						{Array.from({ length: 12 }).map((_, i) => (
							<div key={`row-${i}`} className="grid-row"></div>
						))}
					</div>

					{/* Quick access panel */}
					<div className="quick-access-panel">
						<div className="panel-title">Quick Access:</div>
						<div className="panel-content">
							{rooms
								.filter((room) => room.status === "available")
								.map((room) => (
									<button
										key={room.id}
										className="quick-access-link"
										onClick={() => navigate(`/room/${room.id}`)}
									>
										<div
											className={`difficulty-dot ${getDifficultyColor(
												room.difficulty
											)}`}
										></div>
										<span>{room.name}</span>
									</button>
								))}
						</div>
					</div>

					{/* Map decoration elements */}
					<div className="map-decoration circle-1"></div>
					<div className="map-decoration circle-2"></div>
					<div className="map-decoration circle-3"></div>

					{/* Room nodes */}
					{rooms.map((room) => {
						const positionStyle = getPositionStyle(room.position);

						return (
							<div
								key={room.id}
								className="room-node-container"
								style={positionStyle}
							>
								<div
									className={`room-node ${
										room.status === "locked" ? "locked" : ""
									} ${hoveredRoom === room.id ? "hovered" : ""}`}
									onClick={() => handleRoomClick(room.id, room.status)}
									onMouseEnter={() => {
										setHoveredRoom(room.id);
										setShowTooltip(room.id);
									}}
									onMouseLeave={() => {
										setHoveredRoom(null);
										setShowTooltip(null);
									}}
								>
									{room.status === "locked" ? (
										<FaLock className="lock-icon" />
									) : (
										<div
											className={`difficulty-dot ${getDifficultyColor(
												room.difficulty
											)}`}
										></div>
									)}
									<div
										className={`room-name ${
											hoveredRoom === room.id ? "highlighted" : ""
										}`}
									>
										{room.name}
									</div>
									{hoveredRoom === room.id && (
										<div className="hover-indicator"></div>
									)}
								</div>

								{showTooltip === room.id && (
									<div className="room-tooltip">
										<div className="tooltip-title">{room.name}</div>
										<div className="tooltip-description">
											{room.description}
										</div>
										<div className="tooltip-footer">
											<div
												className={`badge badge-${getDifficultyColor(
													room.difficulty
												)}`}
											>
												{room.difficulty}
											</div>
											{room.status === "locked" && (
												<div className="badge badge-outline">Locked</div>
											)}
										</div>
									</div>
								)}
							</div>
						);
					})}

					{/* Connection lines between rooms */}
					<svg className="connection-lines" xmlns="http://www.w3.org/2000/svg">
						<line
							x1="25%"
							y1="25%"
							x2="75%"
							y2="33%"
							className="connection-line available"
						/>
						<line
							x1="25%"
							y1="25%"
							x2="33%"
							y2="66%"
							className="connection-line available"
						/>
						<line
							x1="75%"
							y1="33%"
							x2="66%"
							y2="50%"
							className="connection-line locked"
						/>
						<line
							x1="33%"
							y1="66%"
							x2="75%"
							y2="75%"
							className="connection-line locked"
						/>
						<line
							x1="66%"
							y1="50%"
							x2="75%"
							y2="75%"
							className="connection-line locked"
						/>
					</svg>

					{/* Map legend */}
					<div className="map-legend">
						<div className="legend-title">
							<FaInfoCircle />
							<span>Legend</span>
						</div>
						<div className="legend-items">
							<div className="legend-item">
								<div className="difficulty-dot green"></div>
								<span>Easy</span>
							</div>
							<div className="legend-item">
								<div className="difficulty-dot yellow"></div>
								<span>Medium</span>
							</div>
							<div className="legend-item">
								<div className="difficulty-dot red"></div>
								<span>Hard</span>
							</div>
							<div className="legend-item">
								<FaLock className="lock-icon" />
								<span>Locked</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default MapPage;
