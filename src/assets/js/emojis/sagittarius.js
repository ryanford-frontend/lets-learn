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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M28.5 6H17c-.829 0-1.5.671-1.5 1.5S16.171 9 17 9h7.879L13 20.879 9.061 16.94c-.586-.586-1.535-.586-2.121 0-.586.585-.586 1.536 0 2.121L10.879 23 5.94 27.94c-.586.586-.586 1.535 0 2.121.292.293.676.439 1.06.439s.768-.146 1.061-.44L13 25.121l3.94 3.939c.293.293.677.44 1.06.44s.768-.146 1.06-.44c.586-.586.586-1.535 0-2.121L15.121 23 27 11.121V19c0 .828.672 1.5 1.5 1.5S30 19.828 30 19V7.5c0-.829-.672-1.5-1.5-1.5z", {["fill"]: "#FFF",["d"]: "M28.5 6H17c-.829 0-1.5.671-1.5 1.5S16.171 9 17 9h7.879L13 20.879 9.061 16.94c-.586-.586-1.535-.586-2.121 0-.586.585-.586 1.536 0 2.121L10.879 23 5.94 27.94c-.586.586-.586 1.535 0 2.121.292.293.676.439 1.06.439s.768-.146 1.061-.44L13 25.121l3.94 3.939c.293.293.677.44 1.06.44s.768-.146 1.06-.44c.586-.586.586-1.535 0-2.121L15.121 23 27 11.121V19c0 .828.672 1.5 1.5 1.5S30 19.828 30 19V7.5c0-.829-.672-1.5-1.5-1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};