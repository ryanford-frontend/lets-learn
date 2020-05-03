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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#31373D",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["circle"](15.5, 12.5, 3, {["cy"]: "12.5",["r"]: "1.5",["fill"]: "#31373D",["cx"]: "15.5",}));el.appendChild(svg["circle"](20.5, 12.5, 3, {["cy"]: "12.5",["r"]: "1.5",["fill"]: "#31373D",["cx"]: "20.5",}));el.appendChild(svg["ellipse"](18, 15.5, 2, 1, {["rx"]: "1",["cy"]: "15.5",["ry"]: ".5",["fill"]: "#292F33",["cx"]: "18",}));el.appendChild(svg["path"]("M29.021 24.883c-.52-.189-1.093.078-1.282.598L20.923 23l6.816-2.48c.189.52.762.786 1.281.598.52-.19.787-.762.598-1.281-.188-.519-.762-.787-1.281-.599.519-.189.787-.762.598-1.281-.19-.52-.762-.787-1.281-.598-.519.188-.787.763-.598 1.282L18 21.937l-9.056-3.296c.189-.52-.078-1.094-.598-1.282-.52-.19-1.092.078-1.281.598-.189.519.078 1.093.598 1.281-.52-.189-1.093.079-1.281.599-.189.52.078 1.092.598 1.281.52.188 1.092-.078 1.281-.598L15.077 23l-6.815 2.48c-.189-.52-.763-.787-1.282-.598-.519.189-.786.762-.598 1.281.189.519.763.787 1.282.598-.52.19-.787.763-.598 1.282.188.52.763.786 1.281.598.519-.189.787-.763.598-1.282L18 24.065l9.055 3.295c-.19.52.079 1.093.598 1.282.519.188 1.093-.078 1.281-.598.189-.519-.078-1.093-.598-1.282.52.19 1.093-.078 1.282-.598.189-.519-.079-1.093-.597-1.281z", {["fill"]: "#E6E7E8",["d"]: "M29.021 24.883c-.52-.189-1.093.078-1.282.598L20.923 23l6.816-2.48c.189.52.762.786 1.281.598.52-.19.787-.762.598-1.281-.188-.519-.762-.787-1.281-.599.519-.189.787-.762.598-1.281-.19-.52-.762-.787-1.281-.598-.519.188-.787.763-.598 1.282L18 21.937l-9.056-3.296c.189-.52-.078-1.094-.598-1.282-.52-.19-1.092.078-1.281.598-.189.519.078 1.093.598 1.281-.52-.189-1.093.079-1.281.599-.189.52.078 1.092.598 1.281.52.188 1.092-.078 1.281-.598L15.077 23l-6.815 2.48c-.189-.52-.763-.787-1.282-.598-.519.189-.786.762-.598 1.281.189.519.763.787 1.282.598-.52.19-.787.763-.598 1.282.188.52.763.786 1.281.598.519-.189.787-.763.598-1.282L18 24.065l9.055 3.295c-.19.52.079 1.093.598 1.282.519.188 1.093-.078 1.281-.598.189-.519-.078-1.093-.598-1.282.52.19 1.093-.078 1.282-.598.189-.519-.079-1.093-.597-1.281z",}));el.appendChild(svg["path"]("M18 7c-4 0-6 3.239-6 6 0 1.394.827 2.399 2 3.054V18c0 .553.448 1 1 1s1-.447 1-1v-1.216c.33.072.665.127 1 .162V18c0 .553.448 1 1 1s1-.447 1-1v-1.054c.335-.036.67-.09 1-.162V18c0 .553.447 1 1 1s1-.447 1-1v-1.946c1.173-.654 2-1.659 2-3.054 0-2.761-2-6-6-6zm-2.5 7c-.829 0-1.5 0-1.5-1.5 0-.829.671-1.5 1.5-1.5 1.5 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm2.5 2c-.552 0-1-.224-1-.5s.448-.5 1-.5 1 .224 1 .5-.448.5-1 .5zm2.5-2c-.828 0-1.5-.671-1.5-1.5s0-1.5 1.5-1.5c.828 0 1.5.671 1.5 1.5 0 1.5-.672 1.5-1.5 1.5z", {["fill"]: "#E6E7E8",["d"]: "M18 7c-4 0-6 3.239-6 6 0 1.394.827 2.399 2 3.054V18c0 .553.448 1 1 1s1-.447 1-1v-1.216c.33.072.665.127 1 .162V18c0 .553.448 1 1 1s1-.447 1-1v-1.054c.335-.036.67-.09 1-.162V18c0 .553.447 1 1 1s1-.447 1-1v-1.946c1.173-.654 2-1.659 2-3.054 0-2.761-2-6-6-6zm-2.5 7c-.829 0-1.5 0-1.5-1.5 0-.829.671-1.5 1.5-1.5 1.5 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm2.5 2c-.552 0-1-.224-1-.5s.448-.5 1-.5 1 .224 1 .5-.448.5-1 .5zm2.5-2c-.828 0-1.5-.671-1.5-1.5s0-1.5 1.5-1.5c.828 0 1.5.671 1.5 1.5 0 1.5-.672 1.5-1.5 1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};