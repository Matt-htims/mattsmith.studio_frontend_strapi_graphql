export default function CTAsection({ cta, body, buttonText, buttonLink }) {
	return (
		<div>
			<div className="text">
				<h3>{cta}</h3>
				<p>{body}</p>
			</div>
			<div className="button">
				<a href={buttonLink}>
					<button>{buttonText}</button>
				</a>
			</div>
		</div>
	);
}
