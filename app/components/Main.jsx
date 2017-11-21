let React = require('react');

let Main = (props) => {
	return (
		<div>
			<div>
				<div>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;