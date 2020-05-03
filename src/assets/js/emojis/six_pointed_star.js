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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M18 34.156c-1.011 0-1.928-.588-2.516-1.614L3.811 12.168c-.602-1.05-.66-2.149-.159-3.014.473-.816 1.363-1.284 2.441-1.284h24.816c1.09 0 1.978.473 2.438 1.296.485.869.396 1.961-.242 2.997l-12.63 20.468c-.597.969-1.499 1.525-2.475 1.525zM6.524 10.87l11.485 20.044 12.365-20.038-23.85-.006z", {["fill"]: "#F5F8FA",["d"]: "M18 34.156c-1.011 0-1.928-.588-2.516-1.614L3.811 12.168c-.602-1.05-.66-2.149-.159-3.014.473-.816 1.363-1.284 2.441-1.284h24.816c1.09 0 1.978.473 2.438 1.296.485.869.396 1.961-.242 2.997l-12.63 20.468c-.597.969-1.499 1.525-2.475 1.525zM6.524 10.87l11.485 20.044 12.365-20.038-23.85-.006z",}));el.appendChild(svg["path"]("M30.909 27.5H6.093c-1.079 0-1.968-.469-2.441-1.285-.501-.865-.443-1.963.159-3.013L15.484 2.829c.589-1.027 1.505-1.615 2.516-1.615.976 0 1.878.557 2.476 1.527l12.63 20.466c.639 1.035.728 2.127.242 2.996-.46.824-1.349 1.297-2.439 1.297zM6.528 24.493l23.85.007L18.009 4.457 6.528 24.493z", {["fill"]: "#F5F8FA",["d"]: "M30.909 27.5H6.093c-1.079 0-1.968-.469-2.441-1.285-.501-.865-.443-1.963.159-3.013L15.484 2.829c.589-1.027 1.505-1.615 2.516-1.615.976 0 1.878.557 2.476 1.527l12.63 20.466c.639 1.035.728 2.127.242 2.996-.46.824-1.349 1.297-2.439 1.297zM6.528 24.493l23.85.007L18.009 4.457 6.528 24.493z",}));el.appendChild(svg["circle"](18, 18, 8, {["cy"]: "18",["r"]: "4",["fill"]: "#F5F8FA",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};