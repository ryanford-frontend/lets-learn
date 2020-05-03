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
				el.appendChild(svg["path"]("M23.216 20.937l-1.721-6.86-3.947-8.816c-.502-1.297.143-2.756 1.44-3.257 1.296-.506 2.756.143 3.258 1.44l6.203 15.769-5.233 1.724z", {["fill"]: "#EF9645",["d"]: "M23.216 20.937l-1.721-6.86-3.947-8.816c-.502-1.297.143-2.756 1.44-3.257 1.296-.506 2.756.143 3.258 1.44l6.203 15.769-5.233 1.724z",}));el.appendChild(svg["path"]("M31.565 18.449c-.488-2.581-1.988-6.523-1.988-6.523L23.79 1.437C23.164.195 21.648-.303 20.407.322c-1.242.626-1.742 2.141-1.115 3.383l5.33 9.547c.013.022 1.413 5.491 1.413 5.491-1.078-.995-2.607-2.359-4.015-3.618-3.098-2.772-4.936-3.811-4.936-3.811-.71-.443-1.179-.506-2.132-.059L9.08 13.823c-.157.078-.29.188-.395.329l-2.313 3.086c-.893 1.067-.752 2.655.315 3.547 1.066.893 2.653.75 3.548-.314.048-.058 1.78-2.56 1.936-2.64 1.037-.533 2.965-1.447 3.808-1.42.897.029 6.281 5.957 6.281 5.957.206.259.23.618.06.902l-2.915 5.228c-.079.131-.193.236-.33.303l-2.674 1.5c-.154.075-.328.099-.496.067l-5.27-2.272c-.262-.113-.48-.32-.592-.583-.787-1.85-.898-3.619-.899-3.639-.065-1.39-1.244-2.463-2.634-2.398-1.387.056-2.463 1.243-2.398 2.633.013.263.351 5.64 4.727 9.292 2.528 2.108 5.654 2.924 9.649 2.387 4.612-.619 7.469-1.233 11.506-9.558 1.117-2.305 1.903-6.024 1.571-7.781z", {["fill"]: "#FFDC5D",["d"]: "M31.565 18.449c-.488-2.581-1.988-6.523-1.988-6.523L23.79 1.437C23.164.195 21.648-.303 20.407.322c-1.242.626-1.742 2.141-1.115 3.383l5.33 9.547c.013.022 1.413 5.491 1.413 5.491-1.078-.995-2.607-2.359-4.015-3.618-3.098-2.772-4.936-3.811-4.936-3.811-.71-.443-1.179-.506-2.132-.059L9.08 13.823c-.157.078-.29.188-.395.329l-2.313 3.086c-.893 1.067-.752 2.655.315 3.547 1.066.893 2.653.75 3.548-.314.048-.058 1.78-2.56 1.936-2.64 1.037-.533 2.965-1.447 3.808-1.42.897.029 6.281 5.957 6.281 5.957.206.259.23.618.06.902l-2.915 5.228c-.079.131-.193.236-.33.303l-2.674 1.5c-.154.075-.328.099-.496.067l-5.27-2.272c-.262-.113-.48-.32-.592-.583-.787-1.85-.898-3.619-.899-3.639-.065-1.39-1.244-2.463-2.634-2.398-1.387.056-2.463 1.243-2.398 2.633.013.263.351 5.64 4.727 9.292 2.528 2.108 5.654 2.924 9.649 2.387 4.612-.619 7.469-1.233 11.506-9.558 1.117-2.305 1.903-6.024 1.571-7.781z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};