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
				el.appendChild(svg["path"]("M35.22 30.741l-.024.024c-.97.97-2.542.97-3.511 0L7.835 6.915c-.582-.582-.582-1.525 0-2.107l1.429-1.429c.582-.582 1.525-.582 2.107 0l23.85 23.85c.969.97.969 2.542-.001 3.512z", {["fill"]: "#F4900C",["d"]: "M35.22 30.741l-.024.024c-.97.97-2.542.97-3.511 0L7.835 6.915c-.582-.582-.582-1.525 0-2.107l1.429-1.429c.582-.582 1.525-.582 2.107 0l23.85 23.85c.969.97.969 2.542-.001 3.512z",}));el.appendChild(svg["path"]("M17.765 6.946L14.229 3.41c-.586-.586-1.535-.586-2.121 0L8.573 6.946c-2.128 2.092-3.85 3.015-6.055 3.056-.171 1.573.665 5.193 1.967 6.652 1.692 1.896 4.545 2.495 7.223 2.454-.134-2.363.437-4.422 2.521-6.506l3.535-3.536c.587-.585.587-1.535.001-2.12z", {["fill"]: "#66757F",["d"]: "M17.765 6.946L14.229 3.41c-.586-.586-1.535-.586-2.121 0L8.573 6.946c-2.128 2.092-3.85 3.015-6.055 3.056-.171 1.573.665 5.193 1.967 6.652 1.692 1.896 4.545 2.495 7.223 2.454-.134-2.363.437-4.422 2.521-6.506l3.535-3.536c.587-.585.587-1.535.001-2.12z",}));el.appendChild(svg["path"]("M2.518 10.002C1.767 10.016.962 9.93.064 9.75c-.707 4.95 7.071 12.728 12.021 12.021-.193-.937-.328-1.819-.376-2.663-4.418-1.409-8.107-5.072-9.191-9.106z", {["fill"]: "#CCD6DD",["d"]: "M2.518 10.002C1.767 10.016.962 9.93.064 9.75c-.707 4.95 7.071 12.728 12.021 12.021-.193-.937-.328-1.819-.376-2.663-4.418-1.409-8.107-5.072-9.191-9.106z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};