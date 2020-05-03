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
				el.appendChild(svg["path"]("M32 7H4c-2.209 0-4 1.791-4 4v15c0 2.209 1.791 4 4 4h11.416c.52.596 1.477 1 2.584 1s2.065-.404 2.584-1H32c2.209 0 4-1.791 4-4V11c0-2.209-1.791-4-4-4z", {["fill"]: "#269",["d"]: "M32 7H4c-2.209 0-4 1.791-4 4v15c0 2.209 1.791 4 4 4h11.416c.52.596 1.477 1 2.584 1s2.065-.404 2.584-1H32c2.209 0 4-1.791 4-4V11c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M20 27c0 1.104-.896 2-2 2s-2-.896-2-2V9c0-1.104.896-2 2-2s2 .896 2 2v18z", {["fill"]: "#292F33",["d"]: "M20 27c0 1.104-.896 2-2 2s-2-.896-2-2V9c0-1.104.896-2 2-2s2 .896 2 2v18z",}));el.appendChild(svg["path"]("M18 26c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v18z", {["fill"]: "#99AAB5",["d"]: "M18 26c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v18z",}));el.appendChild(svg["path"]("M18 26c-.999-1.998-3.657-2-4-2-2 0-5 2-8 2-1 0-2-.896-2-2V8c0-1.104 1-2 2-2 3.255 0 6-2 8-2 3 0 4 1.896 4 3v19z", {["fill"]: "#E1E8ED",["d"]: "M18 26c-.999-1.998-3.657-2-4-2-2 0-5 2-8 2-1 0-2-.896-2-2V8c0-1.104 1-2 2-2 3.255 0 6-2 8-2 3 0 4 1.896 4 3v19z",}));el.appendChild(svg["path"]("M34 26c0 1.104-.896 2-2 2H20c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v18z", {["fill"]: "#99AAB5",["d"]: "M34 26c0 1.104-.896 2-2 2H20c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v18z",}));el.appendChild(svg["path"]("M18 26c.999-1.998 3.657-2 4-2 2 0 5 2 8 2 1 0 2-.896 2-2V8c0-1.104-1-2-2-2-3.256 0-6-2-8-2-3 0-4 1.896-4 3v19z", {["fill"]: "#CCD6DD",["d"]: "M18 26c.999-1.998 3.657-2 4-2 2 0 5 2 8 2 1 0 2-.896 2-2V8c0-1.104-1-2-2-2-3.256 0-6-2-8-2-3 0-4 1.896-4 3v19z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};