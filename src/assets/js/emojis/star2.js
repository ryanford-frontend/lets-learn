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
				el.appendChild(svg["path"]("M28.84 17.638c-.987 1.044-1.633 3.067-1.438 4.493l.892 6.441c.197 1.427-.701 2.087-1.996 1.469l-5.851-2.796c-1.295-.62-3.408-.611-4.7.018l-5.826 2.842c-1.291.629-2.193-.026-2.007-1.452l.843-6.449c.186-1.427-.475-3.444-1.47-4.481l-4.494-4.688c-.996-1.037-.655-2.102.755-2.365l6.37-1.188c1.41-.263 3.116-1.518 3.793-2.789L16.762.956c.675-1.271 1.789-1.274 2.473-.009L22.33 6.66c.686 1.265 2.4 2.507 3.814 2.758l6.378 1.141c1.412.252 1.761 1.314.774 2.359l-4.456 4.72z", {["fill"]: "#FFAC33",["d"]: "M28.84 17.638c-.987 1.044-1.633 3.067-1.438 4.493l.892 6.441c.197 1.427-.701 2.087-1.996 1.469l-5.851-2.796c-1.295-.62-3.408-.611-4.7.018l-5.826 2.842c-1.291.629-2.193-.026-2.007-1.452l.843-6.449c.186-1.427-.475-3.444-1.47-4.481l-4.494-4.688c-.996-1.037-.655-2.102.755-2.365l6.37-1.188c1.41-.263 3.116-1.518 3.793-2.789L16.762.956c.675-1.271 1.789-1.274 2.473-.009L22.33 6.66c.686 1.265 2.4 2.507 3.814 2.758l6.378 1.141c1.412.252 1.761 1.314.774 2.359l-4.456 4.72z",}));el.appendChild(svg["path"]("M9.783 2.181c1.023 1.413 2.446 4.917 1.717 5.447-.728.531-3.607-1.91-4.63-3.323-1.022-1.413-.935-2.668-.131-3.254.804-.587 2.02-.282 3.044 1.13zm19.348 2.124C28.109 5.718 25.23 8.16 24.5 7.627c-.729-.53.695-4.033 1.719-5.445C27.242.768 28.457.463 29.262 1.051c.803.586.89 1.841-.131 3.254zM16.625 33.291c-.001-1.746.898-5.421 1.801-5.421.897 0 1.798 3.675 1.797 5.42 0 1.747-.804 2.712-1.8 2.71-.994.002-1.798-.962-1.798-2.709zm16.179-9.262c-1.655-.539-4.858-2.533-4.579-3.395.277-.858 4.037-.581 5.69-.041 1.655.54 2.321 1.605 2.013 2.556-.308.95-1.469 1.42-3.124.88zM2.083 20.594c1.655-.54 5.414-.817 5.694.044.276.857-2.928 2.854-4.581 3.392-1.654.54-2.818.07-3.123-.88-.308-.95.354-2.015 2.01-2.556z", {["fill"]: "#FFD983",["d"]: "M9.783 2.181c1.023 1.413 2.446 4.917 1.717 5.447-.728.531-3.607-1.91-4.63-3.323-1.022-1.413-.935-2.668-.131-3.254.804-.587 2.02-.282 3.044 1.13zm19.348 2.124C28.109 5.718 25.23 8.16 24.5 7.627c-.729-.53.695-4.033 1.719-5.445C27.242.768 28.457.463 29.262 1.051c.803.586.89 1.841-.131 3.254zM16.625 33.291c-.001-1.746.898-5.421 1.801-5.421.897 0 1.798 3.675 1.797 5.42 0 1.747-.804 2.712-1.8 2.71-.994.002-1.798-.962-1.798-2.709zm16.179-9.262c-1.655-.539-4.858-2.533-4.579-3.395.277-.858 4.037-.581 5.69-.041 1.655.54 2.321 1.605 2.013 2.556-.308.95-1.469 1.42-3.124.88zM2.083 20.594c1.655-.54 5.414-.817 5.694.044.276.857-2.928 2.854-4.581 3.392-1.654.54-2.818.07-3.123-.88-.308-.95.354-2.015 2.01-2.556z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};