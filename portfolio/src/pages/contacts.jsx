import { useState, useEffect } from "react";
import "../styles/Contacts.css";

function App() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const [statusColor, setStatusColor] = useState("");
	const [sending, setSending] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		setStatus("");
		setStatusColor("");

		if (!email || !message) {
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
					emailTo: email,
					message,
				}),
			});

			const result = await response.json();

			if (result.ok) {
				setStatus("Email sent successfully!");
				setStatusColor("green");
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
			<div className="contacts-header">
				<h1>Get In Touch</h1>
				<p>Feel free to reach out for any inquiries or collaboration opportunities</p>
			</div>
			<div className="container">
				<form noValidate onSubmit={handleSubmit}>
					<fieldset>
						<fieldset className="email-fieldset">
							<legend>Email Address</legend>
							<input
								type="email"
								placeholder="your.email@example.com"
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
							{sending ? "Sending..." : "Send Message"}
						</button>

						<p className={`status ${statusClass}`}>
							{status}
						</p>
					</fieldset>
				</form>

				<div className="contact-sidebar">
					<h3>Contact Details</h3>
					<div className="contact-item">
						<span className="contact-icon">✉️</span>
						<div>
							<p className="contact-label">Email</p>
							<a href="mailto:your.email@example.com">loyolajohnmark010@gmail.com</a>
						</div>
					</div>

					<div className="contact-item">
						<span className="contact-icon">📱</span>
						<div>
							<p className="contact-label">Phone</p>
							<a href="tel:+1234567890">+63 07 145 6135</a>
						</div>
					</div>

					<div className="social-links">
						<h4>Connect With Me</h4>
						<div className="social-icons">
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="LinkedIn">
								in
							</a>
							<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub">
								⚙️
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
