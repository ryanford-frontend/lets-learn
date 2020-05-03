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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M1.933 17.455c0-4.992 3.36-8.833 8.256-8.833 4.825 0 8.257 3.96 8.257 8.833 0 4.969-3.336 8.833-8.257 8.833-4.872 0-8.256-3.864-8.256-8.833zm12.769 0c0-2.904-1.512-5.52-4.513-5.52-3 0-4.512 2.616-4.512 5.52 0 2.929 1.464 5.521 4.512 5.521 3.048 0 4.513-2.592 4.513-5.521zm5.23-6.913c0-.984.721-1.776 1.801-1.776 1.031 0 1.8.672 1.8 1.776v5.185l5.905-6.289c.264-.288.719-.672 1.391-.672.912 0 1.777.696 1.777 1.728 0 .624-.385 1.128-1.176 1.92l-4.537 4.464 5.545 5.785c.576.576 1.008 1.103 1.008 1.824 0 1.128-.889 1.655-1.873 1.655-.695 0-1.15-.407-1.824-1.128l-6.216-6.721v6.121c0 .936-.72 1.728-1.8 1.728-1.032 0-1.801-.672-1.801-1.728V10.542z", {["d"]: "M1.933 17.455c0-4.992 3.36-8.833 8.256-8.833 4.825 0 8.257 3.96 8.257 8.833 0 4.969-3.336 8.833-8.257 8.833-4.872 0-8.256-3.864-8.256-8.833zm12.769 0c0-2.904-1.512-5.52-4.513-5.52-3 0-4.512 2.616-4.512 5.52 0 2.929 1.464 5.521 4.512 5.521 3.048 0 4.513-2.592 4.513-5.521zm5.23-6.913c0-.984.721-1.776 1.801-1.776 1.031 0 1.8.672 1.8 1.776v5.185l5.905-6.289c.264-.288.719-.672 1.391-.672.912 0 1.777.696 1.777 1.728 0 .624-.385 1.128-1.176 1.92l-4.537 4.464 5.545 5.785c.576.576 1.008 1.103 1.008 1.824 0 1.128-.889 1.655-1.873 1.655-.695 0-1.15-.407-1.824-1.128l-6.216-6.721v6.121c0 .936-.72 1.728-1.8 1.728-1.032 0-1.801-.672-1.801-1.728V10.542z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};