import { useState, useEffect } from "react";
import "../styles/Contacts.css";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const [statusColor, setStatusColor] = useState("");
	const [sending, setSending] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		setStatus("");
		setStatusColor("");

		if (!name || !email || !message) {
			setStatus("Please fill all the fields.");
			setStatusColor("red");
			return;
		}

		setSending(true);
		setStatus("Sending email...");
		setStatusColor("blue");

		try {
			const response = await fetch("http://localhost:3000/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					emailTo: email,
					message,
				}),
			});

			const result = await response.json();

			if (result.ok) {
				setStatus("Email sent successfully!");
				setStatusColor("green");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				setStatus("Failed: " + (result.error || "Unknown error"));
				setStatusColor("red");
			}
		} catch (error) {
			setStatus("Network error: " + error.message);
			setStatusColor("red");
		} finally {
			setSending(false);
		}
	}

	useEffect(() => {
		if (status) {
			const timer = setTimeout(() => {
				setStatus("");
				setStatusColor("");
			}, 4000);

			return () => clearTimeout(timer);
		}
	}, [status]);

	const statusClass =
		statusColor === "green"
			? "status-success"
			: statusColor === "red"
			? "status-error"
			: statusColor === "blue"
			? "status-info"
			: "";

	return (
		<div className="background">
			<div className="container">
				<form noValidate onSubmit={handleSubmit}>
					<fieldset>
						<fieldset className="name-fieldset">
							<legend>Name / Username</legend>
							<input
								type="text"
								placeholder="Name / Username"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</fieldset>

						<fieldset className="email-fieldset">
							<legend>Email Address</legend>
							<input
								type="email"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</fieldset>

						<fieldset className="message-fieldset">
							<legend>Message</legend>
							<textarea
								placeholder="Type your message in this box..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</fieldset>

						<button type="submit" disabled={sending}>
							{sending ? "Sending..." : "Send"}
						</button>

						<p className={`status ${statusClass}`}>
							{status}
						</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default App;
