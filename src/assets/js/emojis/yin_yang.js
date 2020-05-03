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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M18.964 4.033C11.251 3.501 4.566 9.322 4.033 17.036s5.289 14.399 13.002 14.931c7.714.533 14.399-5.289 14.931-13.002.533-7.714-5.288-14.399-13.002-14.932zm-1.183 25.983c-3.317-.06-5.958-2.799-5.897-6.118C11.943 20.583 14.683 17.94 18 18c3.317.06 6.056-2.581 6.118-5.897.046-2.558-1.524-4.748-3.758-5.657l.151-.171c5.517 1.174 9.612 6.096 9.506 11.943-.122 6.639-5.597 11.919-12.236 11.798z", {["fill"]: "#FFF",["d"]: "M18.964 4.033C11.251 3.501 4.566 9.322 4.033 17.036s5.289 14.399 13.002 14.931c7.714.533 14.399-5.289 14.931-13.002.533-7.714-5.288-14.399-13.002-14.932zm-1.183 25.983c-3.317-.06-5.958-2.799-5.897-6.118C11.943 20.583 14.683 17.94 18 18c3.317.06 6.056-2.581 6.118-5.897.046-2.558-1.524-4.748-3.758-5.657l.151-.171c5.517 1.174 9.612 6.096 9.506 11.943-.122 6.639-5.597 11.919-12.236 11.798z",}));el.appendChild(svg["circle"](18, 24, 5, {["cy"]: "24",["r"]: "2.5",["fill"]: "#FFF",["cx"]: "18",}));el.appendChild(svg["circle"](18, 12, 5, {["cy"]: "12",["r"]: "2.5",["fill"]: "#9266CC",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};