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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#CCD6DD",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M11.949 17.636L.637 28.948c-.027.029-.037.064-.06.092.34.57.814 1.043 1.384 1.384.029-.023.063-.033.09-.06L13.365 19.05c.39-.391.39-1.023 0-1.414-.392-.391-1.024-.391-1.416 0M35.423 29.04c-.021-.028-.033-.063-.06-.09L24.051 17.636c-.392-.391-1.024-.391-1.415 0-.391.392-.391 1.024 0 1.414l11.313 11.314c.026.026.062.037.09.06.571-.34 1.044-.814 1.384-1.384", {["fill"]: "#99AAB5",["d"]: "M11.949 17.636L.637 28.948c-.027.029-.037.064-.06.092.34.57.814 1.043 1.384 1.384.029-.023.063-.033.09-.06L13.365 19.05c.39-.391.39-1.023 0-1.414-.392-.391-1.024-.391-1.416 0M35.423 29.04c-.021-.028-.033-.063-.06-.09L24.051 17.636c-.392-.391-1.024-.391-1.415 0-.391.392-.391 1.024 0 1.414l11.313 11.314c.026.026.062.037.09.06.571-.34 1.044-.814 1.384-1.384",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v1.03l14.527 14.496c1.895 1.893 4.988 1.893 6.885 0L36 10.009V9c0-2.209-1.791-4-4-4", {["fill"]: "#99AAB5",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v1.03l14.527 14.496c1.895 1.893 4.988 1.893 6.885 0L36 10.009V9c0-2.209-1.791-4-4-4",}));el.appendChild(svg["path"]("M32 5H4C2.412 5 1.051 5.934.405 7.275l14.766 14.767c1.562 1.562 4.096 1.562 5.657 0L35.595 7.275C34.949 5.934 33.589 5 32 5", {["fill"]: "#E1E8ED",["d"]: "M32 5H4C2.412 5 1.051 5.934.405 7.275l14.766 14.767c1.562 1.562 4.096 1.562 5.657 0L35.595 7.275C34.949 5.934 33.589 5 32 5",}));el.appendChild(svg["path"]("M27 16.78c0-2.754-2.232-4.987-4.986-4.987-1.672 0-3.148.826-4.053 2.087-.906-1.261-2.381-2.087-4.051-2.087-2.754 0-4.987 2.233-4.987 4.987 0 .391.05.769.134 1.133.693 4.302 5.476 8.841 8.904 10.087 3.428-1.246 8.212-5.785 8.904-10.086.085-.365.135-.744.135-1.134z", {["fill"]: "#DD2E44",["d"]: "M27 16.78c0-2.754-2.232-4.987-4.986-4.987-1.672 0-3.148.826-4.053 2.087-.906-1.261-2.381-2.087-4.051-2.087-2.754 0-4.987 2.233-4.987 4.987 0 .391.05.769.134 1.133.693 4.302 5.476 8.841 8.904 10.087 3.428-1.246 8.212-5.785 8.904-10.086.085-.365.135-.744.135-1.134z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};