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
				el.appendChild(svg["path"]("M0 14h36v8H0z", {["fill"]: "#EEE",["d"]: "M0 14h36v8H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4zM0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-5H0v5z", {["fill"]: "#0156A3",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4zM0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-5H0v5z",}));el.appendChild(svg["path"]("M18.265 17.76l-.249-.766-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473zm5.332 2.48l-.249.766.652-.473.652.473-.249-.766.652-.473h-.806L24 19l-.249.767h-.806zm.652-4.48L24 14.994l-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473zm-12.707 4.48l-.249.766.652-.473.652.473-.249-.766.652-.473h-.806L11.945 19l-.249.767h-.806zm.652-4.48l-.249-.766-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473z", {["fill"]: "#2657A7",["d"]: "M18.265 17.76l-.249-.766-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473zm5.332 2.48l-.249.766.652-.473.652.473-.249-.766.652-.473h-.806L24 19l-.249.767h-.806zm.652-4.48L24 14.994l-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473zm-12.707 4.48l-.249.766.652-.473.652.473-.249-.766.652-.473h-.806L11.945 19l-.249.767h-.806zm.652-4.48l-.249-.766-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};