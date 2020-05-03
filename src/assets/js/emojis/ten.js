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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M7.213 10.975H5.255C3.663 10.975 3 9.814 3 8.686c0-1.16.829-2.288 2.255-2.288h4.71c1.426 0 2.223 1.028 2.223 2.354v18.875c0 1.658-1.062 2.586-2.488 2.586s-2.487-.928-2.487-2.586V10.975zm7.967 7.231C15.18 12.799 17.27 6 23.97 6c6.7 0 8.791 6.799 8.791 12.206 0 5.406-2.091 12.207-8.791 12.207s-8.79-6.801-8.79-12.207zm12.406 0c0-2.521-.232-7.696-3.616-7.696-3.383 0-3.615 5.175-3.615 7.696 0 2.355.232 7.695 3.615 7.695 3.384 0 3.616-5.339 3.616-7.695z", {["fill"]: "#F5F8FA",["d"]: "M7.213 10.975H5.255C3.663 10.975 3 9.814 3 8.686c0-1.16.829-2.288 2.255-2.288h4.71c1.426 0 2.223 1.028 2.223 2.354v18.875c0 1.658-1.062 2.586-2.488 2.586s-2.487-.928-2.487-2.586V10.975zm7.967 7.231C15.18 12.799 17.27 6 23.97 6c6.7 0 8.791 6.799 8.791 12.206 0 5.406-2.091 12.207-8.791 12.207s-8.79-6.801-8.79-12.207zm12.406 0c0-2.521-.232-7.696-3.616-7.696-3.383 0-3.615 5.175-3.615 7.696 0 2.355.232 7.695 3.615 7.695 3.384 0 3.616-5.339 3.616-7.695z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};