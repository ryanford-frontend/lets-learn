import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M22.235 35.662c-.418 0-.83-.123-1.182-.361l-2.96-2.007-2.959 2.007c-.354.238-.766.361-1.184.361-.183 0-.365-.023-.546-.072-.589-.156-1.084-.562-1.351-1.113l-1.721-2.393-3.405-.568c-.05.003-.101.005-.151.005-.558 0-1.096-.222-1.491-.617-.433-.435-.657-1.032-.614-1.642l.256-3.567-3.215-1.56c-.551-.266-.958-.762-1.116-1.353-.159-.591-.053-1.221.291-1.729l1.152-2.928-1.152-2.991c-.343-.507-.45-1.137-.291-1.729.159-.589.565-1.084 1.116-1.351l3.215-1.561-.254-3.564c-.043-.612.181-1.212.614-1.642.395-.397.933-.618 1.491-.618.05 0 .101 0 .151.004l3.28-.506 1.846-2.452c.267-.551.761-.958 1.351-1.116.181-.048.363-.073.546-.073.418 0 .83.125 1.184.363l2.959 2.005 2.96-2.005c.352-.239.764-.363 1.182-.363.183 0 .369.025.545.073.592.159 1.088.565 1.354 1.116L26 4.042l3.262.631c.048-.004.1-.004.149-.004.558 0 1.094.221 1.493.618.431.43.656 1.03.612 1.642l-.26 3.565 3.221 1.561c.551.267.957.761 1.113 1.351.158.592.055 1.223-.289 1.729l-.926 2.908.926 3.011c.344.508.447 1.138.289 1.729-.156.591-.562 1.087-1.113 1.353l-3.221 1.56.26 3.567c.044.609-.182 1.206-.612 1.642-.399.396-.935.617-1.493.617-.049 0-.101-.002-.149-.005l-3.22.526-1.908 2.435c-.266.551-.762.957-1.354 1.113-.176.049-.362.071-.545.071z", {["fill"]: "#E1E8ED",["d"]: "M22.235 35.662c-.418 0-.83-.123-1.182-.361l-2.96-2.007-2.959 2.007c-.354.238-.766.361-1.184.361-.183 0-.365-.023-.546-.072-.589-.156-1.084-.562-1.351-1.113l-1.721-2.393-3.405-.568c-.05.003-.101.005-.151.005-.558 0-1.096-.222-1.491-.617-.433-.435-.657-1.032-.614-1.642l.256-3.567-3.215-1.56c-.551-.266-.958-.762-1.116-1.353-.159-.591-.053-1.221.291-1.729l1.152-2.928-1.152-2.991c-.343-.507-.45-1.137-.291-1.729.159-.589.565-1.084 1.116-1.351l3.215-1.561-.254-3.564c-.043-.612.181-1.212.614-1.642.395-.397.933-.618 1.491-.618.05 0 .101 0 .151.004l3.28-.506 1.846-2.452c.267-.551.761-.958 1.351-1.116.181-.048.363-.073.546-.073.418 0 .83.125 1.184.363l2.959 2.005 2.96-2.005c.352-.239.764-.363 1.182-.363.183 0 .369.025.545.073.592.159 1.088.565 1.354 1.116L26 4.042l3.262.631c.048-.004.1-.004.149-.004.558 0 1.094.221 1.493.618.431.43.656 1.03.612 1.642l-.26 3.565 3.221 1.561c.551.267.957.761 1.113 1.351.158.592.055 1.223-.289 1.729l-.926 2.908.926 3.011c.344.508.447 1.138.289 1.729-.156.591-.562 1.087-1.113 1.353l-3.221 1.56.26 3.567c.044.609-.182 1.206-.612 1.642-.399.396-.935.617-1.493.617-.049 0-.101-.002-.149-.005l-3.22.526-1.908 2.435c-.266.551-.762.957-1.354 1.113-.176.049-.362.071-.545.071z",}));el.appendChild(svg["path"]("M18.5 28.709c-3.708.041-8.167-2.875-7.792-8.37.133-1.959.903-3.779 2.341-5.116 2.543-2.365 6.538-2.219 8.903.324.986 1.061 1.5 2.443 1.447 3.891-.052 1.447-.665 2.788-1.727 3.774-.918.853-2.104 1.302-3.365 1.253-1.253-.046-2.413-.577-3.266-1.495-.785-.844-1.059-2.045-.733-3.214.331-1.188 1.219-2.095 2.375-2.425.532-.151 1.123-.236 1.275.294.152.531-.38.757-1.083 1.25-.833.584-1.292 1.667-.368 2.733.471.544 1.155.831 1.874.857.716.024 1.405-.228 1.931-.719.669-.622 1.057-1.469 1.09-2.383.033-.914-.292-1.786-.914-2.456-1.615-1.736-4.34-1.836-6.077-.221-1.046.973-1.652 2.295-1.704 3.724-.052 1.429.455 2.791 1.428 3.838 1.202 1.293 2.835 2.04 4.6 2.104 1.764.07 3.447-.562 4.74-1.765 1.588-1.476 2.506-3.483 2.585-5.649.079-2.167-.691-4.234-2.167-5.822-3.725-4.008-8.601-4.952-13.643-1.91-.763.463-1.401 1.139-1.833.794-.208-.167-.314-.481.09-.857 4.815-4.478 12.376-4.201 16.851.614 1.84 1.979 2.919 4.562 2.7 7.257-.683 8.403-6.558 9.861-9.558 9.695z", {["fill"]: "#D372B8",["d"]: "M18.5 28.709c-3.708.041-8.167-2.875-7.792-8.37.133-1.959.903-3.779 2.341-5.116 2.543-2.365 6.538-2.219 8.903.324.986 1.061 1.5 2.443 1.447 3.891-.052 1.447-.665 2.788-1.727 3.774-.918.853-2.104 1.302-3.365 1.253-1.253-.046-2.413-.577-3.266-1.495-.785-.844-1.059-2.045-.733-3.214.331-1.188 1.219-2.095 2.375-2.425.532-.151 1.123-.236 1.275.294.152.531-.38.757-1.083 1.25-.833.584-1.292 1.667-.368 2.733.471.544 1.155.831 1.874.857.716.024 1.405-.228 1.931-.719.669-.622 1.057-1.469 1.09-2.383.033-.914-.292-1.786-.914-2.456-1.615-1.736-4.34-1.836-6.077-.221-1.046.973-1.652 2.295-1.704 3.724-.052 1.429.455 2.791 1.428 3.838 1.202 1.293 2.835 2.04 4.6 2.104 1.764.07 3.447-.562 4.74-1.765 1.588-1.476 2.506-3.483 2.585-5.649.079-2.167-.691-4.234-2.167-5.822-3.725-4.008-8.601-4.952-13.643-1.91-.763.463-1.401 1.139-1.833.794-.208-.167-.314-.481.09-.857 4.815-4.478 12.376-4.201 16.851.614 1.84 1.979 2.919 4.562 2.7 7.257-.683 8.403-6.558 9.861-9.558 9.695z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};